import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Error404 from "./components/Error404";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./styles.css";

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<TaskList />} /> {/* Added TaskList route */}
        <Route path="/tasks/new" element={<TaskForm />} />{" "}
        {/* Added TaskForm route */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
