# Online Learning Platform with Adaptive Learning

A full-stack web application designed to manage students, courses, and track their adaptive learning progress interactively.

### Screenshots
![Home Page](frontend/public/Screenshot%202026-04-09%20104220.png)
![Dashboard 1](frontend/public/Screenshot%202026-04-09%20104149.png)
![Dashboard 2](frontend/public/Screenshot%202026-04-09%20104208.png)

## Features
- **Learning Dashboard**: A centralized hub to view all students, their enrolled courses, and completion progress.
- **Student Management**: Register and track students with their IDs, names, emails, and ages.
- **Course Management**: Add courses with dynamic difficulty levels.
- **Progress Tracking**: Link students to courses and track their completion percentage.
- **Modern UI**: A sleek, custom-designed dark theme UI using pure CSS.
- **Responsive Navigation**: Easy and instant routing between homepage elements using React Router.

## Tech Stack
- **Frontend**: React.js, React-DOM, React Router
- **Backend**: Python, Flask, Flask-CORS, Flask-MySQLdb
- **Database**: MySQL

## Installation & Setup

### Prerequisites
- Python 3.x
- Node.js & npm
- MySQL Server

### 1. Database Setup
Create a MySQL database and update the `backend/config.py` file with your credentials (username, password, database name).

### 2. Backend Setup
Navigate to the `backend` directory:
```bash
cd backend
```

Create and activate a Python virtual environment:
```bash
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

Install backend dependencies:
```bash
pip install -r requirements.txt
```

Run the Flask server:
```bash
python app.py
```
*(The server will start at `http://localhost:5000`)*

### 3. Frontend Setup
Open a new terminal and navigate to the `frontend` directory:
```bash
cd frontend
```

Install the required npm packages:
```bash
npm install
```

Start the React development server:
```bash
npm start
```
*(Your frontend will launch at `http://localhost:3000`)*

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.