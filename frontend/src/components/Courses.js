import { useEffect, useState } from "react";
import api from "../api";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/courses")
      .then(res => setCourses(res.data.data));
  }, []);

  return (
    <div className="card">
      <h2>Courses</h2>
      <ul className="item-list">
        {courses.map(c => (
          <li key={c[0]}>
            <strong>{c[1]}</strong> ({c[2]})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;