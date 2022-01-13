// const name = "Nicolas",
//     age = 24,
//     gender = "male";

const sayHi = (name: string, age: number, gender: string): string=> {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

// sayHi(name, age, gender);
console.log("Nocolas", 444, "male");

export {};
//이걸 하지않으면 name을 선언할 수 없다고 버그가 나올것임