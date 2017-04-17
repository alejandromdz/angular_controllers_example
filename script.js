angular.module('module1',[])

.controller('controller1',function($scope,$rootScope){
   $scope.$watch('data',function(newValue,oldValue){
      
       if(newValue!==oldValue){
           $rootScope.$broadcast('dataChange',newValue)
       }
   })
})
.controller('controller2',function($scope){
    $scope.$on('dataChange',function(ev,data){
        $scope.data=data;
    })
});