//我们都知道JS有八种数据类型
// 其中基本数据类型有7种(boolean,string,number,symbol,bigint,undefined,null)，引用类型1种( object)


// 现在开始介绍TypeScript的数据类型
// TypeScript:后面跟类型，可以加空格也可以不加

//boolean类型  布尔值，和JS一样，没什么好说的
let isDone: boolean = false;

//number类型  数值类型和JS一样
let count: number = 6;
let notANumber:number = NaN;
let infinityNumber: number = Infinity;

// 还可以表示二进制、八进制、十六进制
let binary:number = 0b101010;
let eight:number = 0o744;
let sixteen:number = 0xAEFB;

// void 空值类型
// JavaScript没有空值(Void)的概念，而TS可以用void表示没有任何返回值的函数
function thisEmpty():void{
    alert('this is a void value function')
}
let _void1:void = undefined;
let _void2:void = null;
// void 类型变量没什么用，因为void变量你只能给它赋值 undefined和null
// 当然，前提是你配置项没开启 --strictNullChecks

//null和undefined
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。
// 如何理解子类型？ 其实就是可以吧undefined和null赋值给其他类型，void是不行的

let num:number = undefined;
let empty:number = null;
let u:undefined
let num1:number = u;
// 这都是不会报错的

// 而void类型是不能赋值给其他类型的
// let v:void;
// let num3:number = v;
//Type 'void' is not assignable to type 'number'.

//any  任意值类型
// any用来表示运行赋值为任意类型

// 怎么理解任意类型？
// 如果是一个普通的类型，在赋值的过程中改变类型是不会TS允许的。
let myMoney:string = '100元'
// myMoney  = 100;
// Type 'number' is not assignable to type 'string'.

// 但如果是any类型，则被运行被赋值为任何类型。
let myAny:any = 'evenYou';
myAny = 250;

// any的属性和方法
// 在any上访问任何属性和调用任何方法都是允许的，且返回内容都是any类型
// 访问任何属性
let anyThing:any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstNmae)

// 调用任何方法
// let anyThing: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');

// # 注意 如果你在声明变量的时候没有指定类型，那么TS会将这个变量作为any类型

// any类型和一定要慎用，毕竟学习TS就是为了解决JS弱类型 类型检查困难的问题，
// 如果不加约束的使用any，相当于就放弃了类型检查，和直接写JS没啥区别。