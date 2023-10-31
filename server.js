const express = require('express')
const app = express()
const port =300

app.get('/',(req,res)=>{
    res.send('hello')
})
app.get('/about',(req,res)=>{
    res.send('hello world')
})
app.get('/contact',(req,res)=>{
    res.send('contact heloo')
})
app.listen(port,() =>{
    console.log('server started on port 3000')
 })