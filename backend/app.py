from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS
from flask import request

app = Flask(__name__)
CORS(app)

app.config.from_pyfile('config.py')

mysql = MySQL(app)

@app.route('/')
def home():
    return "Backend Running 🚀"

@app.route('/courses')
def get_courses():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Courses")
    data = cur.fetchall()
    return {"data": data}

@app.route('/progress')
def get_progress():
    cur = mysql.connection.cursor()
    cur.execute("""
        SELECT s.name, c.course_name, p.completion_percentage
        FROM Progress p
        JOIN Students s ON p.student_id = s.student_id
        JOIN Courses c ON p.course_id = c.course_id
    """)
    data = cur.fetchall()
    return {"data": data}

@app.route('/add-student', methods=['POST'])
def add_student():
    data = request.json

    cur = mysql.connection.cursor()
    cur.execute(
        "INSERT INTO Students (student_id, name, email, age) VALUES (%s, %s, %s, %s)",
        (data['id'], data['name'], data['email'], data['age'])
    )
    mysql.connection.commit()

    return {"message": "Student added successfully"}

@app.route('/add-course', methods=['POST'])
def add_course():
    data = request.json
    cur = mysql.connection.cursor()
    # Assuming course_id, course_name, difficulty_level
    cur.execute(
        "INSERT INTO Courses (course_id, course_name, difficulty_level) VALUES (%s, %s, %s)",
        (data['id'], data['course_name'], data['difficulty_level'])
    )
    mysql.connection.commit()
    return {"message": "Course added successfully"}

@app.route('/add-progress', methods=['POST'])
def add_progress():
    data = request.json
    cur = mysql.connection.cursor()
    # Assuming student_id, course_id, completion_percentage
    cur.execute(
        "INSERT INTO Progress (student_id, course_id, completion_percentage) VALUES (%s, %s, %s)",
        (data['student_id'], data['course_id'], data['completion_percentage'])
    )
    mysql.connection.commit()
    return {"message": "Progress added successfully"}

# import routes
from routes.students import *

import os

if __name__ == "__main__":
    debug_mode = os.environ.get("FLASK_ENV") == "development"
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)), debug=debug_mode)