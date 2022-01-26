// 对象的类型--接口
// 不理解🤔？，别急往下看！

// 什么是接口§
// 其实很好理解，我们日常生活中就接触到各种接口，(HDMI,DP,Type-C,usb...), 我举一个非常接地气的例子: 🔌电源接口，
// 现实生活中的电器要想供电你就只能做这样的接口，2头的就2头的，3头的就3头的，多了少了都插不进。

// 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
// TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

interface Person{
    name:string;
    age:number;
}

let jack:Person={
    name:'Jack',
    age:25
};

// 这里我们定义了一个接口Person，接着定义了一个对象变量jack，它的类型是Person。这样，我们就结束了jack的形状必须和接口Person一致

// 接口和构造函数一样都有个不成文规定，就是首字母大写。 不成文的意思就是你可以这么做也不可以不这么做，但最好这么做😄
// 就相当于一种规范，如果你见过C#或者Java定义的接口，它们可能还会让接口名以I为开头，就像这样
// public interface IServiceProvider
// public interface IFormatable

interface Animal{
    type:string
    price:number;
}
let Cat:Animal={
    type:'Jack',
    //少了price属性 Property 'price' is missing in type '{ type: string; }' but required in type 'Animal'.
    age:3,
    // 多了age属性 Object literal may only specify known properties, and 'age' does not exist in type 'Animal'.
};


// 可选属性、任意属性、只读属性
