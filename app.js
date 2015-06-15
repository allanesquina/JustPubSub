// App namespace
var App = App || {};

// Extending PubSub object 
App.service = Object.create( PubSub );

// Registering doLogin function
App.service.on( 'doLogin', function( user, pass ) {
	console.log( 'doLogin', user, pass );
});
// Triggering doLogin function (amazing) 
App.service.trigger( 'doLogin', 'Allan', 'mypass' );
