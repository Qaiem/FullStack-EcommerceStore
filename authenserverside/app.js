const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');  // Import mongoose
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./model/userSchema")

// Load environment variables from .env file
dotenv.config();

// Start the server
const PORT = process.env.PORT || 3000;

// MongoDB URI from environment variables
const db = process.env.MONGO_URI || 'mongodb://localhost:3000/MERNAuth';

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Could not connect to MongoDB:', error));

// Initialize the app
const app = express();

const clientid = "7615255794-hrjkk28h11dtj0uq625htu8pik7dc6i5.apps.googleusercontent.com"
const clientsecret = "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"

// Middleware
app.use(cors({
    origin: "http://localhost:5173",  // Ensure the correct origin URL (without trailing slash)
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));
app.use(express.json());

//setup session
app.use(session({
  secret:"7b9f1c2a1d4e8c3b6f2e77ad1d0e9c8f1a6e4b5c2d8e3f9a6b7c1f4e8a2d9f6c",
  resave: false,
  saveUninitialized: true,
}))

//setup passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy({
    clientID: clientid,
    clientSecret: clientsecret,
    callbackURL:"/auth/google/callback",
    scope:["profile","email"]
  },
  async(accessToken,refreshToken,profile,done)=>{
    console.log("profile",profile)
    try{
     let user = await userdb.findOne({googleId:profile.id});

     if(!user){
        user = new userdb({
          googleId:profile.id,
          displayName:profile.name,
          email:profile.email[0].value,
          image:profile.photos[0].value
        })
        await user.save();
     }
     return done(null,user)
    } catch(error) {
      return done(error, null)
    }
  }
)
)

passport.serializeUser((user,done)=>{
  done(null,user)
})

passport.deserializeUser((user,done)=>{
  done(null,user)
})

//initial google auth Login
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}))

app.get("/auth/google/callback",passport.authenticate("google",{
  successRedirect:"http://localhost:3000/dashboard",
  failureRedirect:"http://localhost:3000/login"
}))

// Example route
// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

