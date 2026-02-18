const mysql = require(`mysql2`)
const db =mysql.createConnection({
    host: `localhost`,
    user: `root`,
    password: ``,
    database:`kelas_js_januari`
})
db.connect()

module.exports=
{
    get_semua_karyawan: function(){
        let sql = mysql.format(
            `SELECT * FROM karyawan`
        )

        return new Promise( function(resolve,reject){
            db.query(sql, function(errorsql, hasil){
                if (errorsql){
                    reject(errorsql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },


    get_1_karyawan: function(id_kry){
        let sql = mysql.format(
            `SELECT * FROM karyawan WHERE id = ?`,
            [id_kry]
        )

        return new Promise( function(resolve,reject){
            db.query(sql, function(errorsql, hasil){
                if (errorsql){
                    reject(errorsql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },

    
    Hapus_1_karyawan: function(id_kry){
        let sql = mysql.format(
            `DELETE FROM karyawan WHERE id = ?`,
            [id_kry]
        )

        return new Promise( function(resolve,reject){
            db.query(sql, function(errorsql, hasil){
                if (errorsql){
                    reject(errorsql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },


    Insert_1_karyawan: function(req){
        let sql = mysql.format(
            `INSERT INTO karyawan SET  ?`,
            [{
                nama: req.body.form_nama,
                tanggal_lahir: req.body.form_tanggal_lahir,
                jenis_kelamin: req.body.form_gender,
                alamat: req.body.form_alamat,
                agama_id: req.body.form_agama,
                jabatan_id: 1,

            }]
        )

        return new Promise( function(resolve,reject){
            db.query(sql, function(errorsql, hasil){
                if (errorsql){
                    reject(errorsql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },
}