const express = require('express');
const router = express.Router();
const db = require('../models');
const { hashPassword } = require('../utils/bcrypt');

router.get('/', async(req, res) => {
    try {
        const userData =  await db['user'].findAll();
        console.log(userData);
        return res.json({status:"OK"})
    } catch (error) {
        
        console.log(error);
    }
});
router.post('/', async(req, res) => {
    try {
        const {email, password} = req.body;
        const hashedPassword = await hashPassword(password);
        const result = await db['user'].create({
            email,
            password:hashedPassword
            
        });
        console.log(result);
        return res.json({status:"OK"})
    } catch (error) {
        console.log(error);
        return res.json({status:"ERROR"})
    }
});


module.exports = router;