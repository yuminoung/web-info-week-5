const express = require('express')
const app = express()


PORT_NUMBER = 3000 || process.env.PORT_NUMBER
app.listen(PORT_NUMBER, () => console.log('Listening...'))