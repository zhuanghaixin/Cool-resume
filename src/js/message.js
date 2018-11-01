!function () {
    var view = View('#siteMessage');
    var model=Model({resourceName:'Message'});
    var controller=Controller({
        init:function (view,model) {
            this.messageList = view.querySelector('.messageList');
            this.postMessageForm = view.querySelector('.postMessageForm');
            this.loadMessage();
        },
        loadMessage: function () {
            var query = new AV.Query('Message');
            this.model.fetch()
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
            this.model.save({'name':name,'content':content}).then(function (object) {
                // alert('数据提交成功');
                // window.location.reload();  有刷新留言
                let li = document.createElement('li');
                let content = object.attributes.content;
                let name = object.attributes.name;
                let messageList = document.querySelector('.messageList');
                li.innerText = `${name}:${content}`;
                messageList.appendChild(li);
                postMessageForm.querySelector('input[name=content').value="";
            }, function (error) {
                alert('请改天留言');
            })
        }
    })
    
    // var controller = {
    //     view: null,
    //     model:null,
    //     messageList: null,
    //     postMessageForm: null,
    //     init: function (view,model) {
    //         this.view = view;
    //         this.model=model;
    //         this.messageList = view.querySelector('.messageList');
    //         this.postMessageForm = view.querySelector('.postMessageForm');
    //         this.model.init();
    //         this.loadMessage();
    //         this.bindEvents();
    //     },
    //
    //     loadMessage: function () {
    //         var query = new AV.Query('Message');
    //         this.model.fetch()
    //             .then((
    //                 messages) => {
    //                 let messageArray = messages.map((item) => item.attributes);
    //
    //                 messageArray.forEach((item) => {
    //                     let li = document.createElement('li');
    //                     let content = item.content;
    //                     let name = item.name;
    //                     li.innerText = `${name}:${content}`;
    //                     this.messageList.appendChild(li);
    //                 })
    //             }).then(function (messages) {
    //             // 更新成功
    //
    //         }, function (error) {
    //             // 异常处理
    //             console.log(error);
    //         });
    //     },
    //     bindEvents: function () {
    //
    //         this.postMessageForm.addEventListener('submit', (e) =>{
    //             e.preventDefault();//阻止默认事件
    //             this.saveMessage();
    //         })
    //
    //         // // 创建TestObject表
    //         // var Test= AV.Object.extend('Test');
    //         // // 在表中创建一行数据
    //         // var test = new Test();
    //         // // 数据内容是 wordsL'Hello Word' 保存
    //         // // 如果保存成功则运行 alert(' ');
    //         // test.save({
    //         //     content: 'hhhh'
    //         // }).then(function(object) {
    //         //     alert('OK');
    //         // })
    //     },
    //     saveMessage: function () {
    //         var postMessageForm = this.postMessageForm;
    //         let content = postMessageForm.querySelector('input[name=content').value;
    //         let name = postMessageForm.querySelector('input[name=name').value;
    //         this.model.save({'name':name,'content':content}).then(function (object) {
    //             // alert('数据提交成功');
    //             // window.location.reload();  有刷新留言
    //             let li = document.createElement('li');
    //             let content = object.attributes.content;
    //             let name = object.attributes.name;
    //             let messageList = document.querySelector('.messageList');
    //             li.innerText = `${name}:${content}`;
    //             messageList.appendChild(li);
    //             postMessageForm.querySelector('input[name=content').value="";
    //         }, function (error) {
    //             alert('请改天留言');
    //         })
    //     }
    // }
    controller.init.call(controller, view,model);

}.call();
