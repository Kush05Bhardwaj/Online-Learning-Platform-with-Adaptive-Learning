import Students from "../components/Students";
import Courses from "../components/Courses";
import Progress from "../components/Progress";

function Dashboard() {
  return (
    <div>
      <h1 className="dashboard-header">Learning Dashboard 🚀</h1>
      <div className="dashboard-content">
        <Students />
        <Courses />
        <Progress />
      </div>
    </div>
  );
}

export default Dashboard;