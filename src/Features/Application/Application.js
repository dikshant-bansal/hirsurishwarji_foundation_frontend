import React, { useState } from "react";
import "./Application.scss";
import { Stepper, Step, StepLabel, Alert } from "@mui/material";
import {
  PersonalDetails,
  UpdateDocuments,
  MiscellaneousQuestions,
  MonthlyExpenses,
  HomeFurniture,
  DependentDetails,
  MedicalGrant,
  EarningMember,
  SkillDetails,
} from "./Forms";

const Application = ({ addData }) => {
  const [activeFormIndex, setActiveFormIndex] = useState(0);
  const [collectiveData, setCollectiveData] = useState({});
  const [alert, setAlert] = useState(false);

  const nextForm = (formName, formData) => {
    let copyCollectiveData = { ...collectiveData };
    copyCollectiveData[formName] = formData;
    setCollectiveData({ ...copyCollectiveData });
    setActiveFormIndex((prev) => prev + 1);
  };

  const backForm = () => {
    setActiveFormIndex((prev) => prev - 1);
  };

  const submitFormDetails = (skillDetails, administrativeDetails) => {
    let copyCollectiveData = { ...collectiveData };
    copyCollectiveData.skillDetails = skillDetails;
    copyCollectiveData.administrativeDetails = administrativeDetails;
    setCollectiveData({ ...copyCollectiveData });
    addData({ ...copyCollectiveData});
    setAlert(true);
  };

  const closeAlert = () => {
    setActiveFormIndex(0);
    setAlert(false);
  };

  const steps = [
    "Personal Details",
    "Update Documents",
    "Miscellaneous Questions",
    "Monthly Expenses",
    "Home Furniture Details",
    "Dependent Details",
    "Medical Grant Details",
    "Earning Member Details",
    "Skill Details",
  ];

  const stepsForm = [
    <PersonalDetails nextForm={nextForm} data={collectiveData.personalDetails}/>,
    <UpdateDocuments nextForm={nextForm} backForm={backForm} data={collectiveData.updateDocuments}/>,
    <MiscellaneousQuestions nextForm={nextForm} backForm={backForm} data={collectiveData.miscellaneousQuestions}/>,
    <MonthlyExpenses nextForm={nextForm} backForm={backForm} data={collectiveData.monthlyExpenses}/>,
    <HomeFurniture nextForm={nextForm} backForm={backForm} data={collectiveData.homeFurniture}/>,
    <DependentDetails nextForm={nextForm} backForm={backForm} data={collectiveData.dependentDetails}/>,
    <MedicalGrant nextForm={nextForm} backForm={backForm} data={collectiveData.medicalGrant}/>,
    <EarningMember nextForm={nextForm} backForm={backForm} data={collectiveData.earningMembersDetails}/>,
    <SkillDetails backForm={backForm} submitFormDetails={submitFormDetails} skillDetailsData={collectiveData.skillDetails} administrativeDetailsData={collectiveData.administrativeDetails}/>,
  ];

  console.log(collectiveData);

  return (
    <div id="Application" className="Application">
      <div className="stepperContainer">
        <Stepper activeStep={activeFormIndex}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>     
      {alert ? (
        <Alert onClose={() => closeAlert()}>
          This is a success alert!
        </Alert>
      ) : (
        stepsForm[activeFormIndex]
      )}
    </div>
  );
};

export default Application;
