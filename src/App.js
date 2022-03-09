import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/layout/Header";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Dashboard from "./components/dashboard/Dashboard";
import { useEffect, useState } from "react";
import Home from "./components/home/Home";

function App() {
  const navigate = useNavigate();
  // const [status, setStatus] = useState(false);
  // const checkLocalStorage = () => {
  //   const ls = localStorage.getItem("user-info");
  //   console.log(ls);
  //   if (ls) {
  //     setStatus(true);
  //     console.log("true");
  //     navigate("/dashboard");
  //   } else {
  //     console.log("False");
  //   }
  // };
  // useEffect(() => {
  //   checkLocalStorage();
  // }, []);

  return (
    <>
      {/* <Header status={status} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {/* <Notification /> */}
    </>
  );
}

export default App;
