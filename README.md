# Simple E-commerce App (Express + MongoDB)

A small e-commerce backend API that lets you:
- Create **products**
- Create **users** (password is hashed with **bcrypt**)
- Add products to a user’s **cart**
- Fetch a user with populated cart items

Server runs on **http://localhost:4000** and uses **MongoDB**.

---

## Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- bcrypt (password hashing)
- REST APIs

---

## Setup
### Prerequisites
- Node.js installed
- MongoDB running locally

### Install dependencies
```bash
npm install
```

### MongoDB connection
The server connects to:
- `mongodb://localhost:27017/ecomdb`

### Run the server
```bash
node server.js
```

You should see:
- `DB Connection success`
- `server listening to port 4000....`

---

## API Base URLs
- Product API: `http://localhost:4000/product-api`
- User API: `http://localhost:4000/user-api`

---

## Endpoints

### 1) Create a Product
**POST** `/product-api/products`

**Body** (JSON)
```json
{
  "productName": "laptop",
  "price": 70000,
  "brand": "lenevo"
}
```

**Success (201)**
```json
{
  "message": "product added",
  "payload": { }
}
```

---

### 2) Create a User
**POST** `/user-api/users`

**Body** (JSON)
```json
{
  "name": "abhi",
  "email": "abhi@email.com",
  "password": "abhi",
  "cart": []
}
```

**Notes**
- Password is automatically hashed using bcrypt before saving.

**Success (201)**
```json
{
  "message": "user created",
  "payload": { }
}
```

---

### 3) Add Product to User Cart
**PUT** `/user-api/user-cart/user-id/:uid/product-id/:pid`

**Example**
- `:uid` = user id from MongoDB
- `:pid` = product id from MongoDB

**Success (200)**
```json
{
  "message": "Product added to cart",
  "payload": { }
}
```

**Errors**
- **401** `{ "message": "User not found" }`
- **401** `{ "message": "Product not found" }`

---

### 4) Get User (with populated cart)
**GET** `/user-api/users/:uid`

**Success (200)**
```json
{
  "message": "user",
  "payload": {
    "_id": "...",
    "name": "...",
    "email": "...",
    "cart": [
      {
        "product": {
          "productName": "...",
          "price": 70000
        },
        "count": 1
      }
    ]
  }
}
```

---

## Testing with `APIs/test.http`
The repository includes example requests in:
- `APIs/test.http`

Open that file in VSCode and send requests to verify:
1. Create product
2. Create user
3. Add product to cart
4. Fetch user

---

## Troubleshooting
- If MongoDB connection fails, ensure MongoDB is running and the connection string matches.
- If endpoint requests fail, verify you’re using the correct base URL and route parameters (`uid`, `pid`).

