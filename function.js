// #函数式编程
var obj={
    a:123
}

function objPlus (obj){
    var _obj=Object.create(obj)//解除obj和_obj的引用
    _obj.a+=1
    return _obj
}


var arr=[1,2,3]
function arrPlus(arr){
    var _arr=[...arr]//解除arr和_arr的引用
    _arr[0]+=1
    return _arr
}
// es6
export default class1;
import class1 from "./mode1.js"

export function f1(){

}
export function f2(){

}
import {f1} from "./mode1.js"
import * as all from "mode1.js"
//commomjs
module.exports=class1;
const class1=require("./mode1.js")

function f1(){

}
function f2(){

}

exports.f1=f1
exports.f2=f2
const all =require("./mode1.js")
const f1=require("./mode1.js").f1

// #compose 和 pipe
//compose从右往左执行
//pipe从右往左执行
function compose(){
    // arguments 类数组对象  接收传入函数的所有参数
    const args=[].slice.apply(arguments)//把arguments 转化成数组
    return function (num){
        // var _result=num
        // for (var i=args.length-1;i>=0;i--){
        //     _result=args[i](_result)
        // }
        // return _result
        return args.reduceRight((res,cb)=>{
            cb(res)
        },num)
    }
}

