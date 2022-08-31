import Logo from "../components/Logo";
import DashboardLayout from "../layout/Dashboard";
import DashboardComp from "../components/Dashboard";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="h-full">
        <Logo />
        <DashboardComp />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
