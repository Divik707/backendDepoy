const express = require('express')
const app = express()
const port = 3000

app.get('/youtube',(req,res) => {
    res.send('Open youtube')
})

app.get('/twitter',(req,res) => {
    res.send('Open twitter')
})

app.get('/instagram',(req,res) => {
    res.send('Open instagram')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})