(function () {
  'use strict'

  angular
    .module('notesee.notes')
    .controller('NotesController', NotesController)

  function NotesController ($cordovaCamera, $ionicModal, $scope, Notes) {
    var vm = this

    vm.notes = Notes

    vm.create = create
    vm.save = save
    vm.selectPhoto = selectPhoto
    vm.takePhoto = takePhoto

    function create () {
      $ionicModal.fromTemplateUrl('app/notes/new.html', {scope: $scope})
        .then(function (modal) {
          vm.modal = modal
          vm.modal.show()
        })
    }

    function save () {
      vm.modal.remove()
    }

    function selectPhoto () {
      $cordovaCamera.getPicture({destinationType: Camera.DestinationType.DATA_URL, sourceType: Camera.PictureSourceType.PHOTOLIBRARY})
        .then(function (image) {
          vm.newPhoto = image
        })
    }

    function takePhoto () {
      $cordovaCamera.getPicture({destinationType: Camera.DestinationType.DATA_URL})
        .then(function (image) {
          vm.newPhoto = image
        })
    }
  }
})()
