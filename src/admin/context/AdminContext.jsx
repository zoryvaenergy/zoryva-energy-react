import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export function AdminProvider({ children }) {

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <AdminContext.Provider
      value={{
        selectedUser,
        setSelectedUser,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}