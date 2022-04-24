import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { TopNavBar } from "./Components";
import { Home, Application, ApplicationInfo, ApplicationList, ContactUs } from "./Features";

const App = () => {
  const [data, setData] =useState([]);

  const addData = (newData) => {
    setData(newData);
  }

  return (
    <div className="App">
      <Router>
      <TopNavBar />
      <Routes>
          <Route path="/application" element={<Application addData={addData} data={data}/>} />
          <Route path="/application/info" element={<ApplicationInfo />} />
          <Route path="/applicationList" element={<ApplicationList data={data}/>} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/" element={<Home />} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;
