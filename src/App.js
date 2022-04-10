import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { TopNavBar } from "./Components";
import { Home, Application, ApplicationList, ContactUs } from "./Features";

const App = () => {
  return (
    <div className="App">
      <Router>
      <TopNavBar />
      <Routes>
          <Route path="/application" element={<Application />} />
          <Route path="/applicationList" element={<ApplicationList />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/" element={<Home />} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;
