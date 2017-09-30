(function() {
  'use strict';
  
  /* global angular */
  angular
    .module('App')
    .factory('fileUpload', fileUpload);

  fileUpload.$inject = ['$http'];

  function fileUpload($http) {
    return function(file, uploadUrl, additionalParams) {
      var fd = new FormData();
      fd.append('file', file);
      Object.assign(fd, additionalParams);
  
      return $http.post(uploadUrl, fd, {
        crossDomain: true,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        transformRequest: angular.identity,
        headers: { 'Content-Type': undefined }
      }).progress(function (evt) {
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total, 10);
        console.log('progress: ' + progressPercentage + '% ');
      });
    };
  }
})();