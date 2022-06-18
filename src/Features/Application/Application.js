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
import { Loader } from "../../Components";

const Application = ({
  addData,
  getData,
  addResponse,
  showLoading,
  addSuccess,
  addError,
  removeAddAlert,
}) => {
  const [activeFormIndex, setActiveFormIndex] = useState(0);
  const [collectiveData, setCollectiveData] = useState({});
  // const [successAlert, setSuccessAlert] = useState(false);
  // const [errorAlert, setErrorAlert] = useState(false);

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
    });
    // setSuccessAlert(true);

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
    // setSuccessAlert(false);
    removeAddAlert();
  };

  const closeErrorAlert = () => {
    // setErrorAlert(false);
    removeAddAlert();
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
      {showLoading && <Loader />}
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
      {addSuccess || addError ? (
        <div>
          <Alert
            onClose={() =>
              addSuccess ? closeSucessAlert() : closeErrorAlert()
            }
            severity= {addSuccess ? 'success' : (addError && 'error')}
          >
            {addSuccess && "Your request has been processed successfully!"}
            {addError && "Something went Wrong! Please try Again!!"}
          </Alert>
          {addResponse?.data?.id && (
            <div className="successId">Application created with id: {addResponse.data.id}</div>
          )}
        </div>
      ) : (
        stepsForm[activeFormIndex]
      )}
      {/* {addSuccess ? (
        <div>
          <Alert onClose={() => closeSucessAlert()}>
            Your request has been processed successfully!
          </Alert>
          {addResponse?.data?.id && (
            <div>Application created with id: {addResponse.data.id}</div>
          )}
        </div>
      ) : (
        stepsForm[activeFormIndex]
      )}
      {addError ? (
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
