import React from "react";
import "./AdministrationDetails.scss";
import { TextField } from "@mui/material";

const AdministrationDetails = ({ data }) => {
  let formData = {
    referredBy: data?.referredBy,
    address: data?.address,
  };

  return (
    <div id="AdministrationDetails" className="AdministrationDetails">
      <div className="formHeader">Administrative Details</div>
      <div className="administrativeDetailsDiv">
        <TextField
          id="referredByInput"
          className="formElements"
          label="Referred By:"
          variant="outlined"
          name="referredBy"
          value={formData?.referredBy}
        />
        <TextField
          id="addressOfReferralInput"
          className="formElements"
          label="Address of Referral:"
          variant="outlined"
          name="address"
          value={formData?.address}
        />
      </div>
    </div>
  );
};

export default AdministrationDetails;
