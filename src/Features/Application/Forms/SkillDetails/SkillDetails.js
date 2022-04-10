import React from "react";
import "./SkillDetails.scss";
import Button from "@mui/material/Button";

const SkillDetails = () => {
  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div id="SkillDetails" className="SkillDetails">
      <div className="formHeader">Skill Details</div>
      <form className="SkillDetailsForm" onSubmit={submitForm}>
        <Button
          id="nextBtn"
          className="nextBtn"
          variant="contained"
          type="submit"
        >
          Next
        </Button>
      </form>
    </div>
  );
};

export default SkillDetails;
