'use strict';

!function () {
    //添加offset类
    var specitialTags = document.querySelectorAll('[data-x]');
    for (var i = 0; i < specitialTags.length; i++) {
        specitialTags[i].classList.add('offset');
    }
    //向上滑动动画   需要延迟
    setTimeout(function () {
        findClosestAndRemoveOffset();
    }, 1000);
    //当用户滚动时，再找最近的元素，然后进行滑动动画
    window.addEventListener('scroll', function () {
        findClosestAndRemoveOffset();
    });

    //  helper
    function findClosestAndRemoveOffset() {
        //判断元素是否在屏幕中
        var specitialTags = document.querySelectorAll('[data-x]');
        //minIndex 就是离窗口顶部最近的元素
        var minIndex = 0;
        // console.log('window.scrollY');
        // console.log(window.scrollY);

        for (var _i = 1; _i < specitialTags.length; _i++) {
            if (Math.abs(specitialTags[minIndex].offsetTop - window.scrollY) > Math.abs(specitialTags[_i].offsetTop - window.scrollY)) {
                minIndex = _i;
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
        var id = specitialTags[minIndex].id;
        // console.log(id);
        var a = document.querySelector('a[href="#' + id + '"]');
        // console.log(a);
        var li = a.parentNode;
        var brothersNode = li.parentNode.children;
        for (var _i2 = 0; _i2 < brothersNode.length; _i2++) {
            brothersNode[_i2].classList.remove('highlight');
        }
        a.parentNode.classList.add('highlight');

        // specitialTags[minIndex].classList.add('animate');

    }
}.call();