/*
    javascript is a single-threated

    Examples:
    Fetching over a network
    Many / Heavy calculations
    Reading / writing to files
    Cryptogrpahic functions
    Databases

    solutio1:
    Callbacks
    Con: Callback hell, Pyramid of doom


    solution2: Promises
      two states:
      -pending
      -fulfilled
        -rejected
        -resolved



*/


new Promise((resolve, reject) => {
    setTimeout(() => {
        try{
            throw Error
            resolve("yaaay")
        } catch {
            reject("naaau")
        }
        
    }, 3000)
})
.then(successMessage => console.log("Success message:", successMessage))
.catch(errorMessage => console.log("Error message:", errorMessage));


function celebrate(){
    return new Promise((resolve, reject) => {
        resolve("banzai")
    })
}

celebrate()
.then(celebrateMessage => console.log(celebrateMessage));


function somethingGoodSomethingBad(){

    return new Promise((resolve, reject) => {
        let responseFromServer = true
     setTimeout(() => {
 
        try{
            throw Error
            resolve("good")
        }catch{
            reject("bad")
        }
     }, 1000)

    })
}

somethingGoodSomethingBad()
.then(goodMessage => console.log(goodMessage))
.catch(badMessage => console.log(badMessage));

// IIFE
(async function getGoodOrBadMessage() {
    try {
        const somethingGoodSomethingBadMessage = await somethingGoodSomethingBad();
        // const celebrationMessage = await celebrate("All of us");
        const celebrationMessage = await celebrate();
        console.log(somethingGoodSomethingBadMessage, celebrationMessage);
    } catch {

    }
})()


function parallel() {
    Promise.all([somethingGoodSomethingBad(), celebrate("All of us")])
}