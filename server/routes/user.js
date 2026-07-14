const express = require('express');
const router = express.Router();
const { OAuth2Client } = require("google-auth-library");

const User = require('../model/User');
const { generateUserToken } = require('../utils/jwtAuth');

const client = new OAuth2Client("265227537562-cm9m20ohvf1ci9atpknn4q2b8hmk2qdv.apps.googleusercontent.com");

router.post("/google", async (req, res) => {
    const { idToken } = req.body;

    try {
      const ticket = await client.verifyIdToken({
        idToken,
        audience: "265227537562-cm9m20ohvf1ci9atpknn4q2b8hmk2qdv.apps.googleusercontent.com",
      });
      const payload = ticket.getPayload(); // Extract user info
      const email = payload.email;
      const name = payload.name;

      // Check if the user already exists in the database
      let user = await User.findOne({ email });
      if (!user) {
        // Create a new user if they don't exist
        user = await User.create({
          email,
          name,
          authSource: 'google',
        });
      }
      // Fetch tasks for the user
      //const userTasks = tasks[email] || [];

      const jwtToken = generateUserToken(user);

      // Send the token as a cookie and response
      res
        .status(200)
        .cookie('jwtToken', jwtToken, {
          httpOnly: true,
          secure: false, 
          maxAge: 4 * 60 * 60 * 1000, // 4 hours
        })
        .json({ user });

    } catch (error) {

      res.status(401).send("Invalid token");
    }
});
  
module.exports = router;
