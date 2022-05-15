import React, { useState, useEffect } from "react";
import "./EarningMemberTable.scss";
import { Button } from "@mui/material";

const EarningMemberTable = ({ earningMembersList, list }) => {

  useEffect(() => {
    addTableRows();
  }, []);

  const rowsInput = {
    sNo: null,
    name: null,
    work: null,
    phoneNumber: null,
  };

  const [rowsData, setRowsData] = useState(list ? list :[]);

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
    const rowsInputData = [...rowsData];
    rowsInputData[index][name] = value;
    if(rowsInputData[index].sNo === null){
      rowsInputData[index].sNo = index+1
    }
    setRowsData(rowsInputData);
    earningMembersList(rowsInputData)
  };

  return (
    <div id="EarningMemberTable">
      <table>
        <thead className="tableHead">
          <tr>
            <th className="sNo">S. No.</th>
            <th className="name">Name</th>
            <th className="work">Work</th>
            <th className="phoneNumber">Phone No.</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {rowsData?.map((rowData, index) => {
            return (
              <tr>
                <td className="SNo">
                  <input
                    type="number"
                    value={`${index+1}`}
                    name="sNo"
                    className="SNoInput"
                    readOnly
                  />
                </td>
                <td className="Name">
                  <input
                    type="text"
                    value={rowData.name}
                    onChange={(event) => handleChange(index, event)}
                    name="name"
                    className="NameInput"
                  />
                </td>
                <td className="Work">
                  <input
                    type="text"
                    value={rowData.work}
                    onChange={(event) => handleChange(index, event)}
                    name="work"
                    className="WorkInput"
                  />
                </td>
                <td className="PhoneNo">
                  <input
                    type="number"
                    value={rowData.phoneNumber}
                    onChange={(event) => handleChange(index, event)}
                    name="phoneNumber"
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
