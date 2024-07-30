require('dotenv').config();
const express = require('express')
const cors = require('cors');
const app = express()
const {authService, sellingData} = require('./mongodb')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/signup", async (req, res) => {

    const data = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    const emailCheck = await authService.findOne({email: req.body.email})
    const usernameCheck = await authService.findOne({username: req.body.username})
    try {
        if(emailCheck === null){
            if (usernameCheck === null) {
                await authService.insertMany([data])
                res.json("signedUp")
            }else{
                res.json("username already exists")
            }
        }else{
            res.json('email already exists')
        }
    } catch (error) {
        res.json(error)
        console.log("error:", error)
    }
})
 
app.post("/login", async (req, res) => {
    try {
        
    const check = await authService.findOne({username: req.body.username})
        if(check.username === req.body.username){
            if (check.password === req.body.password) {
                res.json({
                    status: 'ok',
                    user: check.username,
                    Seller: check.seller
                })
            }else {
                res.json("wrong password")
            }
        }
    
} catch (error) {
        console.log("error: ", error)
        res.json('wrong details')   
}

})

app.post("/products", async(req, res) => {
    try {
        const data = {
            productName: req.body.productName,
            productImage: req.body.productImage,
            price: req.body.price,
            productDescription: req.body.productDescription,
            sellerName: req.body.sellerName
        }

       const insertData = await sellingData.insertMany([data])

       if (insertData.acknowledged === true) {
        res.json('data inserted')
       } if(insertData.acknowledged === null) {
        res.json('cannot add product right now')
       }
    } catch (error) {
        console.log(error)
        res.json('error in inserting data')
    }
})

app.get("/sellingItems", async(req, res) => {
    try {
        const data = await sellingData.find({})
        res.json(data)
    } catch (error) {
        res.send("error")
        console.log(error)
    }
})

app.get('/product/:id', async(req, res) => {
    try {
        const Product = await sellingData.findById(req.params.id)
        res.json(Product)
        
    } catch (error) {
        res.json('no data found')
    }
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("server connected...");
    console.log(`server running at: http://localhost:${port}`);
})