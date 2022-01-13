// const name = "Nicolas",
//     age = 24,
//     gender = "male";

interface Human {
    name: String;
    age: number;
    gender: String;
}

const person = {
    name: "nicolas",
    age: 22,
    gender: "male"
};

// const sayHi = (name: string, age: number, gender: string): string=> {
//     return `Hello ${name}, you are ${age}, you are a ${gender}`;
// };

const sayHi = (person: Human): string=> {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

// console.log(sayHi("Nicolas", 24, "male"));
console.log(sayHi(person));

export {};
//이걸 하지않으면 name을 선언할 수 없다고 버그가 나올것임