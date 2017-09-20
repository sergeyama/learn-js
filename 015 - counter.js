function makeCounter() {
    var count = 0;

    function counter() {
        count = count + 1;
        return count;
    }
    return counter;
}

var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());

function makePassword(password) {
    return function guess(passwordGuess) {
        return (passwordGuess === password);
    }
}
var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));

function multN(n) {
    return function multBy (m) {
        return n * m;
    };
}
var multBy3 = multN(3);
console.log("Multiplying 2:" + multBy3(2));
console.log("Multiplying 3:" + multBy3(3));

function makeCounter2() {
    var count = 0;
    return {
        increment: function () {
            count++;
            return count;
        }
    };
}
var counter = makeCounter2();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());