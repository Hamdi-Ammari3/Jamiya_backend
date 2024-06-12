const express = require('express');
const router = express.Router();
const User = require('../DB/User'); 

//New User Registeration
router.post('/',async (req,res) => {
    const {first_name,last_name,phone_number} = req.body;
    const user = new User({first_name,last_name,phone_number});
    await user.save();
    res.json({msg:'user registered successfully'});
})

module.exports = router;