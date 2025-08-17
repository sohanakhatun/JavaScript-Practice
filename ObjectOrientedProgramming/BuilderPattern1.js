// Why Builder Pattern
// when there are let's say 15 20 parameters to be passed into the constructor of an object, it becomes difficult for us to remember which parameter goes where. And the code becomes very messy and unreadable. To make it sustainable we can use getter setter.
class Product {
    #name;
    #description;
    #price;
    #category;
    #rating;

    constructor(name, description, price, category, rating) {
        if (!name || !description || !price || !category || !rating) {
            throw Error("All fields must be filled");
        }
        this.#name = name;
        if (price > 0 && typeof (price) === "number") {
            this.#price = price;
        }
        this.#description = description;
        this.#category = category;
        this.#rating = rating;
    }

    getPrice() {
        return this.#price;
    }

    setPrice(price) {
        if (price > 0 && typeof (price) === "number") {
            this.#price = price;
        }
    }
}

// SOLUTION 1 -----------------
//So , one solution that comes in mind is that we avoid using the custom constructor and just use the getter setter method.
class Product {
    #name;
    #description;
    #price;
    #category;
    #rating;

    getPrice() {
        return this.#price;
    }

    setPrice(price) {
        if (price > 0 && typeof (price) === "number") {
            this.#price = price;
        }
    }
}

// But this approach also has a flaw , if we want to have some validation for the object at the time of creation we will not be able to do that , we will have to give that validation in the getter settter functions which is run after the object is created , now if the validation fails then the object is just lying around in the memory which is not good .

// Example : We have a condition that the name of the products should be unique.
let i = new Product();
i.setName('iPhone 11'); // This will create a product with name as iPhone 11 but what if we want to check whether the name already exists or not ? 
// Let's say we already have a product named iPhone 11 so we don't want to allow another product with same name. So we need to validate the name before creating the object.Since constructor is not available here we wont be able to do that. Hence the validation will be checked only after the object is created. Now the validation fails and hence the object is just lying around in the memory which is not good.


// SOLUTION 2 -----------------
// Builder Pattern...

class Product {
    constructor(builder) {
        this.name = builder.name;
        if (builder.price > 0 && typeof builder.price === 'number') {
            this.price = builder.price;
        } else {
            return {};
        }
        this.description = builder.description;
        this.category = builder.category;
        this.price = builder.price;
        this.rating = builder.rating;
    }
}

const p = new Product({
    name: "iPhone",
    price: 599,
    description: "The iPhone is a smartphone developed by Apple",
    category: "Electronics",
    rating: 4.8,
})

// This approach solves both of our problems.
// Problem 1 : Validation problem - We can add validations inside the constructor itself. Hence during object creation we can validate all the properties and if any property fails the validation then we can simply return empty object instead of throwing error.
// Problem 2 : Messy Code - Since we are passing objects to the constructor instead of individual values , the code becomes much cleaner and readable. We dont have to worry about remembering the order of arguments.

// Solution 3 -------------------
// Builder Pattern code improvement...
class Product {
    constructor(builder) {
        this.name = builder.name;
        // validations before object creation
        if (builder.price > 0 && typeof builder.price === 'number') {
            this.price = builder.price;
        } else {
            return {};
        }
        this.description = builder.description;
        this.category = builder.category;
        this.price = builder.price;
        this.rating = builder.rating;
    }

    static get Builder() {
        class Builder {
            constructor() {
                this.name = "";
                this.price = 0;
                this.description = "";
            }

            setName(incomingName) {
                this.name = incomingName;
                return this;
            }
            setPrice(incomingPrice) {
                this.price = incomingPrice;
                return this;
            }
            setDescription(incomingDescription) {
                this.description = incomingDescription;
                return this;
            }

            build() {
                return new Product(this); // this will create a new instance of the Product class.
            }
        }
        return Builder; // Builder is returned as a class.
    }
}

const p1 = new Product.Builder();

// Why did we make Builder() static?
// Answer: If we didnt make it static then it would be associated to an object , hence to use the builder function that will create the actual product object we would have to create another object. 
// so , to create one object we would have to create one more object doesnt make any sense. hence we used static keyword. As static functions are directly associated to the class rather than the object.

const p2 = Product.Builder(); // this will throw an error as we are not using new Keyword and trying to call the constructor of the class Builder.
// const p3 =  Product.Builder; // this will work fine as we are not calling the constructor of the class Builder but rather accessing the class itself.
// Builder() is a getter function which returns a class called Builder().
const iphone = p1.setName("iPhone").setPrice(699).setDescription("This is a great phone.").build();
console.log(iphone);