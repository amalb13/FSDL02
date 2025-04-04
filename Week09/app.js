var app = angular.module('studentApp', []);

app.controller('StudentController', function($scope) {
    $scope.students = []; // Array to hold student records
    $scope.student = {};  // Object to bind form data

    $scope.addStudent = function() {
        $scope.students.push(angular.copy($scope.student)); // Add student to the list
        $scope.student = {}; // Reset form
    };
});
