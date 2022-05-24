import React, { useEffect, useState } from "react";
import "./ApplicationInfo.scss";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import {
  PersonalDetailsEdit,
  UpdateDocumentsEdit,
  MiscellaneousQuestionsEdit,
  MonthlyExpensesEdit,
  HomeFurnitureEdit,
  DependentDetailsEdit,
  MedicalGrantEdit,
  EarningMemberEdit,
  SkillDetailsEdit,
  AdministrationDetails,
  SurveyDetails,
} from "./Sections";
// import { MockData } from "../../MockData";

const ApplicationInfo = ({ getData }) => {
  // const { id } = useParams();
  const location = useLocation();
  let applicationData = location.state.info;
  let surveyData = location.state.surveyInfo;

  const updateData = (data) => {
    axios({
      method: "POST",
      url: "https://hs-foundation.herokuapp.com/update",
      data: data,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          getData();
        }
      })
      .catch((error) => console.error("error", error));
  };

  return (
    <div id="ApplicationInfo" className="ApplicationInfo">
      <div className="apllicationDetails">Application Details</div>
      <div className="apllicationId">Application ID: {applicationData?.id}</div>
      <div className="availableData">
        <PersonalDetailsEdit data={applicationData?.personalDetails} />
        <UpdateDocumentsEdit data={applicationData?.updateDocuments} />
        <MiscellaneousQuestionsEdit
          data={applicationData?.miscellaneousQuestions}
        />
        <MonthlyExpensesEdit data={applicationData?.monthlyExpenses} />
        <HomeFurnitureEdit data={applicationData?.homeFurniture} />
        <DependentDetailsEdit data={applicationData?.dependentDetails} />
        {applicationData.personalDetails.category !== "Financial" && (
          <MedicalGrantEdit
            data={applicationData?.medicalGrant}
            applicationData={applicationData}
          />
        )}
        <EarningMemberEdit data={applicationData?.earningMembersDetails} />
        <SkillDetailsEdit data={applicationData?.skillDetails} />
        <AdministrationDetails data={applicationData?.administrationDetails} />
        <div className="btnContainer">
          <Button
            id="updateBtn"
            className="updateBtn"
            variant="outlined"
            type="submit"
            onClick={() => updateData(applicationData)}
          >
            Update
          </Button>
        </div>
      </div>
      <div className="ruler"></div>
      <SurveyDetails surveyData={surveyData} />
    </div>
  );
};

export default ApplicationInfo;
