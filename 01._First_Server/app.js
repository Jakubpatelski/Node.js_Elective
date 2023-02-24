


const req = require('express/lib/request')
const res = require('express/lib/response')
// const app = require('express')()
// import { Express } from 'express';
const express = require('express')
const app = express()

//middleware, every request that comes in will first go through this express json middleware
//  which will convert the body to json
// req -> middleware -> response
app.use(express.json())

//route(entire thing)
//HTTP method
// / endpoint     callback function
app.get('/', (req, res) => {
    res.send({message: 'Our first route'})
})

app.listen(8080)

let bicycleSpins = 0
app.get('/spinthebicyccle', (req, res) => {
    bicycleSpins += 1
    res.send({message: `People have spun the bicyclce wheel ${bicycleSpins} times`})

})

let dinosaur = 'Triceratops'

app.get('/kickdinosaur', (req, res) => {
    res.send({message: `The kicked dinosaur ${dinosaur} says ow ow ow test`})
})

app.get('/about', (req, res) => {
    res.send(`
        <h1>About</h1>
        <h3>This is my about Page.</h3>

    `)
})
 
// /bat?adjective=spooky  http://localhost:8080/bat?adjective=spooky
app.get('/bat', (req, res) => {
    console.log(req.query);
    res.send({ message: `The bat is ${req.query.adjective}`})
    // res.json({message: "hahah"})

})


// /bottle/large
app.get('/bottle/:bottleSize', (req, res) => {
        console.log(req.params)
    res.send({ bottleSize: req.params.bottleSize });
})

app.post('/package', (req, res) => {
    console.log(req.body)
    res.send({ message: req.body});
})

console.log(new Date())
console.log(Date())
console.log(Date.now())
// Time
app.get('/time/time', (req, res) => {
    res.send({ 
        timeUTC: new Date(),
        localTime: Date(),
        unixTimestamp: Date.now()
    })
})

const days = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday']
app.get('/time/day', (req, res) => {
   
    // res.send( { data: days[new Date().getDay()] })
    // toLocaleString() method returns a string that represents the date and time in the user's local language and format.
    // en-US' specifies the locale (language and country) to use for formatting the string
    // { weekday: 'long' } specifies the options for formatting the date and time string. 
    // In this case, we're using the weekday option with a value of 'long'. 
    // This tells the toLocaleString() method to include the full name of the weekday("Monday")
    res.send({ data: new Date().toLocaleString('en-US', { weekday: 'long'})})
})

const months = ['January', 'February', 'March']

app.get('/time/month', (req, res) => {
    res.send({ data: months[new Date().getMonth()] })
})