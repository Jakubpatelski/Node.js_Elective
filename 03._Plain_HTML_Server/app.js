const express = require('express')
const app = express()

//public folder contains static files,
//  its for security it tell that files in public folder can be accesed by client
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/frontpage/frontpage.html')
})

app.get('/tanks', (req, res) => {
    res.sendFile(__dirname + '/public/tanks/tanks.html')
})

const PORT = 8080

app.listen(PORT, (error) => {
    if(error){
        console.log(error)
        return;
    }

   console.log("Port is running on port,", PORT) 
})

