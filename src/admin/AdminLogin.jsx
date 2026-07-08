
import { useEffect, useState } from "react";
import { checkAdminExists } from "./services/adminSetup/checkAdminExists";

function AdminLogin() {

  const [adminExists, setAdminExists] = useState(null);

  useEffect(() => {

    async function checkAdmin() {

      const exists = await checkAdminExists();

      console.log("Admin Exists :", exists);

      setAdminExists(exists);

    }

    checkAdmin();

  }, []);

  if (adminExists === null) {

    return <h2>Checking Admin...</h2>;

  }

  if (!adminExists) {

    return (

      <div>

        <h2>Create Super Admin</h2>

        <p>No Admin Found.</p>

      </div>

    );

  }

  return (

    <div>

      <h2>Admin Login</h2>

      <p>Super Admin Found.</p>

    </div>

  );

}

export default AdminLogin;