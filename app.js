var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
flash = require("connect-flash"),
passport = require("passport"),
LocalStrategy = require("passport-local"),
methodOverride = require("method-override"),
Campground = require("./models/campground"),
Comment = require("./models/comment"),
User = require("./models/user"), 
seedDB = require("./seeds");

//Requiring Routes
var commentRoutes = require("./routes/comments"),
campgroundRoutes = require("./routes/campgrounds"),
indexRoutes = require("./routes/index");

// App Config
mongoose.connect("mongodb+srv://leslieo:<Orepiro21lo%21>@cluster0-f7fcu.mongodb.net/yelpcamp?retryWrites=true", {useNewUrlParser: true});
// mongoose.connect("mongodb://localhost:27017/yelpcamp", {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

// seedDB();

app.locals.moment = require('moment');

// PASSPORT CONFIG
app.use(require("express-session")({
    secret: "I love my whudda",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);


//Listening...
var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("The YelpCamp Server Has Started!");
  });