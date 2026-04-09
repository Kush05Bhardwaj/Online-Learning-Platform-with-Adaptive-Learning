import { useEffect, useState } from "react";
import api from "../api";

function Progress() {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    api.get("/progress")
      .then(res => setProgress(res.data.data));
  }, []);

  return (
    <div className="card">
      <h2>Progress</h2>
      <ul className="item-list">
        {progress.map((p, index) => (
          <li key={index}>
            <strong>{p[0]}</strong> - {p[1]} → {p[2]}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Progress;