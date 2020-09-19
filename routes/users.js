const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { ensureAuthenticated} = require('../config/authentication');

//user model
const User = require('../models/User');

//login page
router.get('/login',(req,res)=>res.render('login'));

//register
router.get('/register',(req,res)=>res.render('register'));


//register handle
router.post('/register',(req,res)=>{
    const{name,email,password,password2} = req.body;
    let errors = [];

    //check required fields
    if(!name || !email ||  !password || !password2 ){
        errors.push({msg: "Please fill in all the fields"});
    }

    //
    if(password != password2){
        errors.push({msg: "Passwords do not match"});
    }

    //
    if(password.length < 8){
        errors.push({msg: "Password length must be 8 or more"});
    }

    if(errors.length > 0){
        res.render('register',{
            errors,
            name,
            email,
            password,
            password2
        })
    }
    else{
        //Validation
        User.findOne({email: email})
        .then(user =>{
            if(user){
                errors.push({msg: "Email is already registered"})
                res.render('register',{
                    errors,
                    name,
                    email,
                    password,
                    password2
                });
            }else{
                const newUser = new User({
                    name,
                    email,
                    password
                });

                //Hash
                bcrypt.genSalt(10, (err,salt)=> bcrypt.hash(newUser.password, salt, (err, hash)=>{
                    if(err) throw err;
                    newUser.password = hash;
                    //Save user
                    newUser.save()
                    .then(user=>{
                        req.flash('success_msg', 'Thanks! You are registered with us');
                        res.redirect('/users/login');
                    })
                    .catch(err=>console.log(err))
                }))
            }
        });
    }
})

//login
// Login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/users/login',
      failureFlash: true
    })(req, res, next);
  });

// logout
// Logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
  });
module.exports = router;
