 $(function(){
//    $(".menu__sub").hide(); // скрываем выпадающее меню
//    $(".menu li:has('.menu__sub')").hover(
//   function(){
//        $(".menu__sub").stop().fadeToggle(300);} /* отбираем элемент списка, который содержит элемент с классом .submenu и добавляем ему функцию при наведении, которая показывает и скрывает выпадающее меню */
// );
   $('.slider__items').slick({
     prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
     nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-right"></button>',
     infinite: true,
     slidesToShow: 4,
     slidesToScroll: 2,
     dots: true,
     variableWidth: true
   });

   $('.accordion-item').click(function(){
     $(this).toggleClass('accordion-item__title--active');
     $(this).children('.accordion-item__content').slideToggle(400);
   });
 });