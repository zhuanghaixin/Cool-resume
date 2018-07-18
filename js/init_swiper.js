!function () {
    var view=View('#mySlides');

    // view.style.border="1px solid red";
    var controller={
        view:null,
        swiper:null,
        swiperOptions:{

            loop: true,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条

        },
        init:function (view) {
            this.view=view;
            this.initSwiper.call(this);
        },
        initSwiper:function () {
            this.swiper = new Swiper('.swiper-container',this.swiperOptions );
        }
    }
    controller.init.call(controller);









    var controller=function (view) {

    }
    controller(view)

}.call();

