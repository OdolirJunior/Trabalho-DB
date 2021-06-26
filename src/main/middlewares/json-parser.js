const express = require('express')
module.exports = express.json({ limit: '10mb', extended: true })
