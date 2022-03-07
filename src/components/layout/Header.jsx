import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="d-flex justify-content-center">
      <ul className="list-group d-flex flex-row">
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none">
            Login
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/register" className="text-decoration-none">
            Register
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/dashboard" className="text-decoration-none">
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
