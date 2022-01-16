const mysql=require("mysql")
const connection=mysql.createConnection({
    host:"localhost",
    user:"newuser",
    password:"password",
    database:"file_management_site",
    insecureAuth : true,
    port:3306
})
connection.connect();
module.exports={
    db:connection
}