import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AllCourses from "./components/Allcourses";
import FullStackDevelopment from "./components/FullStackDevelopment";
import DataScience from "./components/Datascience";
import CyberSecurity from "./components/CyberSecurity";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Courses</Link>
            </li>
            <li>
              <Link to="/full-stack-development">Full Stack Development</Link>
            </li>
            <li>
              <Link to="/data-science">Data Science</Link>
            </li>
            <li>
              <Link to="/cyber-security">Cyber Security</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<AllCourses />} />
          <Route
            path="/full-stack-development"
            element={<FullStackDevelopment />}
          />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
