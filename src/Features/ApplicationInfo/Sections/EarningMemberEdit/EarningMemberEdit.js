import React from "react";
import "./EarningMemberEdit.scss";
import EarningMemberTable from "./EarningMemberTable/EarningMemberTable";

const EarningMemberEdit = ({ data }) => {

  let formData = {
    earningMembersList: data?.earningMembersList
  };

  const earningMembersList = (earningMembersList) => {
    data.earningMembersList = earningMembersList
  }

  return (
    <div id="EarningMemberEdit" className="EarningMemberEdit">
      <div className="formHeader">Earning Member Details</div>
      <div className="EarningMemberForm">
        <EarningMemberTable earningMembersList={earningMembersList} list={formData?.earningMembersList}/>
      </div>
    </div>
  );
};

export default EarningMemberEdit;
