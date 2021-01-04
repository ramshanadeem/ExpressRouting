const express = require ("express");
const app = express();
const Path=require('path')
const bodyParser=require('body-parser')
const PORT = 4000
app.use(bodyParser.urlencoded({extended:true}))

// app.get("/",(req,res)=> {
//     res.send("home")
// })
app.get('/', (req, res) => {
     res.sendFile(Path.join(__dirname,'public','Home.html'))
 })
 app.get('/aboutus', (req, res) => {
    res.sendFile(Path.join(__dirname,'public','About.html'))
})

app.get('/contactus', (req, res) => {
    res.sendFile(Path.join(__dirname,'public','Contact.html'))
})


app.use(express.static(Path.join(__dirname,'public')))

app.get("/signup",(req,res)=>{
    res.sendFile(Path.join(__dirname,'registration','signup.html'))
})
app.post("/signup",(req,res)=>{
    res.send(req.body)
})
app.listen(PORT, (req, res) => {
    console.log('Running at',PORT)
})