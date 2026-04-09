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
    <div>
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