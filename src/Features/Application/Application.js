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
  EducationGrant,
} from "./Forms";

const Application = ({ addData, getData, addResponse }) => {
  const [activeFormIndex, setActiveFormIndex] = useState(0);
  const [collectiveData, setCollectiveData] = useState({});
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const nextForm = (formName, formData) => {
    let copyCollectiveData = { ...collectiveData };
    copyCollectiveData[formName] = formData;
    setCollectiveData({ ...copyCollectiveData });
    if (
      copyCollectiveData?.personalDetails?.category === "Financial" &&
      activeFormIndex === 5
    ) {
      setActiveFormIndex((prev) => prev + 2);
    } else {
      setActiveFormIndex((prev) => prev + 1);
    }
    scrollToTop();
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const backForm = () => {
    if (
      collectiveData.personalDetails.category === "Financial" &&
      activeFormIndex === 7
    ) {
      setActiveFormIndex((prev) => prev - 2);
    } else {
      setActiveFormIndex((prev) => prev - 1);
    }
    scrollToTop();
  };

  const submitFormDetails = async (skillDetails, administrativeDetails) => {
    let copyCollectiveData = { ...collectiveData };
    copyCollectiveData.skillDetails = skillDetails;
    copyCollectiveData.administrationDetails = administrativeDetails;
    setCollectiveData({ ...copyCollectiveData });
    addData({
      ...copyCollectiveData,
      status: "Pending",
    });
    setSuccessAlert(true);

    // if (addDataResponse.status === 201) {
    //   setSuccessAlert(true);
    //   getData();
    // } else {
    //   setErrorAlert(true);
    // }
  };

  const closeSucessAlert = () => {
    setCollectiveData({});
    setActiveFormIndex(0);
    setSuccessAlert(false);
  };

  const closeErrorAlert = () => {
    setErrorAlert(false);
  };

  const steps = [
    "Personal Details",
    "Update Documents",
    "Miscellaneous Questions",
    "Monthly Expenses",
    "Home Furniture Details",
    "Dependent Details",
    "Grant Details",
    "Earning Member Details",
    "Other Details",
  ];

  const stepsForm = [
    <PersonalDetails
      nextForm={nextForm}
      data={collectiveData.personalDetails}
    />,
    <UpdateDocuments
      nextForm={nextForm}
      backForm={backForm}
      data={collectiveData.updateDocuments}
    />,
    <MiscellaneousQuestions
      nextForm={nextForm}
      backForm={backForm}
      data={collectiveData.miscellaneousQuestions}
    />,
    <MonthlyExpenses
      nextForm={nextForm}
      backForm={backForm}
      data={collectiveData.monthlyExpenses}
    />,
    <HomeFurniture
      nextForm={nextForm}
      backForm={backForm}
      data={collectiveData.homeFurniture}
    />,
    <DependentDetails
      nextForm={nextForm}
      backForm={backForm}
      data={collectiveData.dependentDetails}
    />,
    <MedicalGrant
      nextForm={nextForm}
      backForm={backForm}
      data={collectiveData.medicalGrant}
      collectiveData={collectiveData}
    />,
    // <EducationGrant
    //   nextForm={nextForm}
    //   backForm={backForm}
    //   data={collectiveData.medicalGrant}
    // />,
    <EarningMember
      nextForm={nextForm}
      backForm={backForm}
      data={collectiveData.earningMembersDetails}
    />,
    <SkillDetails
      backForm={backForm}
      submitFormDetails={submitFormDetails}
      skillDetailsData={collectiveData.skillDetails}
      administrativeDetailsData={collectiveData.administrativeDetails}
    />,
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
      {successAlert || errorAlert ? (
        <div>
          <Alert
            onClose={() =>
              successAlert ? closeSucessAlert() : closeErrorAlert()
            }
          >
            {`${
              successAlert
                ? "Your request has been processed successfully!"
                : "Something went Wrong! Please try Again!!"
            }`}
          </Alert>
          {addResponse?.data?.id && <div>Application created with id: {addResponse.data.id}</div>}
        </div>
      ) : (
        stepsForm[activeFormIndex]
      )}
      {/* {successAlert ? (
        <Alert onClose={() => closeSucessAlert()}>
          Your request has been processed successfully!
        </Alert>
      ) : (
        stepsForm[activeFormIndex]
      )}
      {errorAlert ? (
        <Alert onClose={() => closeErrorAlert()}>
          Something went Wrong! Please try Again!!
        </Alert>
      ) : (
        stepsForm[activeFormIndex]
      )} */}
    </div>
  );
};

export default Application;
