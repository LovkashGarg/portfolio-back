const express=require('express');
const app=express();
const cors=require('cors');
const { configDotenv } = require('dotenv');
const contact =require('./model');
configDotenv();

app.use(express.json());
app.use(cors());
const PORT=process.env.PORT|| 5000
const connectToMongoDb = require('./connect');
// const shortid = require('shortid');
connectToMongoDb(process.env.MONGO_DB_ATLAS_URL)
  .then(() => {
    console.log("MongoDB connected");
    
    // Start server only after MongoDB is connected
    app.listen(PORT, () => {
      console.log(`Listening at Port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Failed to connect to MongoDB", err);
  });
 
app.get('/',(req,res)=>{
    res.send("Thank You For Response")
})
app.post('/api/contact',async (req,res)=>{

    const {name,email,message}=req.body;
    // console.log(name + email + message);
    const newres=await contact.create({
        name:name,
        email:email,
        message:message
    })
    // contact.bulkSave();
    console.log("New response gained ");

    return res.send({data:newres,message:"Thank you for Message !"});

})
