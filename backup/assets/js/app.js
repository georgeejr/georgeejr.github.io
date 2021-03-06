(function() {
  'use strict';

  angular.module('georgeApp', [
    'ui.router',
    'ngAnimate',
    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',
    'ngParallax',
    'angular-svg-round-progressbar'
    
    
  ])
    .config(config)
    .run(run)
    
  ;
  
  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

})();
 
(function () {
    'use strict';
    
    angular.module('georgeApp').controller("bannerCtrl", [bannerCtrl]);

    function bannerCtrl() {        
        var vm = this;
        vm.name = 'George Elluranggo Jr';
        vm.title = 'Front End Web/App Engineer';
    }




})();

(function () {
    'use strict';
    angular.module('georgeApp')
    .controller("aboutCtrl", ['$scope', skillSet]);

    function aboutCtrl() {        
        var vm = this; 

        //global settings
        vm.skillHtml = '10'; 
    }
    function skillSet($scope){
         $scope.skillsJson = [ 
                    {
                        "name":"HTML5",
                        "current": 90,
                        "color":"#E44D26",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/html5.png"
                    },
                    {
                        "name":"CSS3",
                        "current": 90,
                        "color":"#2262AF",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/css3.png"
                    },
                    {
                        "name":"SASS",
                        "current": 85,
                        "color":"#CC6699",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/sass.png"
                    },
                    {
                        "name":"Foundation",
                        "current": 80,
                        "color":"#4F91BF",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/zurb.png"
                    },
                    {
                        "name":"Bootstrap",
                        "current": 85,
                        "color":"#553C7B",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/bootstrap.png"
                    },
                    {
                        "name":"jQUery",
                        "current": 85,
                        "color":"#0867AB",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/jquery.png"
                    },
                    {
                        "name":"AngularJs",
                        "current": 80,
                        "color":"#DD1B16",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/angular.png"
                    },
                    {
                        "name":"Ionic",
                        "current": 65,
                        "color":"#4E8EF7",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/ionic.png"
                    },
                    {
                        "name":"gulp",
                        "current": 70,
                        "color":"#EB4A4B",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/gulp.png"
                    },
                    {
                        "name":"GIT",
                        "current": 70,
                        "color":"#F34F29",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/git.png"
                    },
                    {
                        "name":"EmberJs",
                        "current": 60,
                        "color":"#E0492F",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/ember.png"
                    },
                    {
                        "name":"HandleBarJs",
                        "current": 65,
                        "color":"#423426",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/handlebar.png"
                    },
                    {
                        "name":"PHP/MySql",
                        "current": 60,
                        "color":"#6B7EB7",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/php-mysql.png"
                    },
                    {
                        "name":"Wordpress",
                        "current": 75,
                        "color":"#333333",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/wp.png"
                    },
                    {
                        "name":"AEM",
                        "current": 70,
                        "color":"#FB7800",
                        "bgcolor":"#eaeaea",
                        "imgSrc":"assets/img/aem.png"
                    }
        ]
    }
})();
(function () {
    'use strict';
    $(document).ready(function(){
   
 
    });
  

})(jQuery);