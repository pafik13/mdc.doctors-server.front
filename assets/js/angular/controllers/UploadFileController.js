(function() {
  'use strict';

  angular
    .module('App')
    .controller('UploadFileController', UploadFileController);

  UploadFileController.inject = ['$scope', '$http', 'fileUpload'];

  function UploadFileController($scope, $http, fileUpload) {
              
    function resetItem() {
      $scope.uploadfile = {
        uuid : '',
        name : '',
        fileName : '',
        s3Key : '',
        s3Bucket : '',
        s3Location : '',
      };
      
      $scope.myFile = '';
      
      $scope.displayForm = '';
    }
    
    resetItem();
    
    $scope.addItem = function () {
      resetItem();
      $scope.displayForm = true;
    };
      
    $scope.saveItem = function () {
      
      var uf = $scope.uploadfile;

      if (uf.uuid.length == 0) {
        $http.post('/uploadfiles', {
          'name': uf.name,
          'fileName': uf.fileName,
          's3Key': uf.s3Key,
          's3Bucket': uf.s3Bucket,
          's3Location': uf.s3Location
        }).success(function(data) {
          $scope.items.push(data);
          $scope.displayForm = '';
          removeModal();
        }).error(function() {
            console.log("ERROR");
        });
      } else {
        $http.put('/uploadfiles/' + uf.uuid, {
          'name': uf.name,
          'fileName': uf.fileName,
          's3Key': uf.s3Key,
          's3Bucket': uf.s3Bucket,
          's3Location': uf.s3Location
        }).success(function(data) {
          $scope.displayForm = '';
          removeModal();
        }).error(function() {
          console.log("ERROR");
        });
      }
    };
      
    $scope.editItem = function (data) {       
      $scope.uploadfile = data;
      $scope.displayForm = true;
    };
      
    $scope.removeItem = function (data) {
      if (confirm('Do you really want to delete?')) {
        $http.delete('/uploadfiles/' + data.uuid).success(function() {
          $scope.items.splice($scope.items.indexOf(data), 1);
        });
      }
    };
    
    $scope.submitData = function() {
      var addParams = {
        "acl": "public-read",
        "success_action_status": "200",
        "x-amz-meta-uuid": "14365123651274",
        "x-amz-server-side-encryption": "AES256",
        "Policy": 'eyAiZXhwaXJhdGlvbiI6ICIyMDE4LTA2LTAxVDEyOjAwOjAwLjAwMFoiLA0KICAiY29uZGl0aW9ucyI6IFsNCiAgICBbInN0YXJ0cy13aXRoIiwgIiRrZXkiLCAibWF0ZXJpYWxzLyJdLA0KICAgIHsiYnVja2V0IjogInNibC10ZXN0MSJ9LA0KICAgIHsiYWNsIjogInB1YmxpYy1yZWFkIn0sDQogICAgeyJzdWNjZXNzX2FjdGlvbl9zdGF0dXMiOiAiMjAwIn0sDQogICAgWyJzdGFydHMtd2l0aCIsICIkQ29udGVudC1UeXBlIiwgImFwcGxpY2F0aW9uL3BkZiJdLA0KICAgIHsieC1hbXotbWV0YS11dWlkIjogIjE0MzY1MTIzNjUxMjc0In0sDQogICAgeyJ4LWFtei1zZXJ2ZXItc2lkZS1lbmNyeXB0aW9uIjogIkFFUzI1NiJ9LA0KICAgIFsic3RhcnRzLXdpdGgiLCAiJHgtYW16LW1ldGEtdGFnIiwgIiJdLA0KDQogICAgeyJ4LWFtei1jcmVkZW50aWFsIjogIkFLSUFJSU9WRVpaNE80REsyNlBBLzIwMTcwNTMxL2V1LWNlbnRyYWwtMS9zMy9hd3M0X3JlcXVlc3QifSwNCiAgICB7IngtYW16LWFsZ29yaXRobSI6ICJBV1M0LUhNQUMtU0hBMjU2In0sDQogICAgeyJ4LWFtei1kYXRlIjogIjIwMTcwNTMxVDAwMDAwMFoiIH0NCiAgXQ0KfQ==',
        "X-Amz-Signature": "642eec7cc808bc8982da5c040017e2f1770a3faa5757d3949369c20396c0ca50",
        "X-Amz-Credential": "AKIAIIOVEZZ4O4DK26PA/20170531/eu-central-1/s3/aws4_request",
        "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
        "X-Amz-Date": "20170531T000000Z",
        "Content-Type": "application/pdf",
        "key": "materials/" + $scope.uploadfile.name
      };
      var file = $scope.myFile;
      var uploadUrl = "//s3.eu-central-1.amazonaws.com/sbl-test1/";
      
      fileUpload.uploadFileToUrl(file, uploadUrl, addParams)
        .success(function() {
          $scope.saveItem();
        })
        .error(function() {
          console.log("ERROR");
        });
    };

    function removeModal() {
      $('.modal').modal('hide'); /* global $ */    
    }
  }
})();