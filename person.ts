//Abstraction (consider essential and avoid unnecessary details)

class Person1{
    readonly name: string;
    readonly age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
        }
    run(){
        return `I am running`;
    }
    talk(){
        return `I m ${this.age} years old`;
    }
}
const pallavi = new Person1('Pallavi',30);
console.log(pallavi.talk());
console.log(pallavi.run());

// model practice for abstraction

class Book{
    readonly color : string;
    readonly pages : number;
    constructor(color: string, pages:number){
        this.color = color;
        this.pages = pages;
    }
    Write(){
        return `I hava a ${this.color} book with pages ${this.pages}`;
    }
}
const mybook = new Book ('Blue', 200); 
mybook.Write();

// Encapsulation (confining some variable only to the class)
// here it is hearrate is made private

class Person {
    readonly name: string;
    readonly age: number;
    private heartRate: number;
   
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
      this.heartRate = 72;
    }
   
    private increaseHeartRate() {
      this.heartRate += 20;
    }
   
    run() {
      this.increaseHeartRate();
      return 'I am running';
    }
   
    talk() {
      return `I'm ${this.age} years old`;
    }
  }
   
  const priya = new Person('Priya', 40);
  console.log(priya.talk());
  console.log(priya.run());

// Inheritance (Inheriting properties from parent object

class Mammal {
    readonly age: number;
    constructor(age: number) {
      this.age = age;
    }
    run() {
      return "I'm running";
    }
  }
   
  class Person2 extends Mammal { // extends (Parent object should be added)
    readonly name: string;
    readonly age: number;
   
    constructor(name: string, age: number) {
      super(age); //imp point
      this.name = name;
      this.age = age;
    }
    // rewriting the run function derived from parent Mammel
    // This is called polymorphism
    
    run(){
        return `I am running`;
    }
    talk() {
      return `I'm ${this.age} years old`;
    }
  }
   
  const priya1 = new Person2('Priya', 40);
  console.log(priya1.talk());
  console.log(priya1.run());