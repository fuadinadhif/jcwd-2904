CREATE DATABASE tokopaedi;

SHOW CREATE DATABASE tokopaedi;

SHOW DATABASES;

SELECT DATABASE();

USE tokopaedi;

SHOW TABLES;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  quantity INT DEFAULT 0,
  price DECIMAL(10,2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

DESCRIBE products;

SHOW CREATE TABLE products;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(40) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE wishlists (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(255),
  quantity INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO products (name, quantity, price)
VALUES 
('Apple iPhone 14', 50, 799.99),
('Samsung Galaxy S23', 35, 699.99),
('Sony WH-1000XM5 Headphones', 25, 349.99),
('Dell XPS 13 Laptop', 15, 999.99),
('Apple MacBook Pro 14"', 20, 1999.99),
('Google Pixel 7', 30, 599.99),
('Nintendo Switch', 45, 299.99),
('Bose QuietComfort 45', 18, 329.99),
('Sony PlayStation 5', 10, 499.99),
('Microsoft Xbox Series X', 12, 499.99),
('Apple iPad Pro 11"', 28, 799.99),
('Samsung Galaxy Tab S8', 22, 649.99),
('Fitbit Charge 5', 40, 179.99),
('Apple AirPods Pro (2nd Gen)', 35, 249.99),
('Amazon Echo Dot (5th Gen)', 50, 49.99),
('GoPro HERO11 Black', 15, 399.99),
('Kindle Paperwhite', 25, 139.99),
('Apple Watch Series 8', 20, 399.99),
('Logitech MX Master 3S', 30, 99.99),
('Canon EOS R6 Camera', 10, 2499.99);

INSERT INTO users (full_name, email, password)
VALUES
('John Doe', 'john.doe@example.com', "user123"),
('Jane Smith', 'jane.smith@example.com', "user123"),
('Alice Johnson', 'alice.johnson@example.com', "user123"),
('Bob Brown', 'bob.brown@example.com', "user123"),
('Charlie Davis', 'charlie.davis@example.com', "user123");

SELECT * FROM products;
SELECT * FROM users;

ALTER TABLE wishlists
ADD COLUMN id_product INT;

ALTER TABLE wishlists
ADD COLUMN id_user INT;

DESCRIBE wishlists;

ALTER TABLE wishlists
MODIFY id_product INT AFTER quantity;

ALTER TABLE wishlists
MODIFY id_user INT AFTER id_product;

SHOW CREATE TABLE wishlists;

ALTER TABLE wishlists
ADD CONSTRAINT fk_wishlist_product_id
FOREIGN KEY (id_product)
REFERENCES products (id);

ALTER TABLE wishlists
ADD CONSTRAINT fk_wishlist_user_id
FOREIGN KEY (id_user)
REFERENCES users (id);

INSERT INTO wishlists (description, quantity, id_product, id_user)
VALUES
("Dream phone", 1, 1, 5);

ALTER TABLE wishlists
DROP FOREIGN KEY fk_wishlist_product_id;

ALTER TABLE wishlists
DROP FOREIGN KEY fk_wishlist_user_id;

ALTER TABLE wishlists
ADD CONSTRAINT fk_wishlist_product_id
FOREIGN KEY (id_product) REFERENCES products (id)
ON DELETE SET NULL
ON UPDATE CASCADE;

ALTER TABLE wishlists
ADD CONSTRAINT fk_wishlist_user_id
FOREIGN KEY (id_user) REFERENCES users (id)
ON DELETE SET NULL
ON UPDATE CASCADE;

/* ---------------------------------- JOINS --------------------------------- */
SELECT * FROM wishlists
JOIN products;

SELECT * FROM wishlists
JOIN products ON products.id = wishlists.id_product;

SELECT wishlists.description, products.name, products.price
FROM wishlists
JOIN products ON products.id = wishlists.id_product;

SELECT w.description, p.name, p.price
FROM wishlists AS w
JOIN products AS p
ON p.id = w.id_product;

SELECT * FROM wishlists
INNER JOIN products ON products.id = wishlists.id_product;

SELECT * FROM wishlists
LEFT JOIN products ON products.id = wishlists.id_product;

SELECT * FROM wishlists
RIGHT JOIN products ON products.id = wishlists.id_product;

/* ------------------------------ RELATIONSHIPS ----------------------------- */
-- One to One
CREATE TABLE wallets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  balance DECIMAL(10, 2) DEFAULT 0 NOT NULL,
  id_user INT NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_wallet_user_id
  FOREIGN KEY (id_user) REFERENCES users (id)
);

INSERT INTO wallets (balance, id_user)
VALUES
(500000.00, 3),
(1000000, 5);

-- One to Many
CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE products
ADD COLUMN id_category INT;

ALTER TABLE products
ADD CONSTRAINT fk_product_category_id
FOREIGN KEY (id_category) REFERENCES categories (id);
-- ON DELETE SET NULL
-- ON UPDATE CASCADE;

INSERT INTO categories (name)
VALUES 
("Phone"),
("Tablet"),
("Wearables"),
("Others");

UPDATE products
SET id_category = 1
WHERE id IN (6);

UPDATE products
SET id_category = 2
WHERE id IN (12, 11);

UPDATE products
SET id_category = 3
WHERE id IN (3, 8, 13, 14, 15, 18);

UPDATE products
SET id_category = 4
WHERE id IN (4, 5, 7, 9, 10, 16, 17, 19);

-- It will fail
UPDATE categories
SET id = 10
WHERE id = 1;

/* 
  Error: Parent Row => We update a parent row's data that used by another table
  Error: Child Row => We create a data that does not exist in the parent row
*/

-- Many to Many
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  total_price DECIMAL(10,2) NOT NULL,
  date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE orders_detail (
  id_product INT NOT NULL,
  id_order INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id_product, id_order)
);

ALTER TABLE orders_detail
ADD CONSTRAINT fk_order_detail_id_product
FOREIGN KEY (id_product) REFERENCES products (id);

ALTER TABLE orders_detail
ADD CONSTRAINT fk_order_detail_id_order
FOREIGN KEY (id_order) REFERENCES orders (id);

INSERT INTO orders (total_price)
VALUES
(3000),
(599.99),
(249.99);

INSERT INTO orders_detail (id_product, id_order, price)
VALUES
(1, 1, 500),
(5, 1, 2500),
(6, 2, 599.99),
(14, 3, 249.99);

SELECT orders.total_price, orders_detail.price, products.name
FROM orders
JOIN orders_detail ON (orders_detail.id_order = orders.id)
JOIN products ON (orders_detail.id_product = products.id);

-- Transaction
START TRANSACTION;

UPDATE wallets
SET balance = balance - 15000
WHERE id = 1;

UPDATE wallets
SET balance = balance + 15000
WHERE id = 2;

-- If succes
COMMIT;

-- If errors
ROLLBACK;
