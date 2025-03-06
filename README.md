# MERN Stack Todo Application

A complete Todo application built with the MERN (MongoDB, Express, React, Node.js) stack.

## Overview

This project is a full-stack todo application that allows users to:
- Create new tasks
- View all tasks
- Update existing tasks
- Delete tasks
- Mark tasks as completed/incomplete

## Tech Stack

- **Frontend**: React.js with hooks, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Project Structure

```
mern-todo/
├── frontend/                # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js         # Main App component
│   │   ├── index.js       # Entry point
│   ├── package.json       # Frontend dependencies
├── backend/                # Node.js backend
│   ├── controllers/       # Request handlers
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── server.js          # Express server
│   ├── package.json       # Backend dependencies
├── .gitignore
└── README.md              # Project documentation
```

## Installation

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB (local or Atlas)

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/preetham-fernandes/todo-mern-app.git
cd todo-mern-app
```

2. **Install server dependencies**

```bash
cd backend
npm install express dotenv mongoose cors
npm install --save-dev nodemon
```

3. **Configure environment variables**

Create a `.env` file in the server directory:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/todo-app
```

4. **Install client dependencies**

In a new terminal, start the React frontend:
```bash
npm create vite@latest frontend --template react
cd frontend
npm install axios
```

5. **Run the application**

Start the backend server:
```bash
cd backend
npm start
```

Start the frontend:
```bash
cd frontend
npm run dev
```

The application will be running at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api

## API Endpoints

### Todo Routes
- `GET /api/todos` - Get all todos for user
- `POST /api/todos` - Create a new todo
- `GET /api/todos/:id` - Get a specific todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Features

- **Create Tasks**: Add new tasks with title, description, and due date
- **List Tasks**: View all tasks with filtering options
- **Update Tasks**: Edit task details or mark as complete
- **Delete Tasks**: Remove tasks from the list
- **Responsive Design**: Works on desktop and mobile devices

## Future Enhancements

- Task categories/labels
- Task priority levels
- User profile management
- Task sharing between users
- Email notifications for due tasks

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.