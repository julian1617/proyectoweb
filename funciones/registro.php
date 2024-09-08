<?php
// Configuración de la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "empleados_db";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$documento = $_POST['documento'];
$clave = password_hash($_POST['clave'], PASSWORD_DEFAULT);
$genero = $_POST['genero'];
$tipo_empleado = $_POST['tipo_empleado'];

// Insertar datos en la tabla empleados
$sql = "INSERT INTO empleados (nombre, documento, clave, genero, tipo_empleado) 
        VALUES ('$nombre', '$documento', '$clave', '$genero', '$tipo_empleado')";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar conexión
$conn->close();
?>
