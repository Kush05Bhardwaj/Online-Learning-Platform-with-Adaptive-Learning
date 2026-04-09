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
    <div>
      <AddStudent onStudentAdded={fetchStudents} />

      <h2>Students</h2>
      {students.map(s => (
        <div key={s.id}>
          <p>{s.name} | {s.email} | Age: {s.age}</p>
        </div>
      ))}
    </div>
  );
}

export default Students;