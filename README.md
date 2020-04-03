# Cool-resume
个人简历展示页
[在线体验地址](https://zhuanghaixin.github.io/Cool-resume/src/)
## 技术栈
```
HTML5+CSS3+jQuery+JavaScript+leancloud
```

## 项目介绍
此项目为个人简历展示页，使用JavaScript和CSS3完成各种交互效果，采用MVC作为该项目的架构，使用leancloud存储进行留言板的开发。

## 交互实现
* 粘性导航 stick navbar
* 导航自动高亮 auto hightlight navbar
* 自动平滑滚动 auto scroll smoothly
* 二级菜单 submenu
* 无缝轮播 gapless slides
* 加载动画 loadiing animation
* 滚动动画 animate when scroll


## 遇到问题
- loading动画 ：http://js.jirengu.com/latof/3/edit?html,css,output
- 用户操作的元素和监听的元素可能不同
[代码链接](http://js.jirengu.com/forom/1/edit?html,css,js)

- 对某个表单的提交按钮进行监听的时候，应该监听按钮还是form表单
>应该监听form表单，因为当用户按回车进行提交的时候，如果监听提交按钮的话，除了按钮的click事件需要监听，还需要监听按钮的keypress事件，下面我们来看看两者的区别

```html
form>
    <input type="text" name="content">
    <input type="submit" value="提交">
    </form>
```
```javascript
//监听form
let form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    //开始写你的代码
})

```
```javascript
//监听按钮
let btn=document.querySelector('input[type=submit');
btn.addEventListener('click',function () {
    let input=document.querySelector('input[name=content');
    input.addEventListener('keypress',function (e) {
        if(e.keyCode==13){
            //开始写你的代码
        }
    })
})

```

## 项目启动

```
git clone git@github.com:zhuanghaixin/Cool-resume.git
cd Cool-resume
打开iindex.html即可预览
```


