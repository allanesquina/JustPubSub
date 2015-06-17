// App namespace
var App = App || {};

// Extending PubSub object 
App.service = Object.create( PubSub );

// Registering doLogin function
App.service.sub( 'doLogin', function( user, pass ) {
	console.log( 'doLogin', user, pass );
});

App.service.sub( 'doLogin', function( user, pass ) {
	console.log( 'hey, me too' );
});

App.service.sub( 'doLogout', function( user, pass ) {
	console.log( 'Bye', user );
});

// Triggering doLogin function (amazing) 
App.service.pub( 'doLogin', 'Allan', 'mypass' );
App.service.pub( 'doLogout', 'Allan' );
