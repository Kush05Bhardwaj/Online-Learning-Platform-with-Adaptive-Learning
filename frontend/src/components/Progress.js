import { useEffect, useState } from "react";
import api from "../api";

function Progress() {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    api.get("/progress")
      .then(res => setProgress(res.data.data));
  }, []);

  return (
    <div>
      <h2>Progress</h2>
      {progress.map((p, index) => (
        <p key={index}>
          {p[0]} - {p[1]} → {p[2]}%
        </p>
      ))}
    </div>
  );
}

export default Progress;