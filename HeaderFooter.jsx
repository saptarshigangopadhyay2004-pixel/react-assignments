import React from "react";

function HeaderFooter({ children }) {
  return (
    <div className="app">

      <header className="header">
        <h1>Student Information Portal</h1>
        <p>Student Management System</p>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <p>
          © 2026 Student Information Portal
        </p>
      </footer>

    </div>
  );
}

export default HeaderFooter;