import React from "react";
import "./EarningMember.scss";
import Button from "@mui/material/Button";

const EarningMember = ({ nextForm }) => {
  const submitForm = (event) => {
    nextForm();
    event.preventDefault();
  };

  return (
    <div id="EarningMember" className="EarningMember">
      <div className="formHeader">Earning Member Details</div>
      <form className="EarningMemberForm" onSubmit={submitForm}>
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

export default EarningMember;
