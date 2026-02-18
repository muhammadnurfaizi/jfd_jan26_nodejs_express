const mysql = require(`mysql2`)
const db =mysql.createConnection({
    host: `localhost`,
    user: `root`,
    password: ``,
    database:`kelas_js_januari`
})

module.exports=
{
    get_semua_agama: function(){
        let sql = mysql.format(
            `SELECT * FROM agama`
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