// utils/jwt.js
import  jwt from 'jsonwebtoken';
const refresh_secret = '1234refrehtoken'; 
const acess_secret = '1234accesstoken'; 

export const generateToken = (user) => {
  const payload = { id: user._id, email: user.email, role: user.role };
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
  return jwt.verify(token, secret);
};


