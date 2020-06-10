(function () {
    
    app.controller('HomeController', ['$state', '$scope', '$http', '$stateParams', 
    function (
        $state,
        $scope,
        $http,
        $stateParams
    ) {
        
        $scope.items = [
            {
                "index"       : 1,
                "name"        : "Item 1",
                "description" : "Item 1 description",
                "image_url"   : "https://picsum.photos/300"
            },     
            {
                "index"       : 2,
                "name"        : "Item 2",
                "description" : "Item 2 description",
                "image_url"   : "https://picsum.photos/300"
            },   
            {
                "index"       : 3,
                "name"        : "Item 3",
                "description" : "Item 3 description",
                "image_url"   : "https://picsum.photos/300"
            },   
            {
                "index"       : 4,
                "name"        : "Item 4",
                "description" : "Item 4 description",
                "image_url"   : "https://picsum.photos/300"
            },   
            {
                "index"       : 5,
                "name"        : "Item 5",
                "description" : "Item 5 description",
                "image_url"   : "https://picsum.photos/300"
            }
        ];


        


        var loadOffers = (items) => {
        //     angular.forEach(items, (item) => {
        //         if (item["index"] == 1) {
        //             $scope.itemsHtml += "<div class='five column row'>";
        //         }

        //         $scope.itemsHtml += "<div class='column'>";
        //         $scope.itemsHtml += "<p> " + item["index"] + " </p>";
        //         $scope.itemsHtml += "<p> " + item["name"] + " </p>";
        //         $scope.itemsHtml += "<p> " + item["image_url"] + " </p>";
        //         $scope.itemsHtml += "<div/>";
                
        //         if (item["index"] == 1) {
        //             $scope.itemsHtml += "<div/>";
        //         }
        //     });
        //     $scope.itemsHtml = $sce.trustAsHtml($scope.itemsHtml);
        };
    



        
        var loadPage = function () {
            loadOffers();
        };
        loadPage();
    
        
    }]);
        
        
    })();
    
    