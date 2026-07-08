function AdminLayout({ sidebar, topbar, children }) {
  return (
    <div className="admin-layout">

      <aside className="admin-sidebar">
        {sidebar}
      </aside>

      <div className="admin-main">

        <header className="admin-topbar">
          {topbar}
        </header>

        <main className="admin-content">
          {children}
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;