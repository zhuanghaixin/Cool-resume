!function () {
    let liTages = document.querySelectorAll('nav.menu>ul>li');
    for (let i = 0; i < liTages.length; i++) {
        liTages[i].onmouseenter = function (e) {
            let li = e.currentTarget;
            // let brother=li.getElementsByTagName('ul')[0];
            // let brother=a.nextSibling;
            // while(brother.tagName!=='UL'){
            //   brother=brother.nextSibling;
            // }
            //鼠标一进去就添加active类
            li.classList.remove('vanish');
            li.classList.add('active');
        }
        liTages[i].onmouseleave = function (e) {
            let li = e.currentTarget;
            // let brother=li.getElementsByTagName('ul')[0];
            // let brother=a.nextSibling;
            // while(brother.tagName!=='UL'){
            //   brother=brother.nextSibling;
            // }
            //鼠标一进去就删除active类
            // brother.classList.remove('active');
            li.classList.add('vanish');
            li.classList.remove('active');

        }
    }


    if (window.navigator.onLine == true) {
        //使用TWEEN.js 运行动画
        console.log(TWEEN);

        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }

        requestAnimationFrame(animate);
        //用TWEEN.js的auto scroll smoothly
        let aTags = document.querySelectorAll('nav.menu >ul>li>a');
        // console.log("currentTop   "+window.scrollY);
        for (let i = 0; i < aTags.length; i++) {
            aTags[i].onclick = function (x) {
                // console.log("currentTop点击   "+window.scrollY);
                x.preventDefault();
                let a = x.currentTarget;
                let href = a.getAttribute('href');
                // console.log(href);
                let element = document.querySelector(href);
                // console.log(element);
                // let tops=element.scrollTop;
                // console.log("scrollTop"+tops);
                let top = element.offsetTop;
                // console.log(top);
                // window.scrollTo(0,top-80);
                let currentTop = window.scrollY;
                let targetTop = top - 80;
                let i = 0;
                let distance = targetTop - currentTop;//每次动的距离
                let t = Math.abs(distance / 100) * 500;
                if (t > 500) {
                    t = 500;
                }
                var coords = {y: currentTop};
                var tween = new TWEEN.Tween(coords)
                    .to({y: targetTop}, t)
                    .easing(TWEEN.Easing.Quadratic.InOut)
                    .onUpdate(function () {
                        console.log(1);
                        window.scrollTo(0, coords.y);
                    })
                    .start(); // Start the tween immediately.

            }
        }
    } else {
        //auto scroll smoothly
        let aTags = document.querySelectorAll('nav.menu >ul>li>a');
        console.log("currentTop   " + window.scrollY);
        for (let i = 0; i < aTags.length; i++) {
            aTags[i].onclick = function (x) {
                console.log("currentTop点击   " + window.scrollY);
                x.preventDefault();
                let a = x.currentTarget;
                let href = a.getAttribute('href');
                // console.log(href);
                let element = document.querySelector(href);
                // console.log(element);
                // let tops=element.scrollTop;
                // console.log("scrollTop"+tops);
                let top = element.offsetTop;
                // console.log(top);
                // window.scrollTo(0,top-80);
                let n = 25;//一共动多少次  5
                let duration = 1000 / n; //每次动多少秒  5000
                let currentTop = window.scrollY;
                console.log("window.scrollY   " + currentTop);
                let targetTop = top - 80;
                console.log("div.offsetTop-80   " + targetTop);
                let i = 0;
                let distance = (targetTop - currentTop) / n;//每次动的距离
                console.log("每次移动的距离 distance   " + distance);
                let id = setInterval(() => {
                    //   if(i===n){
                    //     // window.clearInterval(id);  注意，这是不行的，没返回值，要多执行一次
                    //     return;
                    // }
                    i++;
                    console.log("currentTop   " + window.scrollY);
                    window.scrollTo(0, currentTop + distance * i);
                    console.log("currentTop滚动之后  " + window.scrollY + distance * i);
                    if (i === n) {
                        window.clearInterval(id);//  注意，这是不行的，因为要多执行一次
                        // return;
                    }
                }, duration);
                // console.log("之后currentTop   "+currentTop);
                // console.log("之后targetTop   "+targetTop);

            }
        }
    }


}.call();



