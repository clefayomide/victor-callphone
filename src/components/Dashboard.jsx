import DbCard from "../layout/DbCard";

const Dashboard = () => {
  return (
    <DbCard>
      <div className="w-fit">
        <h4 className="font-medium text-2xl">Hi John!</h4>
        <p className="text-base font-base mt-3">Thank you for using our service. Logout </p>
        <button className="mt-6 border-none outline-none bg-none text-sky-600">Logout</button>
      </div>
    </DbCard>
  );
};

export default Dashboard;
