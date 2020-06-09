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
                "name"          : "AIR Canada",
                "description"   : "Buy airline tickets, find cheap airfare, last minute deals and seat sales with Air Canada. Book hotels, cars and vacations with Air Canada Vacations.",
                "button_text"   : "FIND YOUR DESTINATION",
                "image_url"     : "/images/carousel/1.jpg"
            },     
            {
                "index"         : 2,
                "name"          : "Kuwait Airways",
                "description"   : "Kuwait Airways is the national carrier of Kuwait, with its head office on the grounds of Kuwait International Airport, Al Farwaniyah Governorate.",
                "button_text"   : "FLY TO KUWAIT",
                "image_url"     : "/images/carousel/2.jpg"
            },     
            {
                "index"         : 3,
                "name"          : "All Nippon Airways",
                "description"   : "All Nippon Airways Co., Ltd., also known as Zennikkū, is the largest airline in Japan by revenues and passenger numbers. Its headquarters are located in Shiodome City Center in the Shiodome area of Minato ward of Tokyo.",
                "button_text"   : "JAPAN'S FINEST",
                "image_url"     : "/images/carousel/3.jpg"
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
  
  