import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Task Manager</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tasks/new">Create Task</Link>
        </li>
        <li>
          <Link to="/tasks/update">Update Task</Link>{" "}
          {/* Add Update Task link */}
        </li>
        <li>
          <Link to="/tasks/delete">Delete Task</Link>{" "}
          {/* Add Delete Task link */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
