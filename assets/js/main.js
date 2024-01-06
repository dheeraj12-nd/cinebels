/**
* Template Name: Impact
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky Header on Scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;

    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('sticked');
        if (nextElement) nextElement.classList.add('sticked-header-offset');
      } else {
        selectHeader.classList.remove('sticked');
        if (nextElement) nextElement.classList.remove('sticked-header-offset');
      }
    }
    window.addEventListener('load', headerFixed);
    document.addEventListener('scroll', headerFixed);
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });






  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  
  /**Schedule demo modal***/
  jQuery('.schedule_demo_modal_opener').click(function(e){
      e.preventDefault();
      jQuery('#schedule_demo').modal('show');
  });
  jQuery('#schedule_demo').find('.close').click(function(){
      jQuery('#schedule_demo').modal('hide');
  });


/**
   *   /**dealer login modal***/
  jQuery('.dealer_login_demo_modal_opener').click(function(e){
      e.preventDefault();
      //jQuery('.modal').modal('hide');
      jQuery('#dealer_login_demo').modal('show');
  });
  jQuery('#dealer_login_demo').find('.close').click(function(){
      jQuery('#dealer_login_demo').modal('hide');
  });

  /**
   *   /**

  /**
   *   /**login modal***/
  jQuery('.login_demo_modal_opener').click(function(e){
      e.preventDefault();
      jQuery('#register_demo').modal('hide');
      jQuery('#login_demo').modal('show');
  });
  jQuery('#login_demo').find('.close').click(function(){
      jQuery('#login_demo').modal('hide');
  });

  /**
   *   /**
   *   /**login modal***/
  jQuery('.register_demo_modal_opener').click(function(e){
      e.preventDefault();
      jQuery('#login_demo').modal('hide');
      jQuery('#register_demo').modal('show');
  });
  jQuery('#register_demo').find('.close').click(function(){
      jQuery('#register_demo').modal('hide');
  });

  /**
   *   /**gallery modal***/
  jQuery('.gallery_demo_modal_opener').click(function(e){
      e.preventDefault();
      jQuery('#gallery_demo').modal('show');
  });
  jQuery('#gallery_demo').find('.close').click(function(){
      jQuery('#gallery_demo').modal('hide');
  });

  /**
   *    *   /**team bio modal***/
  jQuery('.bio_demo_modal_opener').click(function(e){
      e.preventDefault();
      jQuery('#bio_demo').modal('show');
  });
  jQuery('#bio_demo').find('.close').click(function(){
      jQuery('#bio_demo').modal('hide');
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector('.portfolio-isotope');

  if (portfolionIsotope) {

    let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
    let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
    let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

    window.addEventListener('load', () => {
      let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
        itemSelector: '.portfolio-item',
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort
      });

      let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
      menuFilters.forEach(function(el) {
        el.addEventListener('click', function() {
          document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aos_init === 'function') {
            aos_init();
          }
        }, false);
      });

    });

  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

  var charLimit = 243;

    function truncate(el) {
      var clone = el.children().first(),
        originalContent = el.html(),
        text = clone.text();
    
      if (clone[0].innerHTML.trim().length > charLimit) {
        el.attr("data-originalContent", originalContent);
        el.addClass("hasHidden");
        clone.text(text.substring(0, charLimit) + "...");
        el.empty().append(clone);
        el.append(
          jQuery("<div class='read-more hban-btn'><a href='#' class='more'>Read More</a>")
        );
      }
    }
    
    jQuery("body").on("click", "a.more", function (e) {
      e.preventDefault();
      var truncateElement = jQuery(this).parent().parent();
      if (truncateElement.hasClass("hasHidden")) {
        jQuery(truncateElement).html(truncateElement.attr("data-originalContent"));
        jQuery(truncateElement).append(
          jQuery("<div class='read-more hban-btn'><a href='#' class='more'>Read Less</a>")
        );
        truncateElement.removeClass("hasHidden").slow;
      } else {
        jQuery(".read-more", truncateElement).remove();
        truncate(truncateElement);
      }
    });
    
    jQuery(".truncate").each(function () {
      truncate(jQuery(this));
    });
    function myCallback() {
      setTimeout(function () {
        jQuery("truncate").removeClass("hasHidden");
      }, 3000);
    }



  jQuery('.milestone-slider.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:true,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3.5
      }
  }
})





// number count for stats, using jQuery animate

jQuery('.counting').each(function() {
  var jQuerythis = jQuery(this),
      countTo = jQuerythis.attr('data-count');
  
  jQuery({ countNum: jQuerythis.text()}).animate({
    countNum: countTo
  },

  {

    duration: 3000,
    easing:'linear',
    step: function() {
      jQuerythis.text(Math.floor(this.countNum));
    },
    complete: function() {
      jQuerythis.text(this.countNum);
      //alert('finished');
    }

  });  
  

});



 // tabbed content
    jQuery(".tab_content").hide();
    jQuery(".tab_content:first").show();

  /* if in tab mode */
    jQuery("ul.tabs li").click(function() {
		
      jQuery(".tab_content").hide();
      var activeTab = jQuery(this).attr("rel"); 
      jQuery("#"+activeTab).fadeIn();		
		
      jQuery("ul.tabs li.active").removeClass("active");
      jQuery(this).addClass("active");

	  jQuery(".tab_drawer_heading").removeClass("d_active");
	  jQuery(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	jQuery(".tab_drawer_heading").click(function() {
      
      jQuery(".tab_content").hide();
      var d_activeTab = jQuery(this).attr("rel"); 
      jQuery("#"+d_activeTab).fadeIn();
	  
	  jQuery(".tab_drawer_heading").removeClass("d_active");
      jQuery(this).addClass("d_active");
	  
	  jQuery("ul.tabs li").removeClass("active");
	  jQuery("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	jQuery('ul.tabs li').last().addClass("tab_last");
	
	
	
// load more
jQuery(document).ready(function(){
    jQuery(".productBox").slice(0, 6).show();
    jQuery(".load-more").on("click", function(e){
    e.preventDefault();
    jQuery(".productBox:hidden").slice(0, 6).slideDown();
    if(jQuery(".productBox:hidden").length == 0) {
        jQuery(".load-more").text("No more DIY products").addClass("noContent");
    }
  });
  
})

// knowledge-center
    jQuery('.knowledge-center.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

// load-more

jQuery(document).ready(function(){
    jQuery(".newsBox").slice(0, 9).show();
    jQuery(".load-more-brnads").on("click", function(e){
    e.preventDefault();
    jQuery(".newsBox:hidden").slice(0, 9).slideDown();
    if(jQuery(".newsBox:hidden").length == 0) {
        jQuery(".load-more-brnads").text("No products").addClass("noContent");
    }
  });
  
})



jQuery('.product-slider').owlCarousel({
    loop:true,
    margin:30,
   
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3,
             dots: false
        },
        1000:{
            items:4,
             dots: false,
        }
    }
})


// thumnil slider code
$(document).ready(function() {
  var bigimage = $("#big");
  var thumbs = $("#thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: false,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ]
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 4,
    margin:10,
    dots: false,
    nav: true,
    // navText: [
    //   '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
    //   '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    // ],
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 4,
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});


// Dealership- slider
	$('.dealership-slider.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	dots:true,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// gallery- slider
$('.gallery-slider.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


