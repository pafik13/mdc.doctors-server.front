/**
 * Amazon Web Services Configuration
 * (sails.config.aws)
 *
 */
var aws = require('aws-sdk'),
     fs = require('fs'),
      _ = require("lodash");

module.exports.aws = {
  apiKey: 'AKIAIIOVEZZ4O4DK26PA',
  apiSecret: '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',
  endPoint: 'sbl-crm.s3-website-us-east-1.amazonaws.com',
  bucket: 'sbl-crm',
  
  /* global sails */
  test: function(){
    sails.log.info(sails.config.appPath);
    var dir = sails.config.appPath + "/files";
    fs.readdir(dir, function(err, files) {
      if (err) {
        throw err;
      }
      
      console.log(files);
   
      // //var k = found.photoPath.replace(/^.*[\\\/]/, '');
      var file = files[0];
      console.log(file);
      console.log(file.split('-'));
      console.log(file.split('-', 1));
      
      // AMAZON AWS S3
      aws.config.update({
          accessKeyId: sails.config.aws.apiKey,
          secretAccessKey: sails.config.aws.apiSecret,
          signatureVersion: 'v4'
      });
      var ep = new aws.Endpoint(sails.config.aws.endPoint);
      var s3 = new aws.S3(ep);
      fs.readFile(dir + "/" + file, function(err, data) {
          if (err) {
            throw err;
          }
    
          var params = {
              Bucket: sails.config.aws.bucket,
              Key: file,
              Body: data,
              ACL: 'public-read'
          };
          var request = s3.upload(params);
          request.send(function(err, data) {
            if (err) throw err;
            
            console.log(data);
            
            var material = {
              name: 'Тестовый материал : ' + file.split('-', 1),
              s3ETag: data.ETag,
              s3Location: data.Location,
              s3Key: data.Key,
              s3Bucket: data.Bucket,
              isForPharmacies: true,
              isForDoctors: true
            };

            Material.create(material).exec(
              function(err, record){
                if (err) throw err;
                
                console.log(record);
              });
            
          });
      });
      console.log(sails.config.aws.endPoint + '/' + file);
      // for (var i=0; i<files.length; i++) {
      //     console.log(files[i]);
      // }
    });
  }
};