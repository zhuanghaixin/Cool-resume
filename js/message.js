var APP_ID = 'mhcytAQxMeeBSOjUvwK44nE1-gzGzoHsz';
var APP_KEY = 'oqRE4rqhtKKyuI0HGntyCFgV';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});


let postMessageForm = document.querySelector('.postMessageForm');
console.log(postMessageForm);
postMessageForm.addEventListener('submit', function (e) {
    e.preventDefault();//阻止默认事件
    let content = postMessageForm.querySelector('input[name=content').value;
    // 创建TestObject表
    var Message = AV.Object.extend('Message');
// 在表中创建一行数据
    var message = new Message();
// 数据内容是 wordsL'Hello Word' 保存
// 如果保存成功则运行 alert(' ');
    message.save({
        'content': content
    }).then(function (object) {
        alert('数据提交成功');
        window.location.reload();
    },function (error) {
        alert('请改天留言');
    })
})


var query = new AV.Query('Message');
query.find()
    .then(function (messages) {
    let messageArray=messages.map((item)=>item.attributes);
        let messageList=document.querySelector('.messageList');
    messageArray.forEach((item)=>{
        let li=document.createElement('li');
        let content=item.content;
        li.innerText=content;
        messageList.appendChild(li);
    })
}).then(function (messages) {
    // 更新成功

}, function (error) {
    // 异常处理
    console.log(error);
});


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