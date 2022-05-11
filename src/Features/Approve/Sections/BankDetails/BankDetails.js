import React from "react";
import "./BankDetails.scss";
import { TextField, Checkbox, Button } from "@mui/material";

const BankDetails = () => {
  return (
    <div id="BankDetails" className="BankDetails">
      <div className="formHeader">Bank Details</div>
      <div className="bankDetailsForm">
        <TextField
          id="bankNameInput"
          className="formElements"
          label="Bank Name"
          variant="outlined"
          name="bankName"
        />
        <TextField
          id="bankAccountNumberInput"
          className="formElements"
          label="Bank Account Number"
          variant="outlined"
          name="bankAccountNumber"
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
          id="chequeNeftNumberInput"
          className="formElements"
          label="Checque NEFT Number"
          variant="outlined"
          name="chequeNeftNumber"
          type="number"
        />
        <TextField
          id="grantAmountInput"
          className="formElements"
          label="Grany Amount"
          variant="outlined"
          name="grantAmount"
          type="number"
        />
        <div>
          <Checkbox />
          <span>
            Above details for Applicant are correct and ready for Grant.
          </span>
        </div>
        <div className="btnContainer">
          <Button
            id="grantBtn"
            className="grantBtn"
            variant="outlined"
            type="submit"
          >
            Grant
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
