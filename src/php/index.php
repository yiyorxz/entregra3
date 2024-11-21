<?php
session_start();
if (!isset($_SESSION["user"])) {
    header("Location: login.php");
    exit();
}

echo '<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Tutorial de NumPy</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1>Bienvenido al Tutorial de NumPy</h1>
        <p class="text-success">Usuario: ' . htmlspecialchars($_SESSION["user"]) . '</p>
        
        <div class="row">
            <!-- Parte 1: Instalación de NumPy -->
            <div class="col-md-4">
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Parte 1: Instalación de NumPy</h5>
                        <p class="card-text">NumPy es una biblioteca de Python utilizada para cálculos numéricos eficientes. Para instalarla, sigue estos pasos:</p>
                        <ul>
                            <li>Asegúrate de tener Python instalado. Para verificarlo, ejecuta <code>python --version</code> en tu terminal.</li>
                            <li>Si no tienes Python, descárgalo desde <a href="https://www.python.org/downloads/" target="_blank">python.org</a>.</li>
                            <li>Para instalar NumPy, abre una terminal y ejecuta: <code>pip install numpy</code>.</li>
                            <li>Verifica la instalación ingresando <code>python -c "import numpy; print(numpy.__version__)"</code>.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Parte 2: Creación de Arrays con NumPy -->
            <div class="col-md-4">
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Parte 2: Creación de Arrays con NumPy</h5>
                        <p class="card-text">Una vez instalado, puedes usar NumPy para crear y manipular arrays:</p>
                        <ul>
                            <li>Importa NumPy en tu código: <code>import numpy as np</code>.</li>
                            <li>Crea un array de una dimensión: <code>array1 = np.array([1, 2, 3, 4])</code>.</li>
                            <li>Crea un array de dos dimensiones (matriz): <code>array2 = np.array([[1, 2], [3, 4]])</code>.</li>
                            <li>Explora las propiedades del array, como su forma: <code>array2.shape</code> o tipo de datos: <code>array1.dtype</code>.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Parte 3: Operaciones Básicas con NumPy -->
            <div class="col-md-4">
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Parte 3: Operaciones Básicas con NumPy</h5>
                        <p class="card-text">NumPy facilita realizar operaciones matemáticas en arrays:</p>
                        <ul>
                            <li>Suma de arrays: <code>np.add(array1, array2)</code>.</li>
                            <li>Multiplicación por un escalar: <code>array1 * 2</code>.</li>
                            <li>Producto punto de matrices: <code>np.dot(array2, array2)</code>.</li>
                            <li>Operaciones estadísticas: <code>array1.mean()</code>, <code>array1.sum()</code>, <code>array1.max()</code>.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <a href="logout.php" class="btn btn-danger mt-3">Cerrar Sesión</a>
    </div>
</body>
</html>';
?>
