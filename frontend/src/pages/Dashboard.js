import Students from "../components/Students";
import Courses from "../components/Courses";
import Progress from "../components/Progress";

function Dashboard() {
  return (
    <div>
      <h1>Learning Dashboard 🚀</h1>

      <Students />
      <Courses />
      <Progress />
    </div>
  );
}

export default Dashboard;