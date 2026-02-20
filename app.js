const express   = require('express')
const { log, profile } = require('node:console')
const app       = express()
const moment    = require(`moment`)
const port      = 3000

app.use( express.urlencoded({extended:false}))
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

// Synchronous = berjalan berurutan
// asynchrounus = berjalan tidak berurutan

app.get(`/karyawan`, async (req,res)=>{
  res.render(`karyawan/all`, {
    data_karyawan: await require(`./model/m_karyawan`).get_semua_karyawan()
  })
})

app.get(`/karyawan/detail/:id_kry`, async (req, res)=>{
  let id_kry = req.params.id_kry
  res.render(`karyawan/profile`, {
    Profile_Karyawan: await require(`./model/m_karyawan`).get_1_karyawan(id_kry)
  })
})

app.get(`/karyawan/hapus/:id_kry`, async (req, res)=>{
  let id_kry = req.params.id_kry
  let proses_hapus =  await require(`./model/m_karyawan`).Hapus_1_karyawan(id_kry)
  if (proses_hapus.affectedRows > 0 ){
  res.redirect(`/karyawan`)
  }

})


app.get(`/karyawan/tambah`,async (req, res)=>{
  res.render(`karyawan/form_tambah`, {
    req:req,
    agama: await require(`./model/m_agama`).get_semua_agama()
  })
})

app.post(`/karyawan/proses_insert`,async (req, res)=>{
    try {
      let proses_insert =await require(`./model/m_karyawan`).Insert_1_karyawan(req)
      if (proses_insert.affectedRows > 0 ){
          res.redirect(`/karyawan?succes_msg=berhasil input karyawan baru a/n` + req.body.form_nama)
      }
    } catch (error) {
      console.log(error);
      
      res.redirect(`/karyawan/tambah?error_msg=`+ error.errno +':' + error.sqlMessage)
    }
})

app.get(`/karyawan/edit/:id_kry`, async (req,res)=>{
  let id_kry = req.params.id_kry
  res.render(`karyawan/form_edit`,{
    req: req,
    moment: moment,
    agama: await require(`./model/m_agama`).get_semua_agama(),
profile_karyawan: await require(`./model/m_karyawan`).get_1_karyawan(id_kry)
  })
})

app.listen(port, () => {
  console.log(`Applikasi berjalan di http://localhost: ${port}`)
})