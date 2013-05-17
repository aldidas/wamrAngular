'use strict';

var wamrJson = 'http://www.whenaldimetratna.com/api/';

function MainCtrl($rootScope, $scope, $resource) {
	$rootScope.activeNavitem = 'home';
	$scope.blogs = $resource(wamrJson+':action',
		{action:'get_category_posts', category_slug:'blog', callback:'JSON_CALLBACK'},
		{get:{method:'JSONP'}}
	);
	$scope.blogPosts = $scope.blogs.get();
}

function SingleCtrl($rootScope, $scope, $resource, $routeParams) {
	$rootScope.activeNavitem = 'home';
	$scope.single = $resource(wamrJson+':action',
		{action:'get_post', post_slug:$routeParams.postSlug, callback:'JSON_CALLBACK'},
		{get:{method:'JSONP'}}
	);
	$scope.singlePost = $scope.single.get();
}

function LoginCtrl($rootScope, $scope) {
	$rootScope.activeNavitem = 'login';
}

function CreateCtrl($rootScope, $scope) {
	$rootScope.activeNavitem = 'create';
}