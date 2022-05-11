import React from "react";
import "./ApprovalDetails.scss";
import { TextField, Checkbox, Button } from "@mui/material";
// import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const ApprovalDetails = () => {
  //   const [value, setValue] = React.useState(null);

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
        />
        <TextField
          id="amountNeededInput"
          className="formElements"
          label="Amount Needed"
          variant="outlined"
          name="amountNeeded"
          type="number"
        />
        <TextField
          id="amountApprovedInput"
          className="formElements"
          label="Amount Approved"
          variant="outlined"
          name="amountApproved"
          type="number"
        />
        <TextField
          id="commentsInput"
          className="formElements"
          label="Comments"
          variant="outlined"
          name="comments"
          multiline
          rows={4}
        />
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Basic example"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <input type={"date"} /> */}
        <div>
          <Checkbox />
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
          >
            Reject
          </Button>
          <Button
            id="approveBtn"
            className="approveBtn"
            variant="outlined"
            type="submit"
          >
            Approve
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalDetails;
