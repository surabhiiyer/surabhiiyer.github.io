// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
angular.module('todo', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('signin', {
      url: '/sign-in',
      templateUrl: 'templates/sign-in.html',
      controller: 'SignInCtrl'
    })
    .state('forgotpassword', {
      url: '/forgot-password',
      templateUrl: 'templates/forgot-password.html'
    })
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: 'templates/home.html',
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.AdvanceSearch', {
      url: '/AdvanceSearch',
      views: {
        'home-tab': {
          templateUrl: 'templates/AdvanceSearch.html',
        }
      }
    })
    .state('tabs.CVS', {
      url: '/CVS',
      views: {
        'home-tab': {
          templateUrl: 'templates/CVS.html'
        }
      }
    })
    .state('tabs.Pharmacy', {
      url: '/Pharmacy',
      views: {
        'home-tab': {
          templateUrl: 'templates/Pharmacy.html'
        }
      }
    })
    .state('tabs.Search_Hospitals', {
      url: '/Search_Hospitals',
      views: {
        'home-tab': {
          templateUrl: 'templates/Search_Hospitals.html'
        }
      }
    })
    .state('tabs.Search_Clinics', {
      url: '/Search_Clinics',
      views: {
        'home-tab': {
          templateUrl: 'templates/Search_Clinics.html'
        }
      }
    })
     .state('tabs.Reminders', {
      url: '/Reminders',
      views: {
        'home-tab': {
          templateUrl: 'templates/Reminders.html'
        }
      }
    })
   .state('tabs.Friends', {
      url: '/Friends',
      views: {
        'home-tab': {
          templateUrl: 'templates/Friends.html'
        }
      }
    })
   .state('tabs.Profile', {
      url: '/Profile',
      views: {
        'home-tab': {
          templateUrl: 'templates/Profile.html'
        }
      }
    })
    .state('tabs.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    })
    .state('tabs.navstack', {
      url: '/navstack',
      views: {
        'about-tab': {
          templateUrl: 'templates/nav-stack.html'
        }
      }
    })
    .state('tabs.contact', {
      url: '/contact',
      views: {
        'contact-tab': {
          templateUrl: 'templates/contact.html'
        }
      }
    });



   $urlRouterProvider.otherwise('/sign-in');

})

.controller('SignInCtrl', function($scope, $state) {
  
  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    $state.go('tabs.home');
  };
  
})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
})

.controller('TodoCtrl', function($scope, $ionicModal) {
  // No need for testing data anymore
  $scope.tasks = [];

  $scope.names =[];

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Called when the form is submitted
  $scope.createTask = function(task1,task2) {
    $scope.tasks.push({
      title: task2.title
    });
    $scope.names.push({
      title: task1.title
    });
    $scope.taskModal.hide();
    task1.title = "";
    task2.title = "";
  };

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };
});
exampleApp.controller('MapController', function($scope, $ionicLoading) {
 
    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        $scope.map = map;
    });
 
});
