import express from 'express'
import bodyParser from "body-parser"//take incoming post request bodies
import usersRoutes from "./routes/users.js"

const app=express();
const PORT=5001;

app.use(bodyParser.json()); //javascript object notation, common practice in sending or receiving data to a rest API

app.use('/users',usersRoutes) 
//res-respond,req-request


app.get("/",(req,res)=>res.send("Hello from Homepage."))

app.listen(PORT,()=>console.log(`Server Running on port :http://localhost:${PORT}`))




