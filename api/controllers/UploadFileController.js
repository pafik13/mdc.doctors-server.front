/**
 * UploadFileController
 *
 * @description :: Server-side logic for managing Uploadfiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  
  create: function(req, res) {
    var params = _.extend(req.query || {}, req.params || {}, req.body || {});

  	UploadFile.create(params, function uploadFileCreated (err, createdUploadFile) {

  		if (err) return res.send(err,500);

  		res.redirect('/uploadfiles');
    });
  },
  
  update: function(req, res) {
    var params = _.extend(req.query || {}, req.params || {}, req.body || {});
    var id = params.uuid;
    
    if (!id) return res.send("No id specified.", 500);

    UploadFile.update(id, params, function uploadFileUpdated(err, updatedUploadFile) {
      if (err) {
        res.redirect('/uploadfiles');
      }
      if (!updatedUploadFile) {
        res.redirect('/uploadfiles');
      }
      
      res.redirect('/uploadfiles');
    });
  },
  
  destroy: function(req, res) {
    UploadFile.find().where({ uuid: req.param("uuid")}).then(function (_uploadFile) {
      if (_uploadFile && _uploadFile.length > 0) {

        _uploadFile[0].destroy().then(function (_uploadFile) {
          return res.redirect("/uploadfiles");
        }).catch(function (err) {
          console.error(err);
          return res.redirect("/uploadfiles");
        });
      } else {
          return res.view('500', { message: "Sorry, no file found with uuid - " + req.param("uuid") });
      }
    }).catch(function (err) {
      return res.view('500', { message: "Sorry, no file found with uuid - " + req.param("uuid") });
    });  
  }
  
};
