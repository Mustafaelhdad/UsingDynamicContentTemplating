const path = require('path')
const express = require('express')
const router = express.Router()

const adminData = require('./admin')

router.get('/', (req, res, next) => {
  products = adminData.products
  res.render('shop', { prods: products, pageTitle: 'My Shop', path: '/' })
})

module.exports = router