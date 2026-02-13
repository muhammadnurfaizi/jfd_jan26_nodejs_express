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

app.get("/pengalaman", (req, res) => {
    let NamaLengkap = "Muhammad Nur Faizi"
    // 1. data harus dikirim ke view
    // 2. data harus di panggil di dalam view
    res.render ("detail_pengalaman",{
        nama: "NamaLengkap",
        alamat: "Kembnagan, Jakarta Barat",
        posisi: "Progremmer",
        usia: 25,
        gaji: 11000000
})
})

app.listen(port, () => {
  console.log(`Applikasi berjalan di http://localhost: ${port}`)
})