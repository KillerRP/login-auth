import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    request();
  }, []);

  const checkAuth = () => {
    const ls = localStorage.getItem("user-info");
    console.log(ls);
    if (ls) {
      console.log("true");
    } else {
      navigate("/login");
      console.log("False");
    }
  };

  const request = () => {
    const token = localStorage.getItem("user-info");
    const config = {
      Authorization: `Bearer ${token}`,
    };

    console.log(config);

    axios
      .get(`https://admin.thebig.deals/rest/V1/customers/me`, {
        headers: config,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <DashboardHeader />
      Dashboard
    </>
  );
};
export default Dashboard;
