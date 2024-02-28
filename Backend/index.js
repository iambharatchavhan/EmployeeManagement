const express = require('express')
const app = express()
const connect = require('./config/database')
const employee = require('./routes/empRoutes')


require('dotenv').config()
const port = 3000

app.use(cors({
 origin:[""],
  methods:["POST", "GET", "PUT", "DELETE"],
  credentials: true
   
}));



app.use(express.json())


app.use('/api/v1/',employee)


app.get('/',(req,res) => {
    res.send("hello world")
})

app.listen(port,()=>{
    console.log(`app is running on port number ${port}`)
})

//Calling to database
connect();


