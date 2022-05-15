import React from "react";
import "./SkillDetails.scss";
import { TextField, Button } from "@mui/material";
import SkillDetailsTable from "./SkillDetailsTable/SkillDetailsTable";

const SkillDetails = ({ backForm, submitFormDetails, skillDetailsData, administrativeDetailsData }) => {

  let skillDetails = {
    skillDetailsList: skillDetailsData?.skillDetailsList || null,
  };

  let administrativeDetails = {
    referredBy: administrativeDetailsData?.referredBy || null,
    address: administrativeDetailsData?.address || null,
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    administrativeDetails[name] = value
  }

  const submitForm = (event) => {
    event.preventDefault();
    submitFormDetails(skillDetails, administrativeDetails);
  };

  const skillList = (skillList) => {
    skillDetails.skillDetailsList = skillList;
  }

  return (
    <div id="SkillDetails" className="SkillDetails">
      <div className="formHeader">Skill Details</div>
      <form className="SkillDetailsForm" onSubmit={submitForm}>
        <SkillDetailsTable skillList={skillList} list={skillDetailsData?.skillList}/>
        <div className="administrativeDetails">
          <div className="formHeader">Administrative Details</div>
          <TextField
            id="referredByInput"
            className="formElements"
            label="Referred By:"
            variant="outlined"
            name='referredBy'
            onChange={(event) => handleChange(event)}
            defaultValue={administrativeDetailsData?.referredBy}
            required
          />
          <TextField
            id="addressOfReferralInput"
            className="formElements"
            label="Address of Referral:"
            variant="outlined"
            name='address'
            onChange={(event) => handleChange(event)}
            defaultValue={administrativeDetailsData?.address}
            required
          />
        </div>
        <div className="btnContainer">
          <Button
            id="backBtn"
            className="backBtn"
            variant="outlined"
            color="error"
            onClick={backForm}
          >
            Back
          </Button>
          <Button
            id="submitBtn"
            className="submitBtn"
            variant="outlined"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SkillDetails;
