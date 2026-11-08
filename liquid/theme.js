{%- comment -%}
██╗██╗██╗  ░██████╗████████╗░█████╗░██████╗░  ██╗██╗██╗
██║██║██║  ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗  ██║██║██║
██║██║██║  ╚█████╗░░░░██║░░░██║░░██║██████╔╝  ██║██║██║
╚═╝╚═╝╚═╝  ░╚═══██╗░░░██║░░░██║░░██║██╔═══╝░  ╚═╝╚═╝╚═╝
██╗██╗██╗  ██████╔╝░░░██║░░░╚█████╔╝██║░░░░░  ██╗██╗██╗
╚═╝╚═╝╚═╝  ╚═════╝░░░░╚═╝░░░░╚════╝░╚═╝░░░░░  ╚═╝╚═╝╚═╝

This code is intended for use and maintenance by authorized Talemetry CWS Developers only.
If you are not part of the Talemetry CWS Development team, refrain from making any edits or modifications to the code.
Unauthorized changes may result in functionality issues or unintended errors.

For any updates, questions, or concerns, please contact your Account Manager for assistance.

░█▀▀▀█ ▀█▀ ▀▀█▀▀ ░█▀▀▀ 　 ░█─░█ ░█▀▀▀█ ░█▀▀▀ ░█▀▀▀█ 　 ▀▀█▀▀ ░█─░█ ░█▀▀▀ ░█▀▄▀█ ░█▀▀▀ ░█▀▀▀█ 
─▀▀▀▄▄ ░█─ ─░█── ░█▀▀▀ 　 ░█─░█ ─▀▀▀▄▄ ░█▀▀▀ ─▀▀▀▄▄ 　 ─░█── ░█▀▀█ ░█▀▀▀ ░█░█░█ ░█▀▀▀ ─▀▀▀▄▄ 
░█▄▄▄█ ▄█▄ ─░█── ░█▄▄▄ 　 ─▀▄▄▀ ░█▄▄▄█ ░█▄▄▄ ░█▄▄▄█ 　 ─░█── ░█─░█ ░█▄▄▄ ░█──░█ ░█▄▄▄ ░█▄▄▄█

This site utilizes the 'Telus CWS Theme' for styling and functionality.
Please update the Theme directly rather than making changes to this site.
Once updated, ensure the Theme is re-applied to all applicable sites to maintain consistency across the platform.


































{%- endcomment -%}
//config code
var company_name = 'TELUS';
// .header-outer height
var top_offset_height = 0;

// Set height
function setHeight(the_selector) {
    var a_height = 0;
    $(the_selector).css('height','auto');
    $(the_selector).each(function() {    
        if ($(this).outerHeight() > a_height) {
            a_height = $(this).outerHeight();
        }
    });
    $(the_selector).attr('style','height: '+a_height+'px;');
}

function showhidesubitems() {
    // escape header subnav
    if ( $('.header__menu').hasClass('child-item-active') ) {
        $('.header__menu').removeClass('child-item-active');
        $('.header__menu .parent-item').attr('aria-expanded','false').next('.header__menu .child-item').attr('aria-hidden','true');
        $('.header__menu .parent-item').removeClass('active').next('.header__menu .child-item').removeClass('active').parent('li').removeClass('active');
    }
}
function showhidelanguage() {
    // escape language dropdown
    if ( $('.header__language-select-list-js').hasClass('active') ) {
        $('.header__language-select-list-js').removeClass('active').attr('aria-hidden','false');
        $('.header__language-select-js, .language-back-link-js').removeClass('active').attr('aria-expanded','true');
    }
}

// Facet code
window.facet_history = true;
// Function for expanding/collapsing Facet options
function facet_expand_collapse(facet_item_this){
    facet_item_this.parent().next('.facet-item__options').slideToggle();
    facet_item_this.parents('.facet-item').toggleClass('facet-item--expanded facet-item--collapsed');

    if (facet_item_this.parents('.facet-item').hasClass('facet-item--expanded')) {
        facet_item_this.attr('aria-expanded','true')
    }
    else {
        facet_item_this.attr('aria-expanded','false')
    }
}
// Function for Ajax-ing Job Search Results
function ds_tm_get_jobs_ajax(url){
    window.facet_loading = true;
    
    var t = $('.jobs-section').offset().top;
    t = t > 0 ? t : 1;
 
    $('.preloader--search').show().find('.facet-jobs-loading').fadeIn().attr('tabindex','0').focus();
    $('.jobs-section__inner').hide().find('.facet-jobs-loaded').fadeOut();
    
    if(window.facet_history==true && window.history!=null && window.history.pushState!=null){
        window.history.pushState({},'',url);
    }
    
    $.get(url, function(data) {
        $('.page-banner--category').html( $(data).find('.page-banner--category').html() );
        $('.jobs-heading').html( $(data).find('.jobs-heading').html() );
        $('.facet-section').html( $(data).find('.facet-section').html() );
        $('.jobs-section').html( $(data).find('.jobs-section').html() );
 
        var tagtitle = $(data).filter('title').text();
        document.title = (tagtitle!='') ? tagtitle : company_name+' Careers';
            
        $('.jobs-section__list').hide();
        $('.jobs-section__list').fadeIn(500);
 
        $('.facet-section').removeClass('ds_tm_ff_wait');
        window.facet_loading = false;

        $('.preloader--search').hide();
        $('.jobs-section__inner').show();

        $('html, body').animate({scrollTop: t}, 400, 'swing');

        $('.facet-jobs-loading').fadeOut();
        $('.facet-jobs-loaded').fadeIn().attr('tabindex','0').focus();
    });
}
function ds_tm_facet_click(e){
    e.preventDefault();
    var l = $(e.target).closest('.facet-item__option-link');
   
    if(window.facet_loading==true) {
        $('.facet-section').addClass('ds_tm_ff_wait');
    }
    else {
        l.addClass('ds_tm_ff_loading');
        $('.facet-section').addClass('ds_tm_ff_wait');
  
        var url = l[0].href;
        
        // workaround to remove the 'ticket' parameter on Internal sites, that prevents facet AJAX from working - https://employinc.atlassian.net/browse/SUPPORT-14016
        const urlObj = new URL(url);
        urlObj.searchParams.delete('ticket')
        const result = urlObj.toString();
  
        ds_tm_get_jobs_ajax(result);
    }
} 
// Function to showing more Facet options over the facet_num_limit
function ds_tm_facet_more_click(e){
    var l = $(e.target).closest('.facet-item__show-more');
    var facetname = l.attr('ref');
    $('#facet-item__row--'+facetname).slideToggle();
    l.parent().addClass('hide');
}

function load_facet_jobs(facet_url,facet_div) {
    window.facet_history = false;
    facet_url = facet_url ? facet_url : '';
    
    window.facet_loading = true;
    
    if(window.facet_history==true && window.history!=null && window.history.pushState!=null){
        window.history.pushState({},'',facet_url);
    }
    
    $.get(facet_url, function(data) {
        $(facet_div).html( $(data).find('.jobs-section').html() );
        window.facet_loading = false;
    });
}

// Internal site: Job Details page - Referral Hot Jobs section
function loadReferralHotJobs(url) {
    var $container = $('.js-referral-hot-jobs--referral-portal');

    $.get(url, function(data) {
        var $sourceContent = $(data).find('.js-referral-hot-jobs--jobs-search');
        var newHtml = $sourceContent.html();

        // Check: Does the element exist AND does it have actual content?
        if ($sourceContent.length > 0 && $.trim(newHtml) !== "") {
            $container.html(newHtml);
            $container.removeClass('hide');

            // Re-initialize Slick on the newly injected content
            var $newTestimonials = $container.find('.testimonials');
            if ($newTestimonials.length > 0) {
                initTestimonialCarousel($newTestimonials);
            }
        }
    });
}

function loadjob() {
    $('.job-details-preloader-js').addClass('hide');
    $('.job-details-inner-js').addClass('active');
}

// Layout: Testimonials - create a reusable initialization function - so same Slick Carousel can be called on the Job Details page
// Testimonial Carousel 1/3
function initTestimonialCarousel($target) {
    // If no target is provided, default to all testimonials
    var $el = $target || $('.testimonials');

    $el.slick({
        adaptiveHeight: true,
        nextArrow: '<button type="button" class="slick-next slick-arrow"><span class="show-for-sr">Next slide</span><i class="fa-solid fa-arrow-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><span class="show-for-sr">Previous slide</span><i class="fa-solid fa-arrow-left"></i></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } }
        ]
    });
}

$(document).ready(function() {
    top_offset_height = $('.header-outer').outerHeight() + 20;

    // Preloaders
    $('.preloader-wrapper').attr('style','top: '+$(window).scrollTop()+'px;');

    // Language select
    $(document).on('change','.header__top-language-select-js', function(e) {
        window.location.href = $(this).val();
    });
    $('.header__language-select-js, .language-back-link-js').click(function(event) {
        showhidesubitems();
        if ($(this).hasClass('active')) {
            // remove aria and active classes to existing item
            $(this).attr('aria-expanded','false');
            $('.header__language-select-list-js').attr('aria-hidden','true').removeClass('active');
        }
        else {
            // add aria and active classes to existing items
            $(this).attr('aria-expanded','true');
            $('.header__language-select-list-js').attr('aria-hidden','false').addClass('active');
        }

        $(this).toggleClass('active');
    });

    $(window).resize(function(){
        // Web-accessible force show/hide of Footer nav
        if ($('width-detector').outerWidth() >= 1024) {
            $('button.js-footer-nav-heading').attr('aria-expanded','true');
            $('nav.js-footer-nav').attr('aria-hidden','false');
        }
        else {
            $('button.js-footer-nav-heading').attr('aria-expanded','false');
            $('nav.js-footer-nav').attr('aria-hidden','true').removeClass('is-open');
        }

        // Content pages: set minimum height + set scrolling
        if ($(window).height() == $(document).height()) {
            $('body').addClass('no-scroll');
        }
        else {
            /*$('body').removeClass('no-scroll');*/
        }
        var constant_containers_height = $('.top-wrapper').outerHeight() + $('footer').outerHeight();
        var template_content_min_height = $(window).height() - constant_containers_height;
        $('.template-content').attr('style','min-height: '+template_content_min_height+'px;');
        var total_content_height = constant_containers_height+template_content_min_height;

        // Same height containers
        var same_height_counter = 0;
        var same_height_class_new = '';
        if ( $('.same-height-parent-js').length > 0 ) {
            $('.same-height-parent-js').each( function() {
                same_height_counter++;
                if ( $(this).find('.same-height-item-js').length > 0 ) {
                    $(this).find('.same-height-item-js').each( function() {
                        same_height_class_new = 'same-height-item--'+same_height_counter;
                        $(this).addClass(same_height_class_new);
                    });
                    setHeight('.'+same_height_class_new);
                }
            });
        }

        // Facet code
        // Show/hide facets
        if ($('.width-detector').width() >= 640) {
            $('body').addClass('scroll');
        }
        else if ($('.facet-section').hasClass('active')) {
            $('body').removeClass('scroll');    
        }
        else {
            $('body').addClass('scroll');   
        }
    });

    $(window).scroll(function() {
        // Header section sticky
        if ($(window).scrollTop() > $('.header-anchor.js').offset().top) {
            $('.header-outer, .template-content').addClass('fixed');
        } else {
            $('.header-outer, .template-content').removeClass('fixed');
        }
    }).scroll();

    // Mobile menu
    $('#menu-toggle').click(function() {
        if ( $('.header__menu.active').length > 0 ) {
            $(this).attr('aria-expanded','false');
            $('.header__menu').attr('aria-hidden','true');
            setTimeout(function() {
                $('.top-wrapper').removeClass('active');
            }, 500);

            // disable language pop-in
            $('.header__language-select-list-js').removeClass('active');
            $('.header__language-select-js, .language-back-link-js').attr('aria-expanded','false')
            $('.header__language-select-list-js').attr('aria-hidden','true');
        }
        else {
            $('.top-wrapper').addClass('active');
            $(this).attr('aria-expanded','true');
            $('.header__menu').attr('aria-hidden','false');
        }

        $('body').toggleClass('no-scroll');
        $('.header__menu').toggleClass('active');
        $(this).toggleClass('open');
    });
    // START Web-accessible dropdown menu
    $('.header__menu .parent-item').click(function(event) {
        showhidelanguage();
        if ($(this).hasClass('active')) {
            // remove aria and active classes to existing item
            $('.header__menu').removeClass('child-item-active');
            $(this).attr('aria-expanded','false').next('.header__menu .child-item').attr('aria-hidden','true');
            $(this).removeClass('active').next('.header__menu .child-item').removeClass('active').parent('li').removeClass('active');
        }
        else {
            // remove aria and active classes to existing items
            $('.header__menu .parent-item').attr('aria-expanded','false').next('.header__menu .child-item').attr('aria-hidden','true');
            $('.header__menu .parent-item').removeClass('active').next('.header__menu .child-item').removeClass('active').parent('li').removeClass('active');

            // add aria and active classes to clicked item
            $('.header__menu').addClass('child-item-active');
            $(this).attr('aria-expanded','true').next('.header__menu .child-item').attr('aria-hidden','false');
            $(this).addClass('active').next('.header__menu .child-item').addClass('active').parent('li').addClass('active');
        }
    });
    $('.child-item__back-link').click(function() {
        $('.header__menu').removeClass('child-item-active');
        $(this).parents('.header__menu .child-item').attr('aria-hidden','true').removeClass('active').prev('.header__menu .parent-item').attr('aria-expanded','false').removeClass('active');
    });
    // Set aria-hidden for header__menu and header_menu so screen reader can read/detect menu items
    if ($('.width-detector').width() >= 1024) {
        $('.header__menu').attr('aria-hidden','false');
    }
    else {
        $('.header__menu').attr('aria-hidden','true');
        $('.header__menu').removeClass('child-item-active');
        $('.header__menu .parent-item').attr('aria-expanded','false').removeClass('active');
        $('.header__menu .child-item').attr('aria-hidden','true').removeClass('active').parent('li').removeClass('active');
    }
    // ESC key - to escape header subnav
    document.addEventListener('keydown', function(event){
        if ( (event.key === 'Escape') || (event.keyCode === 27) ){
            showhidesubitems();
            showhidelanguage();
        }
    });
    const v_menu = $('.header__menu');
    const v_language = $('.header__language-select-outer');
    $(document).mouseup(function (e) {
        if ( (!v_menu.is(e.target) && v_menu.has(e.target).length === 0) && (!v_language.is(e.target) && v_language.has(e.target).length === 0) ) {
            showhidesubitems();
            showhidelanguage();
        }
    });
    // END Web-accessible dropdown menu

    // START web-accessible footer dropdown menu
    $('.js-footer-nav-heading').on('click', function() {
        const $nav = $('#' + $(this).attr('aria-controls')); // Grab the specific nav by ID
        
        // Check if it's currently open
        const isExpanded = $(this).attr('aria-expanded') === 'true';

        // Toggle Button state
        $(this).attr('aria-expanded', !isExpanded);
        
        // Toggle Nav state
        $nav.attr('aria-hidden', isExpanded);
        $nav.toggleClass('is-open');
        $(this).toggleClass('active');
    });
    if ($('width-detector').outerWidth() >= 1024) {
        $('.js-footer-nav').attr('aria-hidden','false');
    }
    else {
        $('.js-footer-nav').attr('aria-hidden','true');
    }
    // END web-accessible footer dropdown menu

    // Talent Network links
    $('.talent-network-link').click(function() {
        $('#talent-network-main')[0].click();
    });

    // Candidate Notifications
    $(document).on('click, .candidate-notification-link', function(e){
        launchCandidateJobNotification();
    });

    // Job Search Results page
    // Facet code
    // Show/hide facets
    $(document).on('click', '.facet-filter-results-button', function() {
        $('.facet-section').toggleClass('active');
        $('body').toggleClass('scroll');
    });
    // Expanding/collapsing Facet options
    $(document).on('click', '.facet-item__heading button', function(){ 
        facet_expand_collapse($(this));
    });
    // Ajax-ing Job Search Results
    $(document).on('click', '.facet-item__option-link', function(e){
        ds_tm_facet_click(e);
    });
    // Showing more Facet options over the facet_num_limit
    $(document).on('click', '.facet-item__show-more', function(e){
        ds_tm_facet_more_click(e);
    });

    // Workaround because pagination classes are inaccurate - find the .current span that contains the ellipsis
    $('.pagination .current:contains("…")').removeClass('current');

    // Job Details page
    // Back to Search Results button
    if ($('#back-to-search').length > 0) {
        if ( document.referrer.indexOf('/search') > -1 && document.referrer.indexOf('/jobs') > -1 && document.referrer != '' ) {
            $('#back-to-search').attr('href',document.referrer);
        }
    }
    // Bottom Apply button
    $('.apply-bottom.js').click(function() {
        $('#apply-top.js a')[0].click();
    });
    // Bottom Refer button
    $('.refer-bottom.js').click(function() {
        $('#refer-top.js a')[0].click();
    });
    // Share texts
    $('.cs_share_twitter_btn').append('<span class="show-for-sr">share to twitter</span>');
    $('.cs_facebook_btn').append('<span class="show-for-sr">share to facebook</span>');
    $('.cs_share_linkedin_btn').append('<span class="show-for-sr">share to linkedin</span>');
    // Social Referral
    {% include '_var__reusable-texts' %}
    $('a.social-share-url__copy-js').click(function() {
        var copiedtext = $(this).prev('input')[0];
        var text_copy = $(this).text();
        var text_copied = $(this).next('.social-share-url__copied-js').text();

        /* Select the text field */
        copiedtext.select();
        copiedtext.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand('copy');

        $(this).text(text_copied);
        setTimeout(function(){ $('a.social-share-url__copy-js').text(text_copy); }, 3000);
    });

    /* Custom Layouts */
    // Layout: Benefits Carousel
    if ($('.benefits').length > 0) {
        $('.benefits').slick({
            adaptiveHeight: true,
            nextArrow:      '<button type="button" class="slick-next slick-arrow"><span class="show-for-sr">Next slide</span><i class="fa-solid fa-arrow-right"></i></button>',
            prevArrow:      '<button type="button" class="slick-prev slick-arrow"><span class="show-for-sr">Previous slide</span><i class="fa-solid fa-arrow-left"></i></button>'
        });
    }

    // Layout Hiring Process
    $('.sub-tabs .tabs-title a').on('click', function() {
        // Find the content container associated with this specific tab set
        var anchor = $(this).attr('href');
        var $contentContainer = $(anchor).closest('.sub-tabs-content');

        // Smooth scroll to the container
        $('html, body').animate({
            scrollTop: $contentContainer.offset().top - 20
        }, 500);
    });

    // Layout: Testimonial Videos
    const containers = document.querySelectorAll('.video-testimonials__item-inner');
    containers.forEach(container => {
        const btn = container.querySelector('.video-watch');
        const video = container.querySelector('video'); // Find the video in this specific container

        // State variables for "physics"
        let mouseX = 0, mouseY = 0; // Actual mouse position
        let btnX = 0, btnY = 0;     // Current button position
        let isHovering = false;
        let isMoving = false;
        let timer;

        // Speed factor: 0.1 is heavy/slow, 0.3 is light/fast
        const speed = 0.08; 

        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;

            isMoving = true;
            btn.classList.add('is-moving');

            clearTimeout(timer);
            timer = setTimeout(() => {
                isMoving = false;
                btn.classList.remove('is-moving');
            }, 100);
        });

        container.addEventListener('mouseenter', () => {
            isHovering = true;
            // Initialize position so it doesn't "slide in" from (0,0)
            const rect = container.getBoundingClientRect();
            btnX = mouseX;
            btnY = mouseY;
            animate();
        });

        container.addEventListener('mouseleave', () => {
            isHovering = false;
            btn.classList.remove('is-moving');
        });

        function animate() {
            if (!isHovering) return;

            // The "Lerp" formula: Current + (Target - Current) * Speed
            btnX += (mouseX - btnX) * speed;
            btnY += (mouseY - btnY) * speed;

            btn.style.left = `${btnX}px`;
            btn.style.top = `${btnY}px`;

            // Keep the animation loop running while hovering
            requestAnimationFrame(animate);
        }

        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Find the current video's outer container
            const currentOuter = video.closest('.video-outer');

            if (video.paused) {
                // Find all videos inside a .video-outer parent
                const allOuterVideos = document.querySelectorAll('.video-outer video');
                
                allOuterVideos.forEach(v => {
                    if (v !== video) { 
                        v.pause();                        
                        // Remove .active on all .video-outer
                        const otherOuter = v.closest('.video-outer');
                        if (otherOuter) {
                            otherOuter.classList.remove('active');
                        }
                    }
                });

                // Play current video and add .active class
                video.muted = false;
                video.play();
                if (currentOuter) currentOuter.classList.add('active');
                //video.setAttribute('controls', 'true');
            }
            else {
                // Handle Pausing
                video.pause();
                if (currentOuter) currentOuter.classList.remove('active');
            }
        });
    });
    if ($('.video-testimonials').length > 0) {
        $('.video-testimonials').slick({
            adaptiveHeight: true,
            nextArrow:      '<button type="button" class="slick-next slick-arrow"><span class="show-for-sr">Next slide</span><i class="fa-solid fa-arrow-right"></i></button>',
            prevArrow:      '<button type="button" class="slick-prev slick-arrow"><span class="show-for-sr">Previous slide</span><i class="fa-solid fa-arrow-left"></i></button>',
            slidesToShow:   3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    }

    // Layout: Testimonials - Testimonial Carousel 2/3
    if ($('.testimonials').length > 0) {
        initTestimonialCarousel();
    }
});

$(window).on('load', function() {
    $(window).resize();
});