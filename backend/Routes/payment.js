const router =require('express').Router();

const Razorpay = require('razorpay');
const crypto = require('crypto');

//create order 

router.post("/orders" , async(req, res) => {

    try{
        const instance = new Razorpay({
            key_id : "rzp_test_Va7TNOjnzNmXpL",
            key_secret : "L2U1NS9H7uxtOhXcx2hPztwO"
        });

        const options = {
            amount : req.body.amount *100,
            currency : "INR",
            receipt : crypto.randomBytes(10).toString("hex")
        }
        instance.orders.create(options, (error, order) => {
            if(error) {
                console.log(error);
                return res.status(500).json({message:"Something went wrong try again"});

            }
            res.status(200).json({data:order})
        })
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error !"});
    }
});

//payment verify 
router.post("/verify",async (req, res) => {

    try{
        const{
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;

        const sign =  razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign =crypto
        .createHmac("Sha256" , "L2U1NS9H7uxtOhXcx2hPztwO")
        .update(sign.toString())
        .digest("hex");

        if(razorpay_signature === expectedSign){
            res.status(200).json({message:"payment varified successfully!"})
        }
        else {
            res.status(400).json({message:"Invalid Signature sent"})
        }

    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error !"})
    }
})

module.exports = router;