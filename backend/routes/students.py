from app import app, mysql
from flask import jsonify

@app.route('/students', methods=['GET'])
def get_students():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Students")
    data = cur.fetchall()

    students = []
    for row in data:
        students.append({
            "id": row[0],
            "name": row[1],
            "email": row[2],
            "age": row[3]
        })

    return jsonify(students)