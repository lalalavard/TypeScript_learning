// 类型推论
// 前面说过了，没有显式声明类型且没赋值的话都会被TS认为是any类型，
// 如果手动加上类型约束，那就太过于繁琐了，代码量巨大
// 事实上TS很聪明，会依照类型推论的规则推断出一个类型
// 也就是你直接赋值，TS会根据这个值的类型 来推断类型

let myName = 'lavard';
// myName = 666;
// Type 'number' is not assignable to type 'string'.

// 实际上这等价于:
// let myName:string = 'lavard';
// myName = 666;
// 这就是类型推论，是不是感觉TS很简单？


