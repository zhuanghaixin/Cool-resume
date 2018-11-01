
!function () {
    //添加offset类
    let specitialTags = document.querySelectorAll('[data-x]');
    for (let i = 0; i < specitialTags.length; i++) {
        specitialTags[i].classList.add('offset');
    }
//向上滑动动画   需要延迟
    setTimeout(function () {
        findClosestAndRemoveOffset();
    }, 1000);
//当用户滚动时，再找最近的元素，然后进行滑动动画
    window.addEventListener('scroll', function () {
        findClosestAndRemoveOffset();
    })

//  helper
    function findClosestAndRemoveOffset() {
        //判断元素是否在屏幕中
        let specitialTags = document.querySelectorAll('[data-x]');
        //minIndex 就是离窗口顶部最近的元素
        let minIndex = 0;
        // console.log('window.scrollY');
        // console.log(window.scrollY);

        for (let i = 1; i < specitialTags.length; i++) {
            if (Math.abs(specitialTags[minIndex].offsetTop - window.scrollY) > Math.abs(specitialTags[i].offsetTop - window.scrollY)) {
                minIndex = i;
            }
            // console.log('minIndex');
            // console.log(minIndex);

        }
        // 功能1：向上滚动动画
        specitialTags[minIndex].classList.remove('offset');

        //功能2：红色边框判断元素是否出现在屏幕中
        // for(let i=0;i<specitialTags.length;i++){
        //   specitialTags[minIndex].classList.remove('findClosestx');
        // }
        // specitialTags[minIndex].classList.add('findClosestx');
        let id = specitialTags[minIndex].id;
        // console.log(id);
        let a = document.querySelector('a[href="#' + id + '"]');
        // console.log(a);
        let li = a.parentNode;
        let brothersNode = li.parentNode.children;
        for (let i = 0; i < brothersNode.length; i++) {
            brothersNode[i].classList.remove('highlight');
        }
        a.parentNode.classList.add('highlight');

        // specitialTags[minIndex].classList.add('animate');


    }
}.call();






