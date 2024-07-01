const isMobile = $(window).width() <= 480;
const $slide = $('#Slide');
const $grid = $slide.find('.grid');
const $nav = $('#Nav');
const $btns = $nav.find('.nav-btn');


function setGrid() {
    if (isMobile) {
        $grid.addClass('grid-2');
        console.log('slide', $slide)
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

function setClickBtn() {
    $btns.click(function() {
        $(this)
            .attr('disabled', true)
            .siblings().attr('disabled', false);

        const index = $(this).index();
        // if(index == 0) {
        //    $slide.css('transform', 'translate(0, 0)');
        // } else if(index == 1) {
        //     $slide.css('transform', 'translate(-100vw, 0)');
        // } else if(index == 2) {
        //     $slide.css('transform', 'translate(-200vw, 0)');
        // } else if(index == 3) {
        //     $slide.css('transform', 'translate(0, -100vh)');
        // } else if(index == 4) {
        //     $slide.css('transform', 'translate(-100vw, -100vh)');
        // } else if(index == 5) {
        //     $slide.css('transform', 'translate(-200vw, -100vh)');
        // }
        switch (index) {
            case 0:
                $slide.css('transform', 'translate(0, 0)');
                break;
            case 1:
                $slide.css('transform', 'translate(-100vw, 0)');
                break;
            case 2:
                $slide.css('transform', 'translate(-200vw, 0)');
                break;
            case 3:
                $slide.css('transform', 'translate(0, -100vh)');
                break;
            case 4:
                $slide.css('transform', 'translate(-100vw, -100vh)');
                break;
            case 5:
                $slide.css('transform', 'translate(-200vw, -100vh)');
                break;
        }
    });
}

function setInit() {
    setGrid();
    $nav.find('.nav-btn').eq(0).attr('disabled', true);
    //其他載入畫面的函式庫
}

function setEvent() {
    setScroll();
    setFancybox();
    setClickBtn();
    //其他事件的函式庫
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