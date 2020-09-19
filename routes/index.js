const express = require('express');
const router = express.Router();
const { ensureAuthenticated} = require('../config/authentication');


router.get('/',(req,res)=>res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    name: req.user.name
  })
);

/*
//welcome
router.get('/welcome',(req,res)=>res.render('welcome'));*/


//about
router.get('/about', (req,res)=>res.render('about'));

//aboutLog
router.get('/aboutLog',(req,res)=>res.render('aboutLog'));

//contactOut
router.get('/contactOut',(req,res)=>res.render('contactOut'));

//contactIn
router.get('/contactIn',(req,res)=>res.render('contactIn'));

//prestoApp
router.get('/prestoApp',(req,res)=>res.render('prestoApp'))

//prestoApp
router.get('/prestoAppOut',(req,res)=>res.render('prestoAppOut'))

//prestoApp
router.get('/newDevicesLearn',(req,res)=>res.render('newDevicesLearn'))

//prestoApp
router.get('/newDevices',(req,res)=>res.render('newDevices'))

//prestoApp
router.get('/prestoOnTtcOut',(req,res)=>res.render('prestoOnTtcOut'))

//prestoApp
router.get('/prestoOnTTC',(req,res)=>res.render('prestoOnTTC'))

//load
//router.get('/load',ensureAuthenticated,(req,res)=>res.render('load'));

module.exports = router;

