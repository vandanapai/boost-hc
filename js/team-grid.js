var $grid = $('#about-grid'),
    $items = $grid.children('li'),
    current = -1,
    previewPos = -1,
    scrollExtra = 0,
    marginExpanded = 10,
    $window = $( window ), windsize, 
    $body = $('html, body'),

    transEndEventNames = {
    	'WebkitTransition' : 'webkitTransitionEnd',
    	'MozTransition' : 'transitionend',
    	'OTransition' : 'oTransitionEnd',
    	'msTransition' : 'msTransitionEnd',
    	'transition' : 'transitionend'
    },

    transEndEventName = transEndEventNames[ Modernizr.prefixed('transition')],

    support = Modernizr.csstransitions,

    settings = {
    	minHeight: 500,
    	speed : 350,
    	easing: 'ease'
    };


 function init( config) {
 	settings = $.extend(true, {}, settings, config);

 	$grid.imagesLoaded( function() {
 		saveItemInfo (true);
 		getWinSize();
 		initEvents();
 	} );
 }

 function saveItemInfo (saveHeight) {
 	$items.each(function() {
 		var $item = $(this);
 		$item.data('offsetTop', $item.offset().top);
 		if (saveheight) {
 			$item.data('height', $item.height());
 		}
 	} );
 }

 function getWinSize() {
 	winsize = { width: $window.width(), height: $window.height()};
 }


function initEvents () {
	$items.click('span.about-close', function () {
		hidePreview();
		console.log('check1');
		return false;
	}).click(function(e) {
		console.log('check2');
		var $item = $(this).parent();
		current === $item.index() ? hidePreview() : showPreview( $item );
		return false;
	} );

	$window.on('debouncedresize', function() {
		scrollExtra = 0;
		previewPos = -1;
		saveItemInfo();
		getWinSize();
		var preview = $.data(this, 'preview');
		if( typeof preview != 'undefined' ) {
			hidePreview();
		}
	});
}

function showPreview( $item ) {
	var preview = $.data(this, 'preview'), 
		position = $item.data('offsetTop');

	scrollExtra = 0;

	if( typeof preview != 'undefined') {

		if(previewPos !== position) {
			if (position > previewPos) {
				scrollExtra = preview.height;
			}
			hidePreview();
		}

		else {
			preview.update($item);
			return false;
		}
	}

	previewPos = position;
	preview = $.data(this, 'preview', new Preview($item));
	preview.open();
}

function Preview( $item ) {
    this.$item = $item;
    this.expandedIdx = this.$item.index();
    this.create();
    this.update();
}

