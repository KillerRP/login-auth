import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Notification from "./components/layout/Notification";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {/* <Notification /> */}
    </>
  );
}

export default App;
