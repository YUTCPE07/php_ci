var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  virtual: {
    slides: (function () {
      var slides = [];
      // var num = 1;
      for (var i = 0; i < 10; i += 1) {
      // num++;
        slides.push('<div class="card border-primary mb-3 mt-5" style="max-width: 180rem;"> '+
                    '<img class="rounded-circle" src="https://picsum.photos/900/500?random&t='+ i+1 +'"> '+
                          '<img class="card-img-top" src="https://picsum.photos/900/500?random&t='+ i+2 +'" > '+
                          '<div class="card-body text-primary"> '+
                            '<h5 class="card-title">Primary card title</h5> '+
                            '<p class="card-text">Some quick example text to build on the car</p> '+
                          '</div> '+
                      '</div>');
      }
      return slides;
    }()),
  },
});

swiper.slideTo(1, 0); //center

document.querySelector('.slide-1').addEventListener('click', function (e) {
  e.preventDefault();
  swiper.slideTo(0, 0);
});
document.querySelector('.slide-250').addEventListener('click', function (e) {
  e.preventDefault();
  swiper.slideTo(249, 0);
});
document.querySelector('.slide-500').addEventListener('click', function (e) {
  e.preventDefault();
  swiper.slideTo(499, 0);
});