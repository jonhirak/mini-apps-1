const express = require('express')
const connection = require('./db.js')

module.exports.get = (callback) => {
  connection.connect()

  connection.query('SELECT * from records', function (err, records) {
    if (err){
      callback(err);
    } else {
      callback(null, records);
    }
  })

// connection.end()
}

module.exports.post = (callback) => {
  connection.connect()

  connection.query('INSERT INTO records (id) VALUES(null)', function (err) {
    if (err){
      callback(err);
    } else {
      callback();
    }
  })

// connection.end()
}

module.exports.patch = {
  form1: (req, callback) => {
    connection.connect()

    let params = req.params;

    connection.query(`UPDATE records SET name = '${params.name}', email= '${params.email}', password = '${params.password}' WHERE id = ${params.id}`, function (err) {
      if (err){
        callback(err);
      } else {
        callback();
      }
    })
  },

  form2: (req, callback) => {
    connection.connect()

    let params = req.params;

    connection.query(`UPDATE records SET address = '${params.address}', city= '${params.city}', state = '${params.state}', zip = '${params.zip}', phoneNumber = '${params.phoneNumber}' WHERE id = ${params.id}`, function (err) {
      if (err){
        callback(err);
      } else {
        callback();
      }
    })
  },

  form3: (req, callback) => {
    connection.connect()

    let params = req.params;

    connection.query(`UPDATE records SET name = '${params.name}', email= '${params.email}', password = '${params.password})' WHERE id = ${params.id}`, function (err) {
      if (err){
        callback(err);
      } else {
        callback();
      }
    })
  }
}