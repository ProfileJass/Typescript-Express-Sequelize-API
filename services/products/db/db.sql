-- Tabla categories
CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla products
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  quantity INT NOT NULL DEFAULT 0,
  status VARCHAR(255) NOT NULL DEFAULT 'active',
  category_id INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  -- Esta FK SÍ se queda, porque Categories vive en el mismo microservicio
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar categorías de prueba
INSERT INTO categories (name, description) VALUES
('Electrónicos', 'Dispositivos electrónicos y gadgets'),
('Ropa', 'Vestimenta y accesorios'),
('Hogar', 'Artículos para el hogar y decoración'),
('Deportes', 'Artículos deportivos y fitness'),
('Libros', 'Libros y material educativo');

-- Insertar productos de prueba
INSERT INTO products (name, price, quantity, status, category_id) VALUES
('Laptop HP', 999.99, 10, 'active', 1),
('iPhone 15', 1299.99, 5, 'active', 1),
('Camiseta Nike', 29.99, 20, 'active', 2),
('Jeans Levis', 79.99, 15, 'active', 2),
('Mesa de Centro', 199.99, 8, 'active', 3),
('Balón de Fútbol', 24.99, 12, 'active', 4),
('Libro JavaScript', 39.99, 25, 'active', 5);