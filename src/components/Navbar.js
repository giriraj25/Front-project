import { Link } from "react-router-dom";

function Navbar({ isAuthenticated, username, onLogout }) {
  return (
    <nav className="navbar">
      <h2>SimplyBuyers</h2>
      <ul>
        <li>{isAuthenticated ? <></> : <Link to="/login">Login</Link>}</li>
        {isAuthenticated ? (
          <>
            <li>
              <span>Welcome, {username}</span>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/">Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
