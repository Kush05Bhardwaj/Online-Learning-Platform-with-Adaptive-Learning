import { useEffect, useState } from "react";
import api from "../api";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get("/students")
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="card">
      <h2>Students</h2>
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