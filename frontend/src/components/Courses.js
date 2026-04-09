import { useEffect, useState } from "react";
import api from "../api";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/courses")
      .then(res => setCourses(res.data.data));
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      {courses.map(c => (
        <p key={c[0]}>
          {c[1]} ({c[2]})
        </p>
      ))}
    </div>
  );
}

export default Courses;