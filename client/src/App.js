import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Error404 from "./components/Error404";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import UpdateTask from "./components/UpdateTask"; // Import UpdateTask
import DeleteTask from "./components/DeleteTask"; // Import DeleteTask
import Navbar from "./components/Navbar"; // Import Navbar
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar component */}
      <Routes>
        <Route path="/" element={<TaskList />} />{" "}
        {/* Ensure TaskList is on home route */}
        <Route path="/tasks/new" element={<TaskForm />} />
        <Route path="/tasks/update" element={<UpdateTask />} />{" "}
        {/* Remove task_id from URL */}
        <Route path="/tasks/delete" element={<DeleteTask />} />{" "}
        {/* Add DeleteTask route */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
