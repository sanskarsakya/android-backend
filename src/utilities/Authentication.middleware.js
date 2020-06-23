// const jsonwebtoken = require('jsonwebtoken');
// const checkIfAuthenticated = async (req, res, next) => {
    
//     const header = req.headers.authorization;
//     console.log(header)

//     if (header) {
//         try {
//             const jwt       = header.split(" ")[1];
//             const payload   = await decodeJwt(jwt);                
//             req["user"]     = payload;
//             next()
//         }
//         catch (err) {
//             res.status(400).json('unauthorized')
//         }
//     }
//     else {            
//         res.status(400).json('unauthorized')
//     }
// }

// const decodeJwt = async (token) => {
//     const payload = await jsonwebtoken.verify(token, 'secret');    
//     return payload;
// }

// module.exports = {
//     checkIfAuthenticated: checkIfAuthenticated
// }