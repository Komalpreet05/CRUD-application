const express = require('express');
const router = express.Router();

const { ensureAuthenticated} = require('../config/authentication');

//user model
const Book = require('../models/book');


router.get('/book', ensureAuthenticated, function(req, res) {
     
    Book.find({}, function(err, data) {
        
        res.render('book.ejs', {
            user : req.user,
            practices: data
        });
    });
});


//posting data
router.post('/book',(req,res)=>{
    const{firstName,lastName,address,email,city,phone,zipCode,busNumber,date} = req.body;
    
        const newBook = new Book({
            firstName,
            lastName,
            address,
            email,
            city,
            phone,
            zipCode,
            busNumber,
            date
        });
        newBook.save((err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("Data is saved");
                res.redirect('/booking/book');
            }
        })    
    })

router.get('/edit/:id',(req,res,next)=>{
    console.log(req.params.id)
    Book.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}, (err,docs)=>{
        if(err){
            console.log(err)
        }
        else{
            res.render('edit', {booking: docs});
        }
    })
    
});

router.post('/edit/:id',(req,res,next)=>{
    Book.findByIdAndUpdate({_id: req.params.id}, req.body,  (err,docs)=>{
        if(err){
            console.log(err)

        }
        else{
            res.redirect('/booking/book');
        }
    })
});

router.get('/book/:id',(req,res,next)=>{
    Book.findByIdAndDelete({_id: req.params.id}, (err,docs)=>{
        if(err){
            console.log(err);
        }
        else{
            
            console.log("Deleted");
            res.redirect('/booking/book');
            
        }
    })
})



module.exports = router;
