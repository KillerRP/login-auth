import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const btnLogout = () => {
    localStorage.removeItem("user-info");
    navigate("/");
  };
  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-primary mt-2" onClick={btnLogout}>
        Logout
      </button>
    </div>
  );
};

export default DashboardHeader;
