import React, { useState } from "react";
import "./Application.scss";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
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

const Application = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(0);
  const nextForm = () => {
    setActiveFormIndex((prev) => prev + 1);
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
    <PersonalDetails nextForm={nextForm} />,
    <UpdateDocuments nextForm={nextForm} />,
    <MiscellaneousQuestions nextForm={nextForm} />,
    <MonthlyExpenses nextForm={nextForm} />,
    <HomeFurniture nextForm={nextForm} />,
    <DependentDetails nextForm={nextForm} />,
    <MedicalGrant nextForm={nextForm} />,
    <EarningMember nextForm={nextForm} />,
    <SkillDetails />,
  ];

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
      {stepsForm[activeFormIndex]}
    </div>
  );
};

export default Application;
