const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema(
  {
    googleId: String,        // Google-specific user ID
    displayName: String,     // Full name of the user
    email: String,           // User email address
    image: String,           // Profile image URL
  },
  { timestamps: true }       // Automatically add createdAt and updatedAt fields
);

// Export the model
const userdb = new mongoose.model('mernuser', UserSchema);

module.exports = userdb;
