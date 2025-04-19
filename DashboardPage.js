import React, { useEffect, useState } from "react";
import axios from "../utils/axios"; // 👈 using the axios file we created

const DashboardPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("/users/me") // 👈 backend route (you'll make this next)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Auth failed:", err.response?.data));
  }, []);

  return (
    <div>
      <h2>🏠 Dashboard</h2>
      {user ? (
        <p>Welcome, {user.username}!</p>
      ) : (
        <p>Loading user info or not logged in...</p>
      )}
    </div>
  );
};

export default DashboardPage;
