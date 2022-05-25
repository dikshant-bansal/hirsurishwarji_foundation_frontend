import React, { useState } from "react";
import "./UpdateDocuments.scss";
import { TextField, Button } from "@mui/material";
import BankDetailsTable from "./BankDetails/BankDetails";

const UpdateDocuments = ({ nextForm, backForm, data }) => {
  let formData = {
    aadharNumber: data?.aadharNumber || null,
    rationCard: data?.rationCard || null,
    panNumber: data?.panNumber || null,
    bankAccounts: data?.bankAccounts || null,
    // rent : data?.rent || null,
    // electricity: data?.electricity || null,
    // insurer: data?.insurer || null,
    // salary: data?.salary || null,
    // jain: data?.jain || null,
    // telephone: data?.telephone || null,
    // referral: data?.referral || null,
    // school: data?.school || null,
  };

  const [Aerror, setAerror] = useState(false);
  const [Berror, setBerror] = useState(false);
  const [Cerror, setCerror] = useState(false);
  const [updateDocumentsData, setUpdateDocumentsData] = useState({ formData });

  const handleChange = (event) => {
    // setAerror(false);
    // setBerror(false);
    // setCerror(false);
    const { name, value } = event.target;
    // formData[name] = value
    let formDataCopy = { ...updateDocumentsData };
    formDataCopy[name] = value;
    setUpdateDocumentsData({ ...formDataCopy });
  };

  const submitForm = (event) => {
    if (updateDocumentsData?.aadharNumber?.length !== 12) {
      setAerror(true);
    }
    if (
      updateDocumentsData?.rationCard?.length < 4 ||
      updateDocumentsData?.rationCard?.length > 12
    ) {
      setBerror(true);
    }
    if (updateDocumentsData?.panNumber?.length !== 10) {
      setCerror(true);
    }
    if (
      updateDocumentsData?.aadharNumber?.length === 12 &&
      updateDocumentsData?.rationCard?.length > 4 &&
      updateDocumentsData?.rationCard?.length < 12 &&
      updateDocumentsData?.panNumber?.length === 10
    ) {
      nextForm("updateDocuments", updateDocumentsData);
    }
    event.preventDefault();
  };

  const bankAccounts = (bankAccounts) => {
    // formData.bankAccounts = bankAccounts
    let formDataCopy = { ...updateDocumentsData };
    formDataCopy.bankAccounts = bankAccounts;
    setUpdateDocumentsData({ ...formDataCopy });
  };

  return (
    <div id="UpdateDocuments" className="UpdateDocuments">
      <div className="formHeader">Update Documents</div>
      <form className="updateDocumentsForm" onSubmit={submitForm}>
        <BankDetailsTable
          bankAccounts={bankAccounts}
          list={data?.bankAccounts}
        />
        <TextField
          id="aadhaarInput"
          className="formElements"
          label="Aadhaar Number"
          variant="outlined"
          type="number"
          name="aadharNumber"
          onChange={(event) => {
            if(Aerror){
              setAerror(false)
            }
            handleChange(event);
          }}
          defaultValue={formData?.aadharNumber}
          required
          error={Aerror}
          helperText={
            Aerror ? "Aadhar Number Should be of 12 digit only !" : null
          }
        />
        {/* <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div> */}
        <TextField
          id="rationInput"
          className="formElements"
          label="Ration Card Number"
          variant="outlined"
          type="number"
          name="rationCard"
          onChange={(event) => {
            if(Berror){
              setBerror(false)
            }
            handleChange(event);
          }}
          defaultValue={formData?.rationCard}
          required
          error={Berror}
          helperText={
            Berror ? "Minimum 4 and Maximum 12 digits are allowed !" : null
          }
        />
        {/* <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div> */}
        <TextField
          id="panInput"
          className="formElements"
          label="Pan Number"
          variant="outlined"
          type="text"
          name="panNumber"
          onChange={(event) => {
            if(Cerror){
              setCerror(false)
            }
            handleChange(event);
          }}
          defaultValue={formData?.panNumber}
          required
          error={Cerror}
          helperText={Cerror ? "Pan Number Should be of 10 digit only !" : null}
        />
        {/* <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div> */}
        {/* <TextField
          id="bankInput"
          className="formElements"
          label="Bank Account Number"
          variant="outlined"
          name='bankAccount'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.bankAccount}
          required
        /> */}
        {/* <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div> */}
        {/* <TextField
          id="rentInput"
          className="formElements"
          label="Rent / Maintenance Reciept Number"
          variant="outlined"
          name='rent'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.rent}
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="electricityInput"
          className="formElements"
          label="Electricity Consumer Number"
          variant="outlined"
          name='electricity'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.electricity}
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="insurerInput"
          className="formElements"
          label="Insurer ID Number"
          variant="outlined"
          name='insurer'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.insurer}
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="salaryInput"
          className="formElements"
          label="Salary Certificate ID"
          variant="outlined"
          name='salary'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.salary}
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="jainInput"
          className="formElements"
          label="Jain Minority Certificate ID"
          variant="outlined"
          name='jain'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.jain}
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="telephoneInput"
          className="formElements"
          label="Telephone Account Number"
          variant="outlined"
          name='telephone'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.telephone}
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="referralInput"
          className="formElements"
          label="Referral Letter Serial Number"
          variant="outlined"
          name='referral'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.referral}
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div>
        <TextField
          id="schoolInput"
          className="formElements"
          label="School/College Fees Reciept Number"
          variant="outlined"
          name='school'
          onChange={(event) => handleChange(event)}
          defaultValue={formData?.school}
        />
        <div className="fileUpload">
          <input name="fileUpload" className="fileUploadInput" type="file"></input>
        </div> */}
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

export default UpdateDocuments;
