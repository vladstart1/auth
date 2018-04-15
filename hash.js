const bcrypt = require('bcrypt');
const {MD5} = require('crypto-js');

// bcrypt.genSalt(10,(err, salt)=>{
//     if (err) return next(err);

//     bcrypt.hash('password123',salt,(err,hash)=>{
//         if(err) return next(err);

//         console.log(hash);
//     })
// })


const id = '1000';
const secret = 'supersecret';

const receveToken = '$2b$10$qFryGhOKWGc6j6vUxGwg4ObOWcgC2L.7Zx5SXObGF0V4i7xhjifuu';

const token = jwt.sign(id, secret);
const decodeToken = jwt.verify(receveToken, secret);

console.log(decodeToken);