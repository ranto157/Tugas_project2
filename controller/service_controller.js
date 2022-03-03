const db = require('../config/db') 
// const mysql = require('mysql');

function CreateAccount (req, res) {

    let data = { 
        password:req.body.password,  
        name:req.body.name,
        addres:req.body.addres,
        join_date:req.body.join_date, 
        phone_number:req.body.phone_number
    };

    let searchQuery = "SELECT * FROM user WHERE name = ?"
    let insertQuery = "INSERT INTO user SET ?";

    db.query(searchQuery, req.body.name,function (error, results, fields) {
        if (results.length != 0) {
            res.send({ message: 'User already exists'}) 
        }else{    
                db.query(insertQuery, data,function (error, results, fields) {
                if (error) throw error;
                res.send({ message: 'New User has been inserted'})
            });
        } 
    });
}

function DeleteAccount(req, res) {
    let deleteQuery = "DELETE FROM user WHERE id="+req.params.id+"";
    db.query(deleteQuery, function (err, deleted) {
        if (err) throw err;
        res.send({ message: 'Data has been deleted' })
    });
}


function AddProduct (req, res) {

    let data = { 
        name:req.body.name,
        quantity:req.body.quantity,
        price:req.body.price  
    };

    let insertQuery = "INSERT INTO product SET ?";
    db.query(insertQuery, data, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: 'Product has been inserted', data: data })
    }); 
}


function DeleteProduct(req, res) {
    let deleteQuery = "DELETE FROM product WHERE id="+req.params.id+"";
    db.query(deleteQuery, function (err, deleted) {
        if (err) throw err;
        res.send({ message: 'Product has been deleted' })
    });
}

function updateProduct(req, res) {
    let updateQuery = "UPDATE product SET name = '"+req.body.name+"',quantity='"+req.body.quantity+"',price='"+req.body.price+"' WHERE id ="+req.params.id;
    
    
    db.query(updateQuery, function (error, result, updated) {
        if (error) throw error;
         res.send({ message: 'Data has been updated', updated })
    });
}


function listProduct(req, res) {
    let selectQuery = `SELECT * FROM product`;

    db.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: 'Data is found', data: results })
    });
}



module.exports = {
    CreateAccount, 
    DeleteAccount,
    AddProduct,
    DeleteProduct,
    updateProduct,
    listProduct,
}

