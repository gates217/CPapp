angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.diagnosisTest', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/diagnosisTest.html',
        controller: 'diagnosisTestCtrl'
      }
    }
  })

  .state('menu.results', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/results.html',
        controller: 'resultsCtrl'
      }
    }
  })

  .state('results2', {
    url: '/page5',
    templateUrl: 'templates/results2.html',
    controller: 'results2Ctrl'
  })

  .state('menu.contactUs', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.diagnosisTest2', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/diagnosisTest2.html',
        controller: 'diagnosisTest2Ctrl'
      }
    }
  })

  .state('menu.diagnosisTest3', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/diagnosisTest3.html',
        controller: 'diagnosisTest3Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});