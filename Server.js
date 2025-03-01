const express=require('express')
const app=express()
const workoutRoutes=require("./routes/workout")
const mongoose=require('mongoose')
require('dotenv').config()
const cors= require('cors')
app.use(cors()) 
async function connectDB() {
    try {
        // connect to db
        await mongoose.connect(process.env.MONGO_URI)

        // listen to port
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening for requests on port',process.env.PORT)
        })
    } catch (error) {
        console.log(error)
    }
}
connectDB()
// app.get('/', (req,res)=>{
//     res.json({mssg: 'Welcome to the app'})
// })
app.use(express.json())
app.use('/api/workouts',workoutRoutes)

// app.listen(4000,()=>{
// console.log('listening on port 4000')
// })