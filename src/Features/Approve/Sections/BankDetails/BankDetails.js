import React, { useState } from "react";
import "./BankDetails.scss";
import { TextField, Checkbox, Button } from "@mui/material";
import axios from "axios";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../../../Components";

const BankDetails = ({ bankInfo, applicationInfo, getData }) => {
  const navigate = useNavigate();

  let formData = {
    amountApproved: bankInfo?.amountApproved,
    bankAccountNumber: bankInfo?.bankAccountNumber,
    bankName: bankInfo?.bankName,
    chequeNeftNumber: bankInfo?.chequeNeftNumber,
    grantAmount: bankInfo?.grantAmount,
    grantDate: bankInfo?.grantDate ? new Date(bankInfo.grantDate) : new Date(),
    id: bankInfo?.id,
  };

  const [btnEnabled, setBtnEnabled] = useState(false);
  const [data, setData] = useState(formData);
  const [showLoader, setShowLoader] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    let formDataCopy = { ...data };
    formDataCopy[name] = value;
    setData(formDataCopy);
  };

  const setDate = (date) => {
    let formDataCopy = { ...data };
    formDataCopy["grantDate"] = date;
    setData(formDataCopy);
  };

  const submitBankDetails = () => {
    setShowLoader(true);
    axios({
      method: "POST",
      url: "https://hs-foundation.herokuapp.com/bankDetails/update",
      data: data,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          getData();
          navigate(`/applicationList`);
          setShowLoader(false);
          // axios({
          //   method: "POST",
          //   url: "https://hs-foundation.herokuapp.com/update",
          //   data: {
          //     ...applicationInfo,
          //   },
          //   headers: { "Content-Type": "application/json" },
          // }).then((res) => {
          //   if (res.status === 200) {
          //     getData();
          //     navigate(`/applicationList`);
          //   }
          // });
        }
      })
      .catch((error) => {
        console.error("error", error);
        setShowLoader(false);
      });
  };

  return (
    <div id="BankDetails" className="BankDetails">
      {showLoader && <Loader />}
      <div className="formHeader">Bank Details</div>
      <div className="bankDetailsForm">
        <TextField
          id="bankNameInput"
          className="formElements"
          label="Bank Name"
          variant="outlined"
          name="bankName"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.bankName}
        />
        <TextField
          id="bankAccountNumberInput"
          className="formElements"
          label="Bank Account Number"
          variant="outlined"
          name="bankAccountNumber"
          type="number"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.bankAccountNumber}
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
          id="chequeNeftNumberInput"
          className="formElements"
          label="Checque NEFT Number"
          variant="outlined"
          name="chequeNeftNumber"
          type="number"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.chequeNeftNumber}
        />
        <TextField
          id="grantAmountInput"
          className="formElements"
          label="Grant Amount"
          variant="outlined"
          name="grantAmount"
          type="number"
          onChange={(event) => handleChange(event)}
          defaultValue={data?.grantAmount}
        />
        <div id="formElements" className="formElements">
          Date:
          <DatePicker
            selected={data.grantDate}
            onChange={(date) => setDate(date)}
            name="grantDate"
          />
        </div>
        <div>
          <Checkbox onChange={() => setBtnEnabled((prev) => !prev)} />
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
            onClick={() => submitBankDetails()}
            disabled={!btnEnabled}
          >
            Grant
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
