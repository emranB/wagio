(function () {
    
  app.controller('CarouselController', ['$state', '$scope', '$http', '$stateParams', 
  function (
      $state,
      $scope,
      $http,
      $stateParams
  ) {
      
      $scope.items = [];



      var getCarouselItems = () => {
        return [
            {
                "index"         : 1,
                "name"          : "W.A.G.I.O",
                "description"   : "(Wildlife & Green life International Organization)",
                "button_text"   : "",
                "image_url"     : "/images/bg-5.png"
            },     
            {
                "index"         : 2,
                "name"          : "A Platform",
                "description"   : "to enable hassle-free flow of donations",
                "button_text"   : "",
                "image_url"     : "/images/bg-6.png"
            },     
            {
                "index"         : 3,
                "name"          : "A Movement",
                "description"   : "to aid the fight in environmental preservation",
                "button_text"   : "",
                "image_url"     : "/images/bg-10.jpg"
            }     
        ];
      };
      




      var loadCarouselItems = (items) => {
          $scope.items = getCarouselItems();
      };
  



      
      var loadPage = function () {
          console.log("Loaded carousel controller");
          loadCarouselItems();
      };
      loadPage();
  
      
  }]);
      
      
  })();
  
  