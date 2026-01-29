// const a = 20;
// const b = 30;

// console.log(`The sum of a and b is = ${a+b}`)


// const student = {
//     name:'amir shah',
//     rollNo: 439,
//     section:'G',
//     university:'University of Agriculture Peshawar'
// }


// for (const value of Object.values(student)) {
//     console.log(value)
// }

// for (const element of Object.values(student)) {
//     console.log("The object values access through the for of loop =   " + element)
// }



// console.log(student.name)
// console.log(student.rollNo)
// console.log(student.section)
// console.log(student.university)

// const student = {
//     fullName: 'Amir shah',
//     marks:95,
//     printMarks(){
//         console.log('Marks = ', this.marks);
//     }
// }

// console.log(student.fullName)
// console.log(student.printMarks());


// const student = {
//     fullName: 'Amir shah',
//     marks:90,
//     greet:function(){
//         console.log('Hello '+ this.fullName)
//     }
// }


// console.log(student.greet())


// const calculator ={
//     add:function (a, b){
//         return a + b;
//     }
// }

// console.log(calculator.add(12,20));

// class toyotaCar {
//     start(){
//         console.log('The car started ')
//     }

//     stop(){
//         console.log('The car Stopped')
//     }
// }

// let myCar = new toyotaCar();
// // myCar.start();
// myCar.stop();


// class car {
//     brand
//     color
//     price
//     speed
//     fuelType
// } 


// let myCar = new car();

// myCar.brand ='Toyota'
// myCar.color = 'black'
// myCar.price = 20 ;
// myCar.speed =160
// myCar.fuelType ='Petrol'


// console.log(myCar)


class person {
    constructor(name, age){
        this.name = name;
        this.age = age;

    }
}


const person1 = new person('amir shah', 25);

console.log(person1)

const person2 = new person('Huzaifa Khan', 25);

console.log(person2)



// class brandCar {
//     constructor(brand, color){
//         this.brand = brand;
//         this.color = color;
//     }
// }


// const toyotaCar = new brandCar('Toyota', 'Black');
// const fortunerCar = new brandCar('Fortuner', 'white');

// console.log(car1);
// console.log(car2);



// Level 1: Basic Practice

// Car Properties

// Create a Car class with brand, color, speed as properties.

// Create 2 car objects and print their properties.


// class Car{
//     brand 
//     color 
//     speed 

// }



// let CarDetails = new Car();
// CarDetails.brand = 'Fortuner';
// CarDetails.color = 'Red';
// CarDetails.speed = 200;

// console.log(CarDetails)




// Student Info

// Create a Student class with name, age, grade.

// Create an object and print:
// "Student <name> is <age> years old and in grade <grade>".


// class Student {
//     name 
//     age 
//     grade

// }

// let StdData = new Student();
// StdData.name = 'Daniyal'
// StdData.age = 20
// StdData.grade = 'A'

// console.log(StdData)


// Empty Constructor
// Create a class Book with title and author properties.
// Don’t use a constructor yet.
// Assign values to an object manually and print it.

// class Book {
//     title
//     authorName
//     authorAge

// }


// let bookDetails = new Book();

// bookDetails.title = 'Jannat'
// bookDetails.authorName = 'Meran shah'
// bookDetails.authorAge = 40

// console.log(bookDetails)

class brandCars {
    constructor(brand , color , speed){
        this.brand = brand;
        this.color = color;
        this.speed = speed;

    }
}

let carDetails1 = new brandCars("Toyota", 'Red', 200);
let carDetails2 = new brandCars("Marsares", 'black', 220);
let carDetails3 = new brandCars("lankruser", 'black', 240);


class Parent {
    greet(){
        console.log('hello i am amir shah and i am calling from parent class')
    }
}


class Child extends Parent {

}

let forChild = new Child();

console.log(forChild.greet())


class persons {
    constructor(){
        console.log('hello i am constructor from parent class')
    }
    eat(a){
        console.log(a+' Eating the meal')
    }
    sleep(){
        console.log('Sleeping')
    }

}


class Engineer extends persons {
    constructor(branch){
        console.log('child constructor ')
        super();
        this.branch = branch;
    }
        work(){
        console.log('solver problems , building something ')
}
}

class Doctor {
     doctorProperties(){
        console.log('Doctor ')
     }
}


let engineerData = new Engineer('Software');


class User {
    constructo(name , email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(`Website Data`)
    }
}



const users ={
    userName:'amir shah',
    userEmail:'amir@gmail.com',
    userPassword:'amir123',
    userfullDetails:function(){
        console.log(this.userName,'\n' ,this.userEmail,'\n', this.userPassword)
    }
}

console.log(users.userfullDetails());

class Admin extends User {
    manageUsers(){
        console.log('Managing Users')
    }
}

const adminData = new Admin('Admin User', 'admin@example.com');

