var app = angular.module("SinglePageApp", ['ngRoute']);

app.controller("HomeController", function ($scope) {


});


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/about", {
        templateUrl : "about.html"
    })
    .when("/contact", {
        templateUrl : "contact.html"
    })
    .when("/donation", {
        templateUrl : "donations.html"
    })
    .when("/events", {
        templateUrl : "events.html"
    });
});