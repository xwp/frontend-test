import ModuleName from './modules/ModuleName';
import LazyComponent from './modules/LazyComponent';

const main = async () => {
	/* Critical UI components. */
	// ModuleName.init();

	/* Non-critical UI components. */
	setTimeout( () => ModuleName.init(), 0 );

	/* Nice to have components. */
	requestIdleCallback( () => LazyComponent.init() );
};

if ( 'loading' === document.readyState ) {
	// The DOM has not yet been loaded.
	document.addEventListener( 'DOMContentLoaded', main );
} else {
	// The DOM has already been loaded.
	main();
}
