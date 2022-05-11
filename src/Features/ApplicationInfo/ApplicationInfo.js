import React from "react";
import "./ApplicationInfo.scss";
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
import { MockData } from "../../MockData";

const ApplicationInfo = () => {
  const applicationData = MockData[0];

  return (
    <div id="ApplicationInfo" className="ApplicationInfo">
      <div className="apllicationDetails">Application Details</div>
      <div className="availableData">
        <PersonalDetailsEdit data={applicationData?.personalDetails} />
        <UpdateDocumentsEdit data={applicationData?.updateDocuments} />
        <MiscellaneousQuestionsEdit
          data={applicationData?.miscellaneousQuestions}
        />
        <MonthlyExpensesEdit data={applicationData?.monthlyExpenses} />
        <HomeFurnitureEdit data={applicationData?.homeFurniture} />
        <DependentDetailsEdit data={applicationData?.dependentDetails} />
        <MedicalGrantEdit data={applicationData?.medicalGrant} />
        <EarningMemberEdit data={applicationData?.earningMember} />
        <SkillDetailsEdit data={applicationData?.skillDetails} />
        <AdministrationDetails data={applicationData?.administrationDetails} />
        <div className="btnContainer">
          <Button
            id="updateBtn"
            className="updateBtn"
            variant="outlined"
            type="submit"
          >
            Update
          </Button>
        </div>
      </div>
      {/* <div className="ruler"></div> */}
      {/* <SurveyDetails /> */}
    </div>
  );
};

export default ApplicationInfo;
