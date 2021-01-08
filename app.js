const path = require('path')
// installed using npm
const express = require('express')
// installed using npm
const bodyParser = require('body-parser')
const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'))
})

app.listen(3000)