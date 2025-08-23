# Hexagonal Products API

A TypeScript-based REST API for product management built with Hexagonal Architecture, Express.js, Sequelize ORM, and PostgreSQL.

## 🚀 Features

- **Hexagonal Architecture** - Clean separation of concerns
- **TypeScript** - Type safety and better development experience
- **Express.js** - Fast, unopinionated web framework
- **Sequelize** - Promise-based ORM for PostgreSQL
- **Swagger/OpenAPI** - Interactive API documentation
- **PostgreSQL** - Robust relational database

## 📋 Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v17.5)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/tu-usuario/hexagonal-products-api.git
cd hexagonal-products-api
```

2. Install dependencies:
```bash
npm install
```

3. Configure your database in `src/database/sequelize.ts`:
```typescript
export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'your_username',
    password: 'your_password',
    database: 'your_database',
    // ...
});
```

4. Start the server:
```bash
npm run start
```

## 📚 API Documentation

Once the server is running, visit:
- **Swagger UI**: http://localhost:3500/api-docs

## 🔗 Endpoints

### Products
- `GET /products` - Get all products
- `POST /products` - Create a new product

## 🏗️ Project Structure

```
src/
├── controllers/     # Request handlers
├── services/        # Business logic
├── models/          # Database models
├── dtos/           # Data Transfer Objects
├── routers/        # Route definitions
├── database/       # Database configuration
└── config/         # App configuration
```

## 🧪 Usage Examples

### Create a Product
```bash
curl -X POST http://localhost:3500/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "price": 999.99,
    "quantity": 10
  }'
```

### Get All Products
```bash
curl -X GET http://localhost:3500/products
```

## 📄 License

This project is licensed under the ISC License.