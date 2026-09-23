
// // const dns = require("dns")
// // const app = express()

// // dns.setServers(["1.1.1.1","8.8.8.8"])
// // app.get("/welcome", (req, res) => {
// //     res.send("Welcome back");
// // });


// // connectDB()

// // app.listen(3000, () => {
// //     console.log("listening on port 3000");
// //     console.log("http://localhost:3000/welcome");
// // });
// const express = require("express")
// const connectDB = require("./config/db")
// const dotenv = require("dotenv")
// const dns = require("dns")
// const courseRoute=require("./routes/courseRoutes")
// const authRoute=require("./routes/authRoutes")
// const app = express()

// require("dotenv").config();

// app.use(express.json())
// dotenv.config()
// dns.setServers(["1.1.1.1","8.8.8.8"])

// app.use("/api/courses",courseRoute)
// app.use("/api/auth",authRoute)
// app.get("/welcome", (req,res)=>{
//     res.send("Welcome Back!")
// })


// connectDB()

// app.listen(3000, ()=>{
//     console.log("Listening to the PORT")
// })
const express = require("express")
const connectDB = require("./config/db")
require("dotenv").config();
const dotenv = require("dotenv")
const app = express()
const dns = require("dns")
const courseRoute = require("./routes/courseRoutes")
const authRoute = require("./routes/authRoutes")


app.use(express.json())
dotenv.config()
dns.setServers(["1.1.1.1","8.8.8.8"])
app.use("/api/course",courseRoute)
app.use("/api/auth",authRoute)
app.get("/welcome",(req,res)=>{
    res.send("Welcome back")
})



app.listen(3000,()=>{
    console.log("Listening to port.....")
})

connectDB()