var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Sidauruk55',
  database : 'merchant_db',
  port     : '3306'

})

module.exports = db
