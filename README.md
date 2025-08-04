# 🗃️ Inventory Management System (Backend)

This is a simple inventory management backend built with **Node.js**, **Express**, and **MongoDB** using **Mongoose**. It includes RESTful API endpoints for managing inventory items and is tested using **Postman**.

---

## 📦 Features

- Express server setup on port 3000
- MongoDB Atlas connection using Mongoose
- Middleware for logging requests and handling 404 errors
- Basic CRUD operations:
  - Add new inventory item
  - List all items
- Tested using Postman

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- Postman (for testing)

---

## 📁 Folder Structure
inventory-api/
├── controllers/
│   └── itemController.js
├── media/
│   ├── Screenshot -get request.png
│   ├── Screenshot 2025-08-04 111159.png
│   ├── Screenshot 2025-08-04 111200.png
│   ├── Screenshot 2025-08-04 111201.png
│   └── Screenshot 2025-08-04 111203.png
├── models/
│   └── itemModel.js
├── node_modules/
├── routes/
│   └── itemRoutes.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js

---
## 📷 Postman API Testing

### 🔹 GET `/` – Inventory API is Running
![GET Root](./media/api%20running.png)

---

### 🔹 GET `/health` – Server is Healthy
![GET Health](./media/server%20healthy.png)

---

### 🔹 POST `/items` – Add New Item
![POST Item](./media/post-add%20new%20item.png)

---

### 🔹 GET `/items` – List All Items
![GET Items](./media/Screenshot%20-get%20req.png)
