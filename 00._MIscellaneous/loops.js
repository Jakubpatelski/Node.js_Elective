const rocks = [
    { name: 'Pet Pet', age: 2 },
    { name: 'led Zepplin', age: 50 },
    { name: 'Dwayne Johnson', age: 47 },
    { name: 'Neptune', age: 100_000_000_000 }
]

//loop methods: map, filter, find, redeuce, sort, forEach
//always use loop methods in modern js, for loops are good for counting fingers
// Argfument 1: Brevity
// Argfument 2: Clarity(loop me)

//assignment make all the rocks one year older and save the value to rocksAgedOneYear


const rocksAgedOneYear = rocks.map(a => a.age + 1)
console.log(rocksAgedOneYear)
const rocksAgedOneYear2 = rocks.map(({ name, age }) => ({ name : name, age: age +1 }))
console.log("xxxxxx")
const rocksAgedOneYear3 = rocks.map(rock => ({ ...rock, age: rock.age + 1 }))

console.log(rocksAgedOneYear2)


//this mutates the data but gives the answear
//side effect
// const rocksAged = rocks.map(rock => {
//     rock.age++
//     return rock
// })

console.log('------------')
const rocksAged = rocks.map(rock => {
    // return { name: rock.name, age: rock.age + 1 }
    return { ...rock, age: rock.age + 1 } // this is thebest solution
    // return { ...rock
    })
console.log(rocksAged)

// console.log(rocksAged)



console.log('------------')

const evenAge = rocks.filter(rock => rock.age % 2 === 0)
console.log(evenAge)

