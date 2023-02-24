const express = require('express')
const app = express()

//public folder contains static files,
//  its for security it tell that files in public folder can be accesed by client
app.use(express.static('public'))

const tanks = [
    { name: 'Leopald', nationality: 'Germany', year: 1950 },
    { name: 'Tiger',  nationality: 'Germany', year: 1942 },
    { name: 'M1 Abrahams', version: 'M1' }
]

let visitorCount = 0

//pages
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/frontpage/frontpage.html')
})

app.get('/tanks', (req, res) => {
    res.sendFile(__dirname + '/public/tanks/tanks.html')
})

app.get("/api/tanks", (req, res) => {
    res.send({ tanks: tanks })
})


app.get('/visitors', (req, res) => {
    res.sendFile(__dirname + '/public/visitors/visitors.html')
})

// API
app.get('/api/visitors', (req,res) => {
    res.send({ data: visitorCount })
})

app.put('/api/visitors', (req,res) => {
    res.send({ data: ++visitorCount })
})


const PORT = 8080

app.listen(PORT, (error) => {
    if(error){
        console.log(error)
        return;
    }

   console.log("Port is running on port,", PORT) 
})

