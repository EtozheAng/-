 $(function(){
   $(".menu a").on("click", function (event) {
     event.preventDefault();
     var id = $(this).attr('href'),
       top = $(id).offset().top;
     $('body,html').animate({ scrollTop: top }, 1000);
   });


   $('.menu__btn').on('click', function(){
     $('.menu__list').toggleClass('menu__list--active');
   });

   $('.slider__items').slick({
     prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
     nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-right"></button>',
     slidesToShow: 4,
     slidesToScroll: 2,
     dots: true,
     variableWidth: true,
     responsive: [
       {
         breakpoint: 1400,
         settings: {
           arrows: false
         }
       },
       {
         breakpoint: 1024,
         settings: {
           arrows: false,
           slidesToShow: 3,
           slidesToScroll: 3
         }
       },
       {
         breakpoint: 790,
         settings: {
           arrows: false,
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 475,
         settings: {
           arrows: false,
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
   });

   $('.accordion-item').on('click', function(){
     $(this).toggleClass('accordion-item__title--active');
     $(this).children('.accordion-item__content').slideToggle(400);
   });
 });