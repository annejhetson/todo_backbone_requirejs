require.config({
	paths: {
		jquery: 'libs/jquery/jquery-1.11.1',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone',
		localstorage: "libs/backbone.localStorage-min",
		text: 'libs/require/text'
	},
	shim: {
        'jquery': {
            exports: '$',
        },
        'underscore': {
            exports: '_',
        },
        'backbone': {
            exports: 'Backbone',
        },
        'backbone.localStorage': {
            exports: 'Store',
        }
    }
});


require(['views/app'], function(AppView){
  var appView = new AppView();
});