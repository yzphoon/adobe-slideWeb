const isMobile = $(window).width() <= 480;
const $slide = $('#Slide').find('grid');
const $grid = $slide.;
const $nav = $('#Nav');


console.log('isMobil = ' + isMobile);

function setGrid() {
    if (isMobile) {
        $grid.addClass('grid-2');
        return;
    }
    $grid.addClass('grid-3');
}

function setScroll() {
    $(window).scroll(function () {
        if (isMobile) {
            if ($(window).scrollTop() <= 20) {
                $nav.removeClass('nav-active');
                return;
            }
            $nav.addClass('nav-active');
        }
    });
}

function setInit() {
    setGrid();
    //其他載入畫面的函式庫
}

function setEvent() {
    setScroll();
    setFancybox();
    //其他事件的函式庫
}

function setFancybox() {
    $grid.find('a').fancybox({
        protect: true,
        loop: true,
        animationDuration: 1000,
        transitionDuration: 1000,
        transitionEffect: 'tube',
        // fullScreen: {
        //     autoStart: false,
        // },
        keyboard: true,
        // infobar: true,
        // toolbar: true,
        // smallBtn: true,
        arrows: true,
        // slideShow: {
        //     autoStart: true,
        //     speed: 1000,
        // },
        // thumbs: true,
        // buttons: [
        //     'share',
        //     'zoom',
        //     'slideShow',
        //     'fullscreen',
        //     'thumbs',
        //     'close'
        // ],
        media: {
            youtube: {
                params: {
                    autoplay:false,
                }
            }
        }
    });

}

setInit();
setEvent();

// $(window).scroll(function () {
//     if (!isMobile) return;
    
//     if ($(this).scrollTop() <= 20) {
//         $nav.removeClass('nav-active');
//         return;
//     }
//     $nav.addClass('nav-active');
// });