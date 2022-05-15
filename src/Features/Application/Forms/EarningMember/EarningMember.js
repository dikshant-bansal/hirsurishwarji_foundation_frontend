import React from "react";
import "./EarningMember.scss";
import { Button } from "@mui/material";
import EarningMemberTable from "./EarningMemberTable/EarningMemberTable";

const EarningMember = ({ nextForm, backForm, data }) => {

  let formData = {
    earningMembersList: data?.earningMembersList || null,
  };

  const submitForm = (event) => {
    nextForm('earningMembersDetails', formData);
    event.preventDefault();
  };

  const earningMembersList = (earningMembersList) => {
    formData.earningMembersList = earningMembersList
  }

  return (
    <div id="EarningMember" className="EarningMember">
      <div className="formHeader">Earning Member Details</div>
      <form className="EarningMemberForm" onSubmit={submitForm}>
        <EarningMemberTable earningMembersList={earningMembersList} list={data?.earningMembersList}/>
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
            id="nextBtn"
            className="nextBtn"
            variant="outlined"
            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EarningMember;
