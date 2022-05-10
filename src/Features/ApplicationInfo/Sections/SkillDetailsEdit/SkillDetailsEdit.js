import React from "react";
import "./SkillDetailsEdit.scss";
// import { TextField, Button } from "@mui/material";
import SkillDetailsTable from "./SkillDetailsTable/SkillDetailsTable";

const SkillDetailsEdit = ({ data }) => {

  let formData = {
    skillDetailsList: data?.skillDetailsList,
  };

  const skillList = (skillList) => {
    formData.skillDetailsList = skillList;
  }

  return (
    <div id="SkillDetailsEdit" className="SkillDetailsEdit">
      <div className="formHeader">Skill Details</div>
      <div className="SkillDetailsForm">
        <SkillDetailsTable skillList={skillList} list={formData?.skillList}/>
        {/* <div className="administrativeDetails">
          <div className="formHeader">Administrative Details</div>
          <TextField
            id="referredByInput"
            className="formElements"
            label="Referred By:"
            variant="outlined"
            name='referredBy'
            onChange={(event) => handleChange(event)}
            value={administrativeDetailsData?.referredBy}
            required
          />
          <TextField
            id="addressOfReferralInput"
            className="formElements"
            label="Address of Referral:"
            variant="outlined"
            name='address'
            onChange={(event) => handleChange(event)}
            value={administrativeDetailsData?.address}
            required
          />
        </div> */}
      </div>
    </div>
  );
};

export default SkillDetailsEdit;
