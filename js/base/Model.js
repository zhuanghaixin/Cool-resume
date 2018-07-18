window.Model=function (options) {
    let resourceName=options.resourceName;
    return {
        init: function () {
            var APP_ID = 'mhcytAQxMeeBSOjUvwK44nE1-gzGzoHsz';
            var APP_KEY = 'oqRE4rqhtKKyuI0HGntyCFgV';
            AV.init({appId: APP_ID, appKey: APP_KEY});
        },
        fetch:function () {
            var query = new AV.Query(resourceName);
            return query.find()  //Promise对象

        },
        save:function (object) {
            // 创建TestObject表
            var x = AV.Object.extend(resourceName);
            // 在表中创建一行数据
            var x= new Message();
            // 数据内容是 wordsL'Hello Word' 保存
            // 如果保存成功则运行 alert(' ');
            return x.save(object)  //Promise对象
        }
    }


}