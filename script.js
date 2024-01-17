// Base class Person
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for age
    set age(value) {
        this._age = value;
    }

    // Method to introduce the person
    introduce() {
        console.log(`Hello, my name is ${this._name} and I am ${this._age} years old.`);
    }
}

// Subclass Student extending Person
class Student extends Person {
    // Method specific to Student
    study() {
        console.log(`${this._name} is studying.`);
    }
}

// Subclass Teacher extending Person
class Teacher extends Person {
    // Method specific to Teacher
    teach() {
        console.log(`${this._name} is teaching.`);
    }
}

// Example usage
const person = new Person("John Doe", 30);
console.log(person.name); // Output: John Doe
console.log(person.age); // Output: undefined (age is not directly accessible)
person.age = 31; // Using the setter
person.introduce(); // Output: Hello, my name is John Doe and I am 31 years old.

const student = new Student("Alice", 20);
student.study(); // Output: Alice is studying.
student.introduce(); // Output: Hello, my name is Alice and I am 20 years old.

const teacher = new Teacher("Mr. Smith", 40);
teacher.teach(); // Output: Mr. Smith is teaching.
teacher.introduce(); // Output: Hello, my name is Mr. Smith and I am 40 years old.

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
