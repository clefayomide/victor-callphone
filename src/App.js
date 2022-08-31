import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Protected from "./components/protected-route/Protected";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-full w-screen bg-body font-Rubik">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Protected />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
