class Product {
    constructor(n, p) {
        console.log(this);
        this.price = p;
        this.name = n;
    }

    displayProduct() {
        console.log("Display Product", this.name, this.price);
    }

    displayArrowFunction = () => {
        console.log("Display Arrow Product", this.name, this.price);
    }
}

const p = new Product("Iphone11", "12222");
p.displayProduct();
p.displayArrowFunction();
// displayProduct();

const object = {
    x: 100,
    greet: greet = () => {
        console.log("x is:", this.x);
    }
}

object.greet();

function Product(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;
    this.displayProduct = function displayProduct() {
        console.log(this.name, this.price, this.description);
    }
}

const p1 = new Product("Iphone12", 12200, "Apple product");
p1.displayProduct();

const product = { name: "Iphone 14 prp", price: 125000, category: "Mobiles" };
const { name, price, category } = product;

class Events {
    constructor(bookingDate, eventType) {
        this.bookingDate = bookingDate;
        this.eventType = eventType;
    }

    bookEvent() {
        console.log(`Event ${this.eventType} , booked for date: ${this.bookingDate}`);
    }
}

class Movie extends Events {
    constructor(movieDate, eventType) {
        super(movieDate, eventType);
        this.movieDate = movieDate;
        this.eventType = eventType;
    }
}

let movie = new Movie("120902", "Movie");
movie.bookEvent();

// Q.
// Imagine you are building a small system for transport booking.
// Create a base class called Transport that stores a date and a type of transport (like “Bus”, “Train”, “Flight”). It should have a method bookTransport() that prints a booking confirmation message.
// Then create a subclass Flight that extends Transport. Apart from the base properties, it should also store the airlineName.
// Finally, create an instance of Flight and call the booking method.

class Transport {
    constructor(date, transportType, extraInfo) {
        this.bookingDate = date;
        this.transportType = transportType;
        this.extraInfo = extraInfo;
    }

    bookTransport() {
        console.log(`Congratulations your transport ${this.transportType}  is booked for ${this.bookingDate} ${this.extraInfo}`)
    }
}

class Flight extends Transport {
    constructor(bookingDate, transportType, extraInfo) {
        super(bookingDate, transportType, extraInfo);
    }
}

class Bus extends Transport {
    constructor(bookingDate, transportType, extraInfo) {
        super(bookingDate, transportType, extraInfo);
    }
}

const f = new Flight("120825", "Flight", "With Indigo");
f.bookTransport();

const b = new Bus("120825", "Bus", "With Abhibus");
b.bookTransport();


// You need to build a simple library system using constructor functions and prototypes.
// Create a constructor function Book that takes title and author.
// Add a method getDetails() on its prototype that returns a string like:
// "Book: Atomic Habits, Author: James Clear"
// Now create another constructor function EBook that inherits from Book.
// EBook should also take a fileSize (in MB).
// Override getDetails() to include file size, like:
// "Book: Atomic Habits, Author: James Clear, File Size: 2MB"
// Finally, create one normal Book object and one EBook object, and call getDetails() on both.
function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.getDetails = function getDetails() {
    console.log(`Book: ${this.title} , Author: ${this.author}`)
}

function EBook(title, author, fileSize) {
    Book.call(this, title, author);
    this.fileSize = fileSize;
}

EBook.prototype = Object.create(Book.prototype);
EBook.prototype.constructor = EBook;


EBook.prototype.getDetails = function getDetails() {
    console.log(`Book: ${this.title} , Author: ${this.author} , File Size: ${this.fileSize}`)
}

const book = new Book("Atomic Habits", "James Clear");
book.getDetails();

const ebook = new EBook("Atomic Habits", "James Clear", "5MB");
ebook.getDetails();

// Create a prototype chain where:
// Vehicle has a method start() that logs "Starting vehicle...".
// Car inherits from Vehicle and overrides start() to log "Starting car...".
// ElectricCar inherits from Car and overrides start() to log "Starting electric car...".
// 👉 Use constructor functions + prototypes (not class).
// 👉 At the end, show that:
// An instance of ElectricCar can access its own start()
// It is also an instance of both Car and Vehicle

function Vehicle() { }

Vehicle.prototype.start = function () {
    console.log("Starting vehicle...");
};

function Car() { }
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.start = function () {
    console.log("Starting car...");
};

function ElectricCar() { }
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.start = function () {
    console.log("Starting electric car...");
};

const vehicle = new Vehicle();
vehicle.start(); // Starting vehicle...

const car = new Car();
car.start(); // Starting car...

const electricCar = new ElectricCar();
electricCar.start(); // Starting electric car...

console.log(electricCar instanceof ElectricCar); // true
console.log(electricCar instanceof Car); // true
console.log(electricCar instanceof Vehicle); // true


// Create a constructor function Shape with a method getArea() (which just returns 0 by default).
// Then, create two child constructor functions:
// Rectangle (with width and height)
// Circle (with radius)
// Override the getArea() method in each child to calculate their respective areas.
// Finally, demonstrate the following:
// Create one rectangle and one circle.
// Show that both inherit from Shape.
// Call their getArea() methods.

function Shape() {

}

Shape.prototype.getArea = function getArea() {
    return 0;
}

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function getArea() {
    return this.width * this.height;
}

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getArea = function getArea() {
    return 3.14 * this.radius * this.radius;
}

let s = new Shape();

let r = new Rectangle(12, 12);
let result1 = r.getArea();
console.log(result1);

let c = new Circle(12);
let result2 = c.getArea();
console.log(result2);

console.log(r instanceof Shape);
console.log(c instanceof Shape);