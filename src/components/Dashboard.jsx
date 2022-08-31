import DbCard from "../layout/DbCard";
import { useDispatch } from "react-redux";
// import authentication from "../feature/auth";
import { logout } from "../slice/user/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    // logout endpoin returns 404
    // authentication("logout")().then((res) => {
    //   if (res) {
    //   }
    // });
  };
  return (
    <DbCard>
      <div className="w-fit">
        <h4 className="font-medium text-2xl">Hi John!</h4>
        <p className="text-base font-base mt-3">
          Thank you for using our service. Logout{" "}
        </p>
        <button
          className="mt-6 border-none outline-none bg-none text-sky-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </DbCard>
  );
};

export default Dashboard;
