import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { TopNavBar } from "./Components";
import {
  Home,
  Application,
  ApplicationInfo,
  ApplicationList,
  ContactUs,
  Survey,
  Approve,
} from "./Features";
// import { MockData } from "./MockData";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [addResponse, setAddResponse] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const addData = (newData) => {
    setAddResponse({});
    axios({
      method: "POST",
      url: "https://hs-foundation.herokuapp.com/create",
      data: newData,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 201) {
          getData();
          setAddResponse(response);
        }
      })
      .catch((error) => console.error("error", error));
  };

  const getData = () => {
    axios({
      method: "GET",
      url: "https://hs-foundation.herokuapp.com/fetch/views",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          const allApplications = response.data;
          setData(allApplications.reverse());
        }
      })
      .catch((error) => console.error("error", error));
  };

  return (
    <div className="App">
      <Router>
        <TopNavBar />
        <Routes>
          <Route
            path="/application"
            element={
              <Application
                addData={addData}
                getData={getData}
                addResponse={addResponse}
              />
            }
          />
          <Route
            path="/applicationList"
            element={<ApplicationList data={data} />}
          />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/application/:id" element={<ApplicationInfo getData={getData}/>} />
          {/* <Route path="/survey/:id" element={<Survey />} /> */}
          <Route path="/approve/:id" element={<Approve getData={getData}/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
