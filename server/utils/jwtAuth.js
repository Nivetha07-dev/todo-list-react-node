const jwt = require('jsonwebtoken'); 
const SECRET_KEY = 'your_secret_key'; // Use a secure key for signing JWTs

// Generate a JWT token
const generateUserToken = (user) => {

    const token = jwt.sign(
        { 
            userId: user._id, 
            email: user.email 
        },
        SECRET_KEY,
        {
            expiresIn: '4h',
        }
    );  
    return token;
}

// Middleware to verify JWT and protect routes
const authenticateJWT = (req, res, next) => {
    const token = req.cookies.jwtToken;
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid or expired token' });
      }
  
      req.user = user; // Attach user info to the request
      next();
    });
};


module.exports = { generateUserToken, authenticateJWT };
