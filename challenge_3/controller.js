const express = require('express')
const model = require('./model.js')

module.exports.get = (res) => {
  model.get((err, records) => {
    if(err) {
      throw err;
    } else {
      res.status(200).send(records);
    }
  })
}

module.exports.post = (res) => {
  model.post((err) => {
    if(err) {
      throw err;
    } else {
      res.status(201).send('Post successful!');
    }
  })
}

module.exports.patch = {
  form1: (req, res) => {
    model.patch.form1(req, (err) => {
      if(err) {
        throw err;
      } else {
        res.status(200).send('Patch successful!');
      }
    })
  },

  form2: (req, res) => {
    model.patch.form2(req, (err) => {
      if(err) {
        throw err;
      } else {
        res.status(200).send('Patch successful!');
      }
    })
  },

  form3: (req, res) => {
    model.patch.form3(req, (err) => {
      if(err) {
        throw err;
      } else {
        res.status(200).send('Patch successful!');
      }
    })
  }
}