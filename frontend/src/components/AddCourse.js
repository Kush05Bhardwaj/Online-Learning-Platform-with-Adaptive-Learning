import { useState } from "react";
import api from "../api";

function AddCourse({ onCourseAdded }) {
  const [form, setForm] = useState({
    id: "",
    course_name: "",
    difficulty_level: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/add-course", {
        id: Number(form.id),
        course_name: form.course_name,
        difficulty_level: form.difficulty_level
      });

      alert("Course Added 🚀");

      setForm({ id: "", course_name: "", difficulty_level: "" });

      if (onCourseAdded) onCourseAdded();

    } catch (err) {
      console.error(err);
      alert("Error adding course");
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="id"
          type="number"
          placeholder="Course ID"
          value={form.id}
          onChange={handleChange}
          required
        />
        <input
          name="course_name"
          placeholder="Course Name"
          value={form.course_name}
          onChange={handleChange}
          required
        />
        <input
          name="difficulty_level"
          placeholder="Difficulty Level (e.g. Beginner)"
          value={form.difficulty_level}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourse;