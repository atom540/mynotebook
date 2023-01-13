const mongoose=require('mongoose');
const monogoURI="mongodb://127.0.0.1:27017/mynotebook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2";

mongoose.set('strictQuery', true);


const connnectToMongo=()=>{
    mongoose.connect(monogoURI,(err)=>{
        if(err)console.log(err)
        else
        console.log("connected to monogo successfully");
    })
}

module.exports=connnectToMongo;