const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Commit'))

PORT_NUMBER = process.env.PORT || 3000
app.listen(PORT_NUMBER, () => console.log('Listening...'))