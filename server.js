import express from 'express'
import { createUser, updateUser, fetchUser, showUser } from './Controller/UserController.js';

const app= express();


const PORT= process.env.PORT || 8000

app.get("/", (req,res)=>{
    return res.send("Hi everyone")})


//routes defining 
// import routes from './routes/index.js'
// app.use(routes)




//middleware 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/createUser', createUser);
app.put('/update/:id', updateUser)
app.get('/show/:id', showUser)
app.get('/fetch', fetchUser)


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

