//possible because of hoisting - calling before declarating
console.log(random(0,10))
function random (min, max) {
    return Math.floor(Math.random() * (max-min + 1) - min)
}

//anonymous funcion without a name
const randomAnonymousFunction = function random (min, max) {
    return Math.floor(Math.random() * (max-min + 1) - min)
}

console.log(randomAnonymousFunction(0,10))

const randomArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max-min + 1) - min)
}

console.log(randomAnonymousFunction(0,10));

const randomArrowFunctionCompact = (min, max) => Math.floor(Math.random() * (max-min + 1) - min)
console.log(randomArrowFunctionCompact(0,10))

//callback function
function genericActionPerformer(genericAction, genericName) {
    //do stuff...
    return genericAction(genericName)
}

const subtract = (name) => `${name} is subtracting`
const walk = (name) => `${name} is walsking`


console.log(genericActionPerformer(subtract, "tobias"))
console.log(genericActionPerformer(walk, "Nicolas"))


/*
    read: Andrea
*/

// const reading = (name) => `${name} is reading`

console.log(genericActionPerformer((name) => `${name} is reading`, 'Andrea'))