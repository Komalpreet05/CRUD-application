const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();


// Passport Config
require('./config/passport')(passport);

//db
const db = require('./config/keys').MongoURI;

// connect to db
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


//ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

//bodyparser
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));

//Session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

  // Passport middleware
app.use(passport.initialize());
app.use(passport.session());
  
  //connect-flash
  app.use(flash());

  app.use((req,res,next)=>{
      res.locals.success_msg = req.flash('success_msg');
      res.locals.error_msg = req.flash('error_msg');
      res.locals.error = req.flash('error');
      next();
  })

//routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
app.use('/booking',require('./routes/booking'));

const PORT = process.env.PORT || 2305;
app.listen(PORT, console.log(`Server started on port ${PORT }`));