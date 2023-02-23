const spaaceships = [ 
    { name: 'Chinese Weather Baloon', isPriceless: true, cost: 1_000_000 },
    { name: undefined, type: 'UFO',  isPriceless: false, cost: Number.MAX_SAFE_INTEGER },
    { name: 'Apollo 13', versionNumber: 13, isPriceless: true, cost: 2_000_000 }
]




let spaceshisWithOwners = spaaceships.map(spaaceship => {
    return {... spaaceship, owner: 'China'}
})

console.log(spaceshisWithOwners)
console.log('-----------')

const notPricless = spaaceships.filter(spaceship => spaceship.isPriceless != true)

console.log(notPricless)

const pricless = spaaceships.filter(spaceship => spaceship.isPriceless === true)
console.log(pricless)

// find a spacship taht costs less than 2 mln


const lessThan2Milions = spaaceships.filter(spaceship => spaceship.cost <= 2_000_000)
console.log(lessThan2Milions)


const lessThan2 = spaaceships.find(spaceship => spaceship.cost <= 2_000_000)
console.log('---------')
console.log(lessThan2)