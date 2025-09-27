CREATE DATABASE IF NOT EXISTS tienda;
USE tienda;

-- Tabla Usuarios
CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    contraseña VARCHAR(255) NOT NULL
);

-- Tabla Categorias
CREATE TABLE Categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

-- Tabla Productos
CREATE TABLE Productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    cantidad INT NOT NULL,
    estado ENUM('disponible', 'no disponible') NOT NULL DEFAULT 'disponible',
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES Categorias(id)
);

-- Tabla Pedidos
CREATE TABLE Pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    total DECIMAL(10,2) NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id)
);

-- Tabla DetallePedidos
CREATE TABLE DetallePedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    id_producto INT,
    FOREIGN KEY (id_pedido) REFERENCES Pedidos(id),
    FOREIGN KEY (id_producto) REFERENCES Productos(id)
);
