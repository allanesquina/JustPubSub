var PubSub = (function( window, document ) {

	'use strict';
	/**
	 * Check name and if the function exists
	 */
	function validate( name, trigger ) {
		var fn = on[ name ];
		if( typeof name !== 'string'  ) {
			throw( 'Function name need to be a string' );
		} 
		if( trigger && !( fn && fn.apply ) ) {
			throw( 'Function ' + name + ' is not registered' );
		}
		return fn;
	}

	/**
	 * Registering function on object on 
	 */
	function on( name, fn ) {
		if( !validate( name ) ) {
			on[ name ] = fn;
		} else {
			on[ name ] = fn;
			console.warn( 'Function ' + name.toUpperCase() + ' was overwritten');
		}
	}

	/**
	 * Triggering the registered function
	 */
	function trigger( name ) {
		var fn = validate( name, true );
		fn.apply( this, Array.prototype.slice.call( arguments, 1 ) );
	}
	
	/**
	 * Removing the registered function 
	 */
	function remove( name ) {
		if( validate( name ) ) {
			delete on[ name ];
		}
	}

	return {
		on: on, 
		trigger: trigger,
		remove: remove

	}
}( window, document ));