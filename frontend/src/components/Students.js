import { useEffect, useState } from "react";
import api from "../api";
import AddStudent from "./AddStudent";

function Students() {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    api.get("/students")
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="card">
      <AddStudent onStudentAdded={fetchStudents} />

      <h2 style={{ marginTop: '20px' }}>Students</h2>
      <ul className="item-list">
        {students.map(s => (
          <li key={s.id}>
            <strong>{s.name}</strong> | {s.email} | Age: {s.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Students;