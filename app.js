const express = require('express')
const app = express()

app.get('/', (req, res) => { send('Hello') })

PORT_NUMBER = 3000 || process.env.PORT_NUMBER
app.listen(PORT_NUMBER, () => console.log('Listening...'))