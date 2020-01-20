const express = require('express');
const router = express.Router();

//@route    GET api/contacts
//@desc     Get all users contacts
//@access   Private 
router.get('/', (req,res)=>{
    res.get('Get all contacts');
});

//@route    POST api/auth
//@desc     Auth user and get token
//@access   Public 
router.post('/', (req,res)=>{
    res.send('Add contact');
});

//@route    PUT api/contacts
//@desc     Update contacts
//@access   Private 
router.put('/', (req,res)=>{
    res.send('Update contact');
});

//@route    DELETE api/contacts
//@desc     Delete contacts
//@access   Private 
router.delete('/', (req,res)=>{
    res.send('Delete contact');
});

module.exports = router;