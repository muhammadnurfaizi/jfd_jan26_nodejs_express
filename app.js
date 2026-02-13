const express   = require('express')
const app       = express()
const port      = 3000

app.set("view engine", "ejs") // setiing penggunaan template engine untuk express
app.set("views", "./view") // setting pengunaan folder untuk menyompan file .eks

app.get('/', (req, res) => {
  res.render
    (`branda`)
})

app.get('/profile', (req, res) => {
  res.render
    (`profile`)
})


app.listen(port, () => {
  console.log(`Applikasi berjalan di http://localhost: ${port}`)
})