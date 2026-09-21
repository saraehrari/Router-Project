import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  marginRight: 12,
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
});

function Navbar({ isAuth, onLogout }) {
  return (
    <nav
      style={{
        padding: 12,
        borderBottom: "1px solid #ddd",
      }}
    >
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>

      <NavLink to="/products" style={linkStyle}>
        Products
      </NavLink>

      <NavLink to="/checkout" style={linkStyle}>
        Checkout
      </NavLink>

      <span style={{ marginLeft: 20 }}>
        {isAuth ? (
          <button onClick={onLogout}>
            Logout
          </button>
        ) : (
          <span style={{ opacity: 0.7 }}>
            Not logged in
          </span>
        )}
      </span>
    </nav>
  );
}

export default Navbar;