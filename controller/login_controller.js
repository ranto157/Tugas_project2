
const db = require('../config/db') 
const jwt = require('jsonwebtoken')

function LoginUser(req, res) {
    let param = [req.body.name, req.body.password]
    let selectQuery = `SELECT * FROM user where name = ? and password = ?`

    db.query(selectQuery, param, function (error, results, fields) {

        if (results.length == 0) {
            return res.status(400).send({ message: 'Data not found', data: results }) 
        }else{  
            if(req.body.password == results[0].password){
                if (error) throw error;
                    // Information about users saved to payload
                    const payload = {
                        id: results.id,
                        name: results.name,
                    }

                    const token = jwt.sign(payload, 'secret', { expiresIn: '7d' })

                    return res.send({ message: 'Data is found', data: { token: token } })
                }   
        }

    });
}

module.exports = {
    LoginUser
}
