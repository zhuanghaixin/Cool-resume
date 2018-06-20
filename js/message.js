!function () {
    var view = document.querySelector('#siteMessage');

    var controller = {
        view: null,
        messageList: null,
        postMessageForm: null,
        init: function (view) {
            this.view = view;
            this.messageList = view.querySelector('.messageList');
            this.postMessageForm = view.querySelector('.postMessageForm');
            this.initAV();
            this.loadMessage();
            this.bindEvents();
        },
        initAV: function () {
            var APP_ID = 'mhcytAQxMeeBSOjUvwK44nE1-gzGzoHsz';
            var APP_KEY = 'oqRE4rqhtKKyuI0HGntyCFgV';
            AV.init({appId: APP_ID, appKey: APP_KEY});
        },
        loadMessage: function () {
            var query = new AV.Query('Message');
            query.find()
                .then((
                    messages) => {
                    let messageArray = messages.map((item) => item.attributes);

                    messageArray.forEach((item) => {
                        let li = document.createElement('li');
                        let content = item.content;
                        let name = item.name;
                        li.innerText = `${name}:${content}`;
                        this.messageList.appendChild(li);
                    })
                }).then(function (messages) {
                // 更新成功

            }, function (error) {
                // 异常处理
                console.log(error);
            });
        },
        bindEvents: function () {

            this.postMessageForm.addEventListener('submit', (e) =>{
                e.preventDefault();//阻止默认事件
                this.saveMessage();
            })

            // // 创建TestObject表
            // var Test= AV.Object.extend('Test');
            // // 在表中创建一行数据
            // var test = new Test();
            // // 数据内容是 wordsL'Hello Word' 保存
            // // 如果保存成功则运行 alert(' ');
            // test.save({
            //     content: 'hhhh'
            // }).then(function(object) {
            //     alert('OK');
            // })
        },
        saveMessage: function () {
            var postMessageForm = this.postMessageForm;
            let content = postMessageForm.querySelector('input[name=content').value;
            let name = postMessageForm.querySelector('input[name=name').value;
            // 创建TestObject表
            var Message = AV.Object.extend('Message');
            // 在表中创建一行数据
            var message = new Message();
            // 数据内容是 wordsL'Hello Word' 保存
            // 如果保存成功则运行 alert(' ');
            message.save({
                'content': content,
                'name': name
            }).then(function (object) {
                // alert('数据提交成功');
                // window.location.reload();  有刷新留言
                let li = document.createElement('li');
                let content = object.attributes.content;
                let name = object.attributes.content;
                let messageList = document.querySelector('.messageList');
                li.innerText = `${name}:${content}`;
                messageList.appendChild(li);
            }, function (error) {
                alert('请改天留言');
            })
        }
    }
    controller.init.call(controller, view);

}.call();
