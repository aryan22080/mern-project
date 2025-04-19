import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f2f2f2" }}>
      <Link to="/" style={{ marginRight: "15px" }}>🏠 Home</Link>
      <Link to="/login" style={{ marginRight: "15px" }}>🔐 Login</Link>
      <Link to="/register" style={{ marginRight: "15px" }}>📝 Register</Link>
      <Link to="/auction">🏷️ Auctions</Link>
    </nav>
  );
};

export default Navbar;
