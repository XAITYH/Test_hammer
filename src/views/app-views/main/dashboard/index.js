import React, { useEffect } from "react";
import userService from "services/UserService";

const Dashboard = () => {
  useEffect(() => {
    async function fetchUsers() {
      try {
        const userData = await userService.getUsers();

        console.log(userData);
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="text-center">
      <hr />
      <span>NO INFO</span>
      <hr />
    </div>
  );
};

export default Dashboard;
