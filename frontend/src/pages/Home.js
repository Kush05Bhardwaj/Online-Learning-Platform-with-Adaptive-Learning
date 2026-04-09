import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="dashboard-header">Welcome to Adaptive Learning</h1>
        <p className="hero-subtitle">
          Experience a personalized journey to master your skills with real-time progress tracking.
        </p>
        <Link to="/dashboard" className="btn btn-large">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Home;