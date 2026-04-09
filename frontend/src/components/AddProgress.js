import { useState } from "react";
import api from "../api";

function AddProgress({ onProgressAdded }) {
  const [form, setForm] = useState({
    student_id: "",
    course_id: "",
    completion_percentage: ""
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
      await api.post("/add-progress", {
        student_id: Number(form.student_id),
        course_id: Number(form.course_id),
        completion_percentage: Number(form.completion_percentage)
      });

      alert("Progress Added 🚀");

      setForm({ student_id: "", course_id: "", completion_percentage: "" });

      if (onProgressAdded) onProgressAdded();

    } catch (err) {
      console.error(err);
      alert("Error adding progress");
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Add Progress</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="student_id"
          type="number"
          placeholder="Student ID"
          value={form.student_id}
          onChange={handleChange}
          required
        />
        <input
          name="course_id"
          type="number"
          placeholder="Course ID"
          value={form.course_id}
          onChange={handleChange}
          required
        />
        <input
          name="completion_percentage"
          type="number"
          placeholder="Completion % (e.g. 50)"
          value={form.completion_percentage}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Progress</button>
      </form>
    </div>
  );
}

export default AddProgress;