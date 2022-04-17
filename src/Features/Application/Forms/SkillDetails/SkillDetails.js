import React from "react";
import "./SkillDetails.scss";
import { TextField, Button } from "@mui/material";
import SkillDetailsTable from "./SkillDetailsTable/SkillDetailsTable";

const SkillDetails = ({ backForm }) => {
  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div id="SkillDetails" className="SkillDetails">
      <div className="formHeader">Skill Details</div>
      <form className="SkillDetailsForm" onSubmit={submitForm}>
        <SkillDetailsTable />
        <div className="administrativeDetails">
          <div className="formHeader">Administrative Details</div>
          <TextField
            id="referredByInput"
            className="formElements"
            label="Referred By:"
            variant="outlined"
            required
          />
          <TextField
            id="addressOfReferralInput"
            className="formElements"
            label="Address of Referral:"
            variant="outlined"
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
