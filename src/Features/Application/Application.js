import React, { useState } from "react";
import "./Application.scss";
import { Stepper, Step, StepLabel } from "@mui/material";
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
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const nextForm = () => {
    setActiveFormIndex((prev) => prev + 1);
  };
  const backForm = () => {
    setActiveFormIndex((prev) => prev - 1);
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
    <UpdateDocuments nextForm={nextForm} backForm={backForm} />,
    <MiscellaneousQuestions nextForm={nextForm} backForm={backForm} />,
    <MonthlyExpenses nextForm={nextForm} backForm={backForm} />,
    <HomeFurniture nextForm={nextForm} backForm={backForm} />,
    <DependentDetails nextForm={nextForm} backForm={backForm} />,
    <MedicalGrant nextForm={nextForm} backForm={backForm} />,
    <EarningMember nextForm={nextForm} backForm={backForm} />,
    <SkillDetails backForm={backForm} />,
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
