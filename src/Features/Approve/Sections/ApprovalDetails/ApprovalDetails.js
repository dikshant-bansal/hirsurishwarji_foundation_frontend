import React, { useState } from "react";
import "./ApprovalDetails.scss";
import { TextField, Checkbox, Button } from "@mui/material";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const ApprovalDetails = ({ approvalInfo, getData, applicationInfo }) => {
  const navigate = useNavigate();

  let formData = {
    amountApproved: approvalInfo?.amountApproved,
    amountNeeded: approvalInfo?.amountNeeded,
    approvalDate: approvalInfo?.approvalDate
      ? new Date(approvalInfo.approvalDate)
      : new Date(),
    approvedBy: approvalInfo?.approvedBy,
    comments: approvalInfo?.comments,
    id: approvalInfo?.id,
  };

  const [btnEnabled, setBtnEnabled] = useState(false);
  const [data, setData] = useState({...formData});

  const handleChange = (event) => {
    const { name, value } = event.target;
    let formDataCopy = { ...data };
    formDataCopy[name] = value;
    setData(formDataCopy);
  };

  const setDate = (date) => {
    let formDataCopy = { ...data };
    formDataCopy["approvalDate"] = date;
    setData(formDataCopy);
  };

  const runApproveReject = (approve) => {
    axios({
      method: "POST",
      url: "https://hs-foundation.herokuapp.com/approval/update",
      data: { ...data, approved: `${approve ? true : false}` },
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          getData();
          navigate(`/applicationList`);
          // axios({
          //   method: "POST",
          //   url: "https://hs-foundation.herokuapp.com/update",
          //   data: {
          //     ...data,
          //     approved: `${approve ? true : false}`
          //   },
          //   headers: { "Content-Type": "application/json" },
          // }).then((res) => {
          //   if (res.status === 200) {
          //     getData();
          //     navigate(`/applicationList`)
          //   }
          // });
        }
      })
      .catch((error) => console.error("error", error));
  };

  return (
    <div id="ApprovalDetails" className="ApprovalDetails">
      <div className="formHeader">Approval Details</div>
      <div className="approvalDetailsForm">
        <TextField
          id="approvedByInput"
          className="formElements"
          label="Approved By:"
          variant="outlined"
          name="approvedBy"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.approvedBy}
        />
        <TextField
          id="amountNeededInput"
          className="formElements"
          label="Amount Needed"
          variant="outlined"
          name="amountNeeded"
          type="number"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.amountNeeded}
        />
        <TextField
          id="amountApprovedInput"
          className="formElements"
          label="Amount Approved"
          variant="outlined"
          name="amountApproved"
          type="number"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.amountApproved}
        />
        <TextField
          id="commentsInput"
          className="formElements"
          label="Comments"
          variant="outlined"
          name="comments"
          multiline
          rows={4}
          onChange={(event) => handleChange(event)}
          defaultValue={data?.comments}
        />
        <div id="formElements" className="formElements">
          Date:
          <DatePicker
            selected={data.approvalDate}
            onChange={(date) => setDate(date)}
            name="approvalDate"
          />
        </div>
        <div>
          <Checkbox onChange={() => setBtnEnabled((prev) => !prev)} />
          <span>
            Above details for Applicant are correct and ready for Approve.
          </span>
        </div>
        <div className="btnContainer">
          <Button
            id="rejectBtn"
            className="rejectBtn"
            variant="outlined"
            color="error"
            disabled={!btnEnabled}
            onClick={() => runApproveReject(false)}
          >
            Reject
          </Button>
          <Button
            id="approveBtn"
            className="approveBtn"
            variant="outlined"
            type="submit"
            onClick={() => runApproveReject(true)}
            disabled={!btnEnabled}
          >
            Approve
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalDetails;
