!function () {
    //粘贴的导航栏  ，自动高亮导航栏
    window.addEventListener('scroll',function () {
        window.scrollY > 0 ? topNavBar.classList.add('sticky') : topNavBar.classList.remove('sticky');

    })

}.call();



