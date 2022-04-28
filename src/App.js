import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { TopNavBar } from "./Components";
import { Home, Application, ApplicationInfo, ApplicationList, ContactUs } from "./Features";
import { MockData } from "./MockData";
import axios from "axios";

const App = () => {
  const [data, setData] =useState(MockData);

  const addData = (newData) => {
    axios({
      method: 'POST',
      url: 'https://hs-foundation.herokuapp.com/create/application',
      data: newData,
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => console.log("response", response))
    .catch(error => console.log("error", error))
    // setData(newData);
  }

  return (
    <div className="App">
      <Router>
      <TopNavBar />
      <Routes>
          <Route path="/application" element={<Application addData={addData}/>} />
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
