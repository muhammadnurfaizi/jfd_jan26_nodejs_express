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











}