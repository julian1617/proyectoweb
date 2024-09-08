var mysql = require('mysql');

var conexion = mysql.createConnection({
    hot: 'localhost',
    database: 'empleados_db',
    user: 'root',
    password: '',
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('conexion exitosa');
        }
});
conexion.end();