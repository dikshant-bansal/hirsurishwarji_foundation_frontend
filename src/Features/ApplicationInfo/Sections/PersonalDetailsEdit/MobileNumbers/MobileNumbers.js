import React, { useState, useEffect } from "react";
import "./MobileNumbers.scss";
import { TextField, Button } from "@mui/material";

const MobileNumbers = ({ mobileNumber, list }) => {
  // useEffect(() => {
  //   addTableRows();
  // }, []);

  const [rowsData, setRowsData] = useState(list);

  const addTableRows = () => {
    setRowsData([...rowsData, ""]);
  };

  const deleteTableRows = () => {
    let rows = [...rowsData];
    if (rows.length > 1) {
      rows.pop();
    }
    setRowsData(rows);
    mobileNumber(rows)
  };

  const handleChange = (index, event) => {
    const { value } = event.target;
    const rowsInputData = [...rowsData];
    rowsInputData[index] = value;
    setRowsData(rowsInputData);
    mobileNumber(rowsInputData);
  };

  return (
    <div id="MobileNumbers">
      <div className="mobile">
      {rowsData?.map((rowData, index) => {
        return (
          <TextField
            key={index}
            id="mobileNumberInput"
            className="formElements"
            label={`Mobile Number ${index + 1}`}
            variant="outlined"
            type="number"
            name="mobileNumber"
            onChange={(event) => handleChange(index, event)}
            defaultValue={rowData || null}
            required={index === 0 ? true : false}
          />
        );
      })}
      </div>
      <div className="btnContainer">
        <span>Additional Mobile No:</span>
        <span>
          <Button
            id="addBtn"
            className="nextBtn"
            variant="outlined"
            onClick={addTableRows}
          >
            Add
          </Button>
          <Button
            id="deleteBtn"
            className="nextBtn"
            variant="outlined"
            color="error"
            onClick={deleteTableRows}
          >
            Delete
          </Button>
        </span>
      </div>
    </div>
  );
};

export default MobileNumbers;
