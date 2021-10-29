const PORT = 8080
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

app.get('/', (req,res) => {
    res.json('Welcome to climatechange api')
})

app.listen(PORT, () => console.log(`server is running in port ${PORT}`))