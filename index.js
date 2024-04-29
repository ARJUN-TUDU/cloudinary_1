const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")


const app = express();
app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000"],
    methods : ["GET","POST"]
}))


try{

    mongoose.connect
    ('mongodb+srv://arjuntudu:Y49W9KSLDuNAM9EN@cluster0.ssu2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

}catch(e){

    if(e){
        console.log("mongoose connection error");
    }else{
        console.log("connection done")
    }

}

const User = mongoose.model("collection_3",{
    image:String,
    name :String
})


app.post("/upload",async (req,res)=>{
     
    
    try{
        const image = req.body.image;
    const name = req.body.name;

    console.log(req.body)
    
        const new_data = new User({
          image,name
        })
        await new_data.save();
    }catch(e){

    }

   

})

app.get("/all_image",async(req,res)=>{
    
    try{
        const data = await User.find({});
        res.json(data);
    }catch(e){
        console.log(e);
    }





})

app.get("/",(req,res)=>{
    res.json([
        {name:"1"},{name:"2"}
    ])
})

app.listen(5000,(err)=>{
    if(err){
        console.log("app started failed")
    }else{
        console.log("app started")
    }
})