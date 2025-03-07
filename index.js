// Define the initial cats array
const cats = ["Milo", "Otis", "Garfield"];

// 1️⃣ Destructive Functions (Modify the original array)
function destructivelyAppendCat(name) {
    cats.push(name); // Appends a cat to the end of the array
}

function destructivelyPrependCat(name) {
    cats.unshift(name); // Prepends a cat to the beginning of the array
}

function destructivelyRemoveLastCat() {
    cats.pop(); // Removes the last cat from the array
}

function destructivelyRemoveFirstCat() {
    cats.shift(); // Removes the first cat from the array
}

// 2️⃣ Non-Destructive Functions (Return a new array, leaving `cats` unchanged)
function appendCat(name) {
    return [...cats, name]; // Creates a new array with the cat added at the end
}

function prependCat(name) {
    return [name, ...cats]; // Creates a new array with the cat added at the beginning
}

function removeLastCat() {
    return cats.slice(0, -1); // Creates a new array without the last cat
}

function removeFirstCat() {
    return cats.slice(1); // Creates a new array without the first cat
}
