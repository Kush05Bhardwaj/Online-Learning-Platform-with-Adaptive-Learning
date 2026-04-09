import { useState } from "react";
import api from "../api";

function AddStudent({ onStudentAdded }) {
  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    age: ""
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
      await api.post("/add-student", {
        id: Number(form.id),
        name: form.name,
        email: form.email,
        age: Number(form.age)
      });

      alert("Student Added 🚀");

      setForm({ id: "", name: "", email: "", age: "" });

      if (onStudentAdded) onStudentAdded();

    } catch (err) {
      console.error(err);
      alert("Error adding student");
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="id"
          placeholder="ID"
          value={form.id}
          onChange={handleChange}
          required
        />
        <br />

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <br />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br />

        <input
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;