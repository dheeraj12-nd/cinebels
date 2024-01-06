/* Home page banner */
        jQuery('.home-ban').owlCarousel({
        loop:true,
        margin:10,
        // autoplay:true,
        autoplayTimeout:7000,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1,
                autoplay:true
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
/* end Home page banner */

/* limelight slider */
jQuery('.hprod-slid').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1,
          autoplay:true
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})
/* end limelight slider */

/* Crafting bespoke slider */
jQuery('.haudio-slid').owlCarousel({
    loop:true,
    margin:35,
    autoplay:true,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1,
            autoplay:true
        },
        600:{
            items:2,
            margin:15
        },
        1000:{
            items:2
        }
    }
});
/* end Crafting bespoke slider */