//暴露全局变量
// !function () {
//     var person=window.person={
//         name:'frank'
//     }
// }.call()


//使用闭包  还是暴露全局变量
// !function () {
//     var person={
//         name:'frank',
//         age:18
//     }
//     window.frankGrowUp=function () {
//         person.age+=1;
//         return person;
//     }
// }.call()

var accessor=function () {
    var person={
        name:'frank',
        age:18
    }
    return function frankGrowUp() {
        person.age+=1;
        return person;
    }
}
var growUp=accessor.call();
growUp.call();