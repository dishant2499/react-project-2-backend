const express = require('express');
const cors = require('cors');

require("./folder/detail.js")
const user=require('./folder/user')
const product=require('./folder/products')

const app = express();


app.use(express.json());
app.use(cors());

app.post('/register',async (req,res)=>{
    const abc=new user(req.body)
    const data= await abc.save()
    res.send(data)
})

app.post('/login',async (req,res)=>{
    if(req.body.email && req.body.password){
   let result= await user.findOne(req.body).select("-password")
   if(result){
    res.send(result)
   }
   else{
       res.send("please enter valid detaile")
   }
}
else{
    res.send("please enter valid detaile")
    console.log("please enter valid details")
}
})


app.post('/add-product',async (req,res)=>{
    const data1= new product(req.body)
    const data2= await data1.save()
        res.send(data2)
})


app.get('/product', async (req,res)=>{
    const data3= await product.find()
    res.send(data3)
})

app.delete('/delete/:id', async (req,res)=>{
    const delete1 = await product.deleteOne({_id:req.params.id})
    res.send(delete1)
})

app.get("/product/:id",async (req,res)=>{
    let data4=await product.findOne({_id:req.params.id})
    res.send(data4)

})

app.put("/update/:id",async(req,res)=>{
    let data5 = await product.updateOne({_id:req.params.id},{
            $set:req.body
    })
    res.send(data5)
})

app.listen(4000)