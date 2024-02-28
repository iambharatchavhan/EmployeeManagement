const mongoose = require('mongoose')
require('dotenv').config()

const connect = async () => {
    try{

      await mongoose.connect("mongodb+srv://bharatchavhan1026:98LpOED7Ln1bSDaN@cluster0.rchyzeq.mongodb.net/EmployeeData",{})
      console.log("Database connection successfully")

    }catch(error){
        console.log("message:",error.message)
        console.log("Database connection failed")
        
    }
}


module.exports = connect;
