# Pharmacy Management Application

This is a Pharmacy Management Application developed using Express.js for the backend and React.js for the frontend.


## Features

- Manage pharmacy inventory
- Track sales and transactions
- User authentication and authorization
- Responsive UI for easy use on various devices

## Requirements

- Node.js and npm
- MongoDB
- React.js
- Express.js
- Stripe

## Getting Started

Clone the repository:

git clone (REPO)
cd pharmacy-management-apP

## Installation

### Backend (Express.js)

cd backend
npm install

### Frontend (React.js)

cd frontend
npm install


## Configuration

### Backend

Create a `.env` file in the `backend` directory and set the environment variables:

```env
PORT=5000
NODE_ENV= production
SECRET_KEY = ''
MONGO_URI = ''
JWTPRIVATEKEY = ''
SALT = 10
```

### Frontend

Create a `.env` file in the `frontend` directory and set the following environment variable:

```env
REACT_APP_API_URL=http://localhost:3001/api
```

## Running the Application

### Backend

```bash
cd backend
npm start
```

The backend server will start at `http://localhost:3001`.

### Frontend

```bash
cd frontend
npm start
```

The frontend development server will start at `http://localhost:3000`.

Visit `http://localhost:3000` in your browser to access the Pharmacy Management Application.
