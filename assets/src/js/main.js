( function() {
	/**
	 * Slide down/up an element(slideEl) according to the class(toggleClass) of a second element (classEl).
	 * Usually, the second element fire an event to execute the slide down/up action.
	 *
	 * @param {string} initialHeight Initial Height of the element that will be slid down/up.
	 * @param {string} finalHeight final Height of the element that will be slid down/up.
	 * @param {Object} slideEl Element that will be slid down/up.
	 * @param {Object} classEl Element which class will be taken in account to slide down/up the slideEl.
	 * @param {string} toggleClass The class of the classEL that will be switching.
	 */
	/* eslint-disable max-params */
	function toggleElement( initialHeight, finalHeight, slideEl, classEl, toggleClass ) {
		if ( classEl.classList.contains( toggleClass ) ) {
			slideEl.style.height = initialHeight;
			classEl.classList.remove( toggleClass );
		} else {
			slideEl.style.height = finalHeight;
			classEl.classList.add( toggleClass );
		}
	}

	const slideButtonCont = document.querySelector( '.author-card_slide' );
	const slideButton = slideButtonCont.querySelector( 'span' );
	const textElement = document.querySelector( '.author-card_text' );
	const textFinalHeight = textElement.scrollHeight + 'px';
	const textInitialheight = textElement.clientHeight + 'px';

	slideButton.addEventListener( 'click', () => {
		toggleElement( textInitialheight, textFinalHeight, textElement, slideButtonCont, 'collapsed' );
	} );

	const showStoriesCont = document.querySelector( '.author-card_show-stories' );
	const showStoriesButton = showStoriesCont.querySelector( 'span' );
	const storiesCont = document.querySelector( '.author-card_stories' );
	const storiesFinalHeight = storiesCont.scrollHeight + 'px';

	showStoriesButton.addEventListener( 'click', () => {
		toggleElement( '0px', storiesFinalHeight, storiesCont, showStoriesCont, 'arrow-up' );
	} );
} )();
