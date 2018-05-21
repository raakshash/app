"use strict";
const express = require('express');
const router = express.Router();
const fs = require('fs');

const Contact = require('../model/contact');

router.get('/contacts', function(req, res, next){
    Contact.find(function(err, contacts){
        res.json(contacts);
    });    
});

router.post('/contact', function(req, res, next){
    var newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save(function(err, contact){
        if(err){
            res.json({msg: "failed to save new contact"});
        }else{
            res.json({msg: "contact added succesfully"});
        }
    });
});

router.delete('/contacts/:id', function(req, res, next){
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});


module.exports = router;