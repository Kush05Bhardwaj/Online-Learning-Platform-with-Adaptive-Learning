import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Simple Navigation */}
        <nav className="navbar">
          <Link to="/" className="nav-brand">LearnApp</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </nav>

        {/* Routes Definition */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;