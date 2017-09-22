function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";

Dog.prototype.bark = function () {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};

Dog.prototype.run = function () {
    console.log("Run!");
};

Dog.prototype.wag = function () {
    console.log("Wag!");
};

Dog.prototype.sitting = false;

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

spot.bark = function () {
    console.log(this.name + " says WOOF!");
};

var barnaby = new Dog("Barnaby", "Basset Hound", 55);

Dog.prototype.sit = function () {
    if (this.sitting) {
        console.log(this.name + " is already sitting");
    } else {
        this.sitting = true;
        console.log(this.name + " is now sitting");
    }
};

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

barnaby.sit();
barnaby.sit();
spot.sit();
spot.sit();

console.log(spot.hasOwnProperty("species"));
console.log(fido.hasOwnProperty("species"));

console.log(fido.hasOwnProperty("sitting"));
fido.sitting = true;
console.log(fido.hasOwnProperty("sitting"));

console.log(fluffy.hasOwnProperty("sitting"));