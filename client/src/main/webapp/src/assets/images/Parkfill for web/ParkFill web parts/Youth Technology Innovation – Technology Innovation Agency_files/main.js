jQuery(document).ready(function($){
	"use strict";

    /* Scroll to top */
    $('.scrollToTop').on('click',function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    /* Nav smooth scroll */
    $('#site-navigation .menu').onePageNav({
        extraOffset: FinanceObj.extraOffset,
    });
	
    /* Search Box */
    $(".search-box-area").on('click', '.search-button', function(event){
        event.preventDefault();
        var v = $(this).prev('.search-text');
        if(v.hasClass('active')){
            v.removeClass('active');
        }
        else{
            v.addClass('active');
        }
        return false;
    });

    /* Sticky Menu */
    if ( FinanceObj.stickyMenu == 1 || FinanceObj.stickyMenu == 'on' ) {
        $(window).scroll(function() {
            var s = $("body");
            var windowpos = $(window).scrollTop();

            if(windowpos > 0){
                s.removeClass("non-stick");
                s.addClass("stick");
            }
            else {
                s.removeClass("stick");
                s.addClass("non-stick");
            }

            /* Header 6 */
            // var target = $(".header-style-6 #masthead .header-firstrow"),
            //     targetH = target.outerHeight();
            // if(windowpos >= targetH){
            //     $('body').addClass('stick-plus');
            // }
            // else {
            //     $('body').removeClass('stick-plus');
            // }

        });
    }

    /* MeanMenu - Mobile Menu */
    $('#site-navigation nav').meanmenu({
        meanMenuContainer: '#meanmenu',
        meanScreenWidth: FinanceObj.meanWidth,
        removeElements: "#masthead",
        siteLogo: FinanceObj.siteLogo
    });

    /* Header Right Menu */
    $('.additional-menu-area').on('click', '.side-menu-trigger', function (e) {
    	e.preventDefault();
        $('.sidenav').width(280);
    });
    $('.additional-menu-area').on('click', '.closebtn', function (e) {
        e.preventDefault();
        $('.sidenav').width(0);
    });

    /* Mega Menu */
    $('.site-header .main-navigation ul > li.mega-menu').each(function() {
        // total num of columns
        var items = $(this).find(' > ul.sub-menu > li').length;
        // screen width
        var bodyWidth = $('body').outerWidth();
        // main menu link width
        var parentLinkWidth = $(this).find(' > a').outerWidth();
        // main menu position from left
        var parentLinkpos = $(this).find(' > a').offset().left;

        var width = items * 220;
        var left  = (width/2) - (parentLinkWidth/2);

        var linkleftWidth  = parentLinkpos + (parentLinkWidth/2);
        var linkRightWidth = bodyWidth - ( parentLinkpos + parentLinkWidth );

        // exceeds left screen
        if( (width/2)>linkleftWidth ){
            $(this).find(' > ul.sub-menu').css({
                width: width + 'px',
                right: 'inherit',
                left:  '-' + parentLinkpos + 'px'
            });        
        }
        // exceeds right screen
        else if ( (width/2)>linkRightWidth ) {
            $(this).find(' > ul.sub-menu').css({
                width: width + 'px',
                left: 'inherit',
                right:  '-' + linkRightWidth + 'px'
            }); 
        }
        else{
            $(this).find(' > ul.sub-menu').css({
                width: width + 'px',
                left:  '-' + left + 'px'
            });            
        }
    });
	
    /* Owl Custom Nav */
    if (typeof $.fn.owlCarousel == 'function') {
        $(".owl-custom-nav .owl-next").on('click', function() {
            $(this).closest('.owl-wrap').find('.owl-carousel').trigger('next.owl.carousel');
        });
        $(".owl-custom-nav .owl-prev").on('click', function() {
            $(this).closest('.owl-wrap').find('.owl-carousel').trigger('prev.owl.carousel');
        });
		
        $(".rt-owl-carousel").each(function() {
            var options = $(this).data('carousel-options');
            $(this).owlCarousel(options); 
        });
    }

	/*VC CSS*/
    /* Counter */
    if ( typeof $.fn.counterUp == 'function') { 
        $('.rt-vc-counter .rt-counter').counterUp({
            delay: $(this).data('rtSteps'),
            time: $(this).data('rtSpeed')
        });
    }
	
	/* Team Slider 3 Detail*/
    $(".rtin-team-box").on({
        mouseenter: function(){
            var bghover = $(this).data('bghover');
            $(this).find(".rtin-single-team").css('background-color', bghover);
        },
        mouseleave: function(){
            var bgcolor = $(this).data('bgcolor');
            $(this).find(".rtin-single-team").css('background-color', bgcolor);          
        }
    }, this);
	
	/* Pricing Box 1 */
    $(".rt-price-table-box1").on({
        mouseenter: function(){
            var bghover = $(this).data('bghover');
            $(this).css('background-color', bghover);
            $(this).find(".rt-btn a").css('color', bghover);
        },
        mouseleave: function(){
            var bgcolor = $(this).data('bgcolor');
            $(this).css('background-color', bgcolor);
            $(this).find(".rt-btn a").css('color', '');          
        }
    }, this);

	/* Infobox 1 */
    $(".rt-info-text").on({
        mouseenter: function(){
            var title_hover = $(this).data('title-hover');
            $(this).find(".media-heading , .media-heading a").css('color', title_hover);
        },
        mouseleave: function(){
            var title_color = $(this).data('title-color');
            $(this).find(".media-heading , .media-heading a").css('color', title_color);			
        }
    }, this);
	
	/* Infobox 5 */	
	$('.rt-infobox-5').each(function() {
        var $column = $(this).closest('.vc_column-inner');
        var bgcolor = $column.css('background-color');
        var bghover = $(this).data('hover');
        $column.on({
            mouseenter: function(){
                $column.attr('style', 'background-color: '+ bghover +' !important');
            },
            mouseleave: function(){
                $column.attr('style', 'background-color: '+ bgcolor +' !important');
            }
        });
    });
	
    /* Woocommerce Shop change view */
    $('#shop-view-mode li a').on('click',function(){
        $('body').removeClass('product-grid-view').removeClass('product-list-view');

        if ( $(this).closest('li').hasClass('list-view-nav')) {
            $('body').addClass('product-list-view');
            Cookies.set('shopview', 'list');
        }
        else{
            $('body').addClass('product-grid-view');
            Cookies.remove('shopview');
        }
        return false;
    });
});

(function($){
    "use strict";

    // Window Load+Resize
    $(window).on('load resize', function () {
        // Define the maximum height for mobile menu
        var wHeight = $(window).height();
        wHeight = wHeight - 50;
        $('.mean-nav > ul').css('max-height', wHeight + 'px');
    });

    // Window Load
    $(window).on('load', function () {
        // Preloader
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
        
        // Onepage Nav on meanmenu
        $('#meanmenu .menu').onePageNav({
            extraOffset: FinanceObj.extraOffsetMobile,
            end: function() {
                $('.meanclose').trigger('click');
            } 
        });
    });

})(jQuery);