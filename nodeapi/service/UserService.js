'use strict';
// get config vars

const dotenv = require('dotenv');
var jwt = require('jsonwebtoken');
dotenv.config();
/**
 *
 * username String Indicate the username 
 * returns token
 **/
exports.generateAccessToken = function(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}


/**
 *
 * Authenticate token
 **/
 exports.authenticateToken = function(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET.toString(), (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}

