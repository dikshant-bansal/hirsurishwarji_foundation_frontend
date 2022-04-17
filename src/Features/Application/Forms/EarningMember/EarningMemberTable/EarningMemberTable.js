import React, { useState } from "react";
import "./EarningMemberTable.scss";
import { Button } from "@mui/material";

const EarningMemberTable = () => {
  const rowsInput = {
    SNo: "",
    Name: "",
    Work: "",
    PhoneNo: "",
  };

  const [rowsData, setRowsData] = useState([rowsInput]);

  const addTableRows = () => {
    setRowsData([...rowsData, rowsInput]);
  };

  const deleteTableRows = () => {
    let rows = [...rowsData];
    if (rows.length > 1) {
      rows.pop();
    } else {
      rows = [rowsInput];
    }
    setRowsData(rows);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };

  return (
    <div id="EarningMemberTable">
      <table>
        <thead className="tableHead">
          <tr>
            <th className="SNo">S. No.</th>
            <th className="Name">Name</th>
            <th className="Work">Work</th>
            <th className="PhoneNo">Phone No.</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {rowsData?.map((rowData, index) => {
            return (
              <tr>
                <td className="SNo">
                  <input
                    type="number"
                    value={rowData.SNo}
                    onChange={(event) => handleChange(index, event)}
                    name="SNo"
                    className="SNoInput"
                  />
                </td>
                <td className="Name">
                  <input
                    type="text"
                    value={rowData.Name}
                    onChange={(event) => handleChange(index, event)}
                    name="Name"
                    className="NameInput"
                  />
                </td>
                <td className="Work">
                  <input
                    type="text"
                    value={rowData.Work}
                    onChange={(event) => handleChange(index, event)}
                    name="Work"
                    className="WorkInput"
                  />
                </td>
                <td className="PhoneNo">
                  <input
                    type="number"
                    value={rowData.PhoneNo}
                    onChange={(event) => handleChange(index, event)}
                    name="PhoneNo"
                    className="PhoneNoInput"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="btnContainer">
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
      </div>
    </div>
  );
};

export default EarningMemberTable;
