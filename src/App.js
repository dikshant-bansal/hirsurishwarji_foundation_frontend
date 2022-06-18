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
  const [showLoader, setShowLoader] = useState(false);
  const [addSuccess, setAddSuccess] = useState(undefined);
  const [addError, setAddError] = useState(undefined);

  useEffect(() => {
    getData();
  }, []);

  const addData = (newData) => {
    setAddResponse({});
    setShowLoader(true);
    setAddError(undefined);
    setAddSuccess(undefined);
    axios({
      method: "POST",
      url: "https://hs-foundation.herokuapp.com/create",
      data: newData,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          getData();
          setAddResponse(response);
          setShowLoader(false);
          setAddSuccess(true);
          setAddError(false);
        } else{
          setAddSuccess(false);
          setAddError(true);
        }
      })
      .catch((error) => {
        console.error("error", error);
        setShowLoader(false);
        setAddSuccess(false);
        setAddError(true);
      });
  };

  const getData = () => {
    setShowLoader(true);
    axios({
      method: "GET",
      url: "https://hs-foundation.herokuapp.com/fetch/views",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          const allApplications = response.data;
          setData(allApplications.reverse());
          setShowLoader(false);
        }
      })
      .catch((error) => {
        console.error("error", error);
        setShowLoader(false);
      });
  };

  const removeAddAlert = () => {
    setAddSuccess(undefined);
    setAddError(undefined);
  }

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
                showLoading={showLoader}
                addSuccess={addSuccess}
                addError={addError}
                removeAddAlert={removeAddAlert}
              />
            }
          />
          <Route
            path="/applicationList"
            element={<ApplicationList data={data} showLoading={showLoader} />}
          />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route
            path="/application/:id"
            element={<ApplicationInfo getData={getData} />}
          />
          {/* <Route path="/survey/:id" element={<Survey />} /> */}
          <Route path="/approve/:id" element={<Approve getData={getData} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
