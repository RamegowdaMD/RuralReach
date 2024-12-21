const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')
const bodyParser = require('body-parser');

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/User"),
{
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}


app.post("/Login", (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
      .then(user => {
        if (user) {
          if (user.password === password) {
            res.json(user); // Return the user object
          } else {
            res.json("Password is Incorrect");
          }
        } else {
          res.json("No User Found");
        }
      })
      .catch(err => console.log(err));
  });
  



app.post('/Register',(req ,res)=>
{
    UserModel.create(req.body)
    .then(Users=>res.json(Users))
    .catch(err=>res.json(err))
})


app.listen(3000,()=>
{
    console.log("server is running")
})