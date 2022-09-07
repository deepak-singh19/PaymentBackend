const express = require('express');
const Razorpay = require("razorpay");

require("../src/db/conn");


const Student = require("../src/models/editprofileSchema");
// console.log(Student.type);

const router = express.Router();

router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
});

router.get("/", (req, res) => {
    res.send(`hello fron routerhome`);
});

// PAYMENT BACKEND
router.post("/orders", async(req, res) => {
    try {
        const instance = new Razorpay({
            key_id: "rzp_test_IkAVYvOdcRhKT1",
            key_secret: "DmkI0ylTL50mUl5sZkCTdbMy",
        });

        const options = {
            amount: 50000, // amount in smallest currency unit
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);
        console.log(order);

        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.post('/studentEdit', async(req, res) => {

    const { firstName, lastName, collegeName, yop, stream, tech, github, streetAddress, city, state, postalCode, linkedin } = req.body;


    console.log(req.body);

    // if (!firstName || !lastName || collegeName) {
    //     return res.status(422).json({ error: "plzz fill the field" });
    // }

    const stuData = new Student({ firstName, lastName, collegeName, yop, stream, tech, github, streetAddress, city, state, postalCode, linkedin });

    // stuData.save().then(() => {
    //     res.status(201).json({ message: "Student Added" });
    // }).catch((err) => {
    //     res.status(500).json({ error: "Failed" });

    // });

    try {
        await stuData.save();
        res.send(stuData);
    } catch (err) {
        res.status(500).send(err);
    }




});

module.exports = router;