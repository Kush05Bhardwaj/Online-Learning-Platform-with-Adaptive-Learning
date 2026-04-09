import { useEffect, useState } from "react";
import api from "../api";
import AddCourse from "./AddCourse";

function Courses() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    api.get("/courses")
      .then(res => setCourses(res.data.data));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="card">
      <AddCourse onCourseAdded={fetchCourses} />

      <h2 style={{ marginTop: '20px' }}>Courses</h2>
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