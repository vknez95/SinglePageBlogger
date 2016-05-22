'use strict';

angular.module('spBlogger', ['ui.router', 'ngResource', 'spBlogger.admin', 'spBlogger.posts', 'ngAnimate'])

.run(['$state', function($state) {
    $state.go('allPosts');
}]);
