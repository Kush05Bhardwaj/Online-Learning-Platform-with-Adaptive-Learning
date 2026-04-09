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

app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True

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

# import routes
from routes.students import *

if __name__ == "__main__":
    app.run(debug=True)