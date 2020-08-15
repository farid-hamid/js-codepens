var app = angular.module("myApp", []); 

app.controller('myCtrl',["$scope", "searchResults", function($scope, searchResults){
  
  $scope.searchTerm = "";
  $scope.result = "";
  
 // $scope.url = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + $scope.searchTerm + "&callback=?";
   var url = "https://en.wikipedia.org/w/api.php?";
  
  
  
  
  
 $scope.search = function(){ 
      searchResults.get($scope.searchTerm).then(function(data){
        $scope.results = data.data.query.pages;
        for(var page in $scope.results){
          $scope.results[page].link = 'https://en.wikipedia.org/wiki/' + $scope.results[page].title;
        }
      });
  };
   
   
 
  
}]);

app.factory("searchResults", function($http){
  
  var config = {
        params: {
            format: "json",
            action: "query",
            prop: "extracts",
            exchars: "145",
            exlimit: "10",
            exintro: "",
            explaintext: "",
            rawcontinue: "",
            generator: "search",
            gsrlimit: "7",
            callback: "JSON_CALLBACK"
        }
  };
  
  var url =  "https://en.wikipedia.org/w/api.php?";
  
  var results = {
    get: function(data){
      config.params.gsrsearch = data;
      return $http.jsonp(url,config).then(function(xy){
        console.log(xy);
        return xy;
      });
    }
  };
  
  return results;
});

