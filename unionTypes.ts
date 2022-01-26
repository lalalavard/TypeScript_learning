// Union Types 联合类型 表示类型值可以取多种类型的一种
// 使用方法 使用|分割不同类型，运行类型为联合类型中的类型

let luckyNumber:string|number;
luckyNumber = 666;
luckyNumber = '666';

// 以上代码都是可以的，但如果类型不在联合类型中，则会报错
// luckyNumber = false;
// Type 'boolean' is not assignable to type 'string | number'.


// 访问联合类型的属性和方法

// 当TS不确定一个联合类型的属性是什么类型的时候，我们只能访问此联合类型的所有类型里共有的属性和方法

// 这句话听起来怎么这么拗口🤔，其实很好理解
// 比如number和string 都有 toString()方法  那么就可以使用公有的toString方法
function  getString(something:string|number):string{
    return something.toString()
}
//
// function getLength(some:string|number):string{
//     return  some.length;
// }
// Property 'length' does not exist on type 'string | number'.
// .length 属性只在字符串有，数值没有，因此报错

// 联合类型的属性类型是可以在之间转化的，因此需要注意 联合属性的 属性和方法 调用时机
let aNumber: string | number;
aNumber = 'seven';
console.log(aNumber.length); // 5
aNumber = 7;
// console.log(aNumber.length); // 编译时报错
// Property 'length' does not exist on type 'number'.
// 这段代码中的aNumber是联合类型，在第二行aNumber被推断成为了'string'类型，因此可以访问得到.length属性。
// 而在第四行中，又被推断成了'number'类型，这时候就会报错了。