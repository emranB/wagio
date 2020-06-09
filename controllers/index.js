var app = angular.module("app", ["ngAnimate", "ui.router", "anim-in-out"]);


app.service("authorize", function ($http) {
    this.getSession = function (callback) {
        $http.get("/api/session")
            .then(function (response) {
                callback(response);
            })
            .catch(function (err) {
                throw err;
            });
    };
});



app.config(["$stateProvider", "$urlRouterProvider", '$locationProvider', 'authorizeProvider', '$httpProvider',
function (
    $stateProvider,
    $urlRouterProvider,
    $locationProvider,
    authorizeProvider,
    $httpProvider
) {

    $stateProvider
        .state("home", {
            url: "/home",
            views: {
                "": {
                    templateUrl: "views/partials/home.html",
                    controller: "HomeController"
                },
                "navbar": {
                    templateUrl: "views/partials/navbar.html"
                },
                "carousel": {
                    templateUrl: "views/partials/carousel.html",
                    controller: "CarouselController"
                },
                "footer": {
                    templateUrl: "views/partials/footer.html",
                    controller: "FooterController"
                }
            },
        })
        ;

    $urlRouterProvider.otherwise(function ($injector, $location) {
        var $state = $injector.get('$state');
        $state.go("home", {
            title: "Dashboard",
            message: "Login Successful!"
        });
    });

    $locationProvider.html5Mode(true);
}]);



// app.run(['authorize', '$state', '$rootScope', '$stateParams', function (authorize, $state, $rootScope, $stateParams, $http) {
//     authorize.getSession(function (data) {
//         var user = data.data;
//         $rootScope.user = user;
//         if (user) {
//             $rootScope.$state = $state;
//         } else {
//             $state.go("login", {
//                 title: "Login",
//                 message: "Please login with your credentials"
//             });
//         }
//     });
// }]);










