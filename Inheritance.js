// Single Inheritance

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog('Buddy');
myDog.speak(); 

// --------------------------------------------------------------------------------------------

// Multilevel Inheritance 

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks.`);
    }
}

class Bulldog extends Dog {
    constructor(name, breed) {
        super(name, breed);
    }

    snore() {
        console.log(`${this.name} snores loudly.`);
    }
}

const myBulldog = new Bulldog('Rex', 'Bulldog');
myBulldog.speak();  // Output: Rex makes a sound.
myBulldog.bark();   // Output: Rex barks.
myBulldog.snore();  // Output: Rex snores loudly.

//----------------------------------------------------------------------------------------

//Hierarchical Inheritance

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

const myNewDog = new Dog('Buddy');
myNewDog.speak();  // Output: Buddy barks.

const myCat = new Cat('Whiskers');
myCat.speak();  // Output: Whiskers meows.

//----------------------------------------------------------------------------------------

// Multiple Inheritance

// Mixin 1
const CanRun = {
    run() {
        console.log(`${this.name} is running!`);
    }
};

// Mixin 2
const CanBark = {
    bark() {
        console.log(`${this.name} is barking!`);
    }
};

// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }
}

// Child class that uses mixins to simulate multiple inheritance
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}

// Use Object.assign to mix behavior
Object.assign(Dog.prototype, CanRun, CanBark);

const mydog = new Dog('Buddy');
mydog.run();  // Output: Buddy is running!
mydog.bark(); // Output: Buddy is barking!

