'use strict';

/**
var model=Model({
    resourceName:'表名'
})
 **/

window.Model = function (options) {
    var resourceName = options.resourceName;
    return {
        init: function init() {
            var APP_ID = 'mhcytAQxMeeBSOjUvwK44nE1-gzGzoHsz';
            var APP_KEY = 'oqRE4rqhtKKyuI0HGntyCFgV';
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        fetch: function fetch() {
            var query = new AV.Query(resourceName);
            return query.find(); //Promise对象
        },
        save: function save(object) {
            // 创建TestObject表
            var X = AV.Object.extend(resourceName);
            // 在表中创建一行数据
            var x = new X();
            // 数据内容是 wordsL'Hello Word' 保存
            // 如果保存成功则运行 alert(' ');
            return x.save(object); //Promise对象
        }
    };
};