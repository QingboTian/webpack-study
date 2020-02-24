// 浏览器是无法识别的 需要使用webpack将main.js 解析执行
import $ from 'jquery';

import "./css/index.css"
import Vue from 'vue'
import login from "./login.vue"
// import Vue from "../node_modules/vue/dist/vue.js"

// $(function(){

// })

// class Person {
//     static info = {name : 'zs', age : 18}
// }

// console.log(Person.info)

// 导入test.js
import student, {str1, str2} from "./js/test.js"

console.log("------------")
console.log(str2)
console.log(student)
console.log(str1)
console.log(str2)
console.log("------------")


var vm = new Vue({
    el: "#container",
    data: {
        msg: "我是vue渲染的"
    },
    // 若直接进行导入的是import Vue from 'vue'不做任何操作的话 无法使用component进行渲染 必须使用render进行渲染
    // 若导入的是import Vue from "../node_modules/vue/dist/vue.js" 或者 在webpack.config.js 设置了别名 则可以使用
    components: {
        login
    },
    // 使用render进行渲染 会直接替换原来的跟根容器
    // render: function (createElement) {
    //     return createElement(login)
    // }
    // 简写为
    // reder : c => c(login)
})