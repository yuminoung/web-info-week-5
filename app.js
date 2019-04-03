const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Commit'))

PORT_NUMBER = 3000 || process.env.PORT
app.listen(PORT_NUMBER, () => console.log('Listening...'))