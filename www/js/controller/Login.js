angular.module('pandasNews.controllers')
  .controller('LoginCtrl', ['$scope', '$stateParams', '$ionicAuth', '$ionicUser',
    function ($scope, $stateParams, $ionicAuth, $ionicUser) {

      $scope.googleLogIn = function ($socialNetwork) {
        $ionicAuth.login($socialNetwork).then(function (data) {
            alert(data);
          }, function (err) {
            alert(err);
          }
        );

      };

    }
  ]);
