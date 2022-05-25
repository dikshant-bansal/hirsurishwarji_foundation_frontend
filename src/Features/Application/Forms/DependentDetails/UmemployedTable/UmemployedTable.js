import React, { useState, useEffect } from "react";
import "./UmemployedTable.scss";
import { Button } from "@mui/material";

const UmemployedTable = ({ unemployedList, list }) => {
  useEffect(() => {
    addTableRows();
  }, []);

  const rowsInput = {
    sNo: null,
    name: null,
    education: null,
    experience: null,
  };

  const [rowsData, setRowsData] = useState(list ? list : []);

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
    unemployedList(rows);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const rowsInputData = [...rowsData];
    rowsInputData[index][name] = value;
    if (rowsInputData[index].sNo === null) {
      rowsInputData[index].sNo = index + 1;
    }
    setRowsData(rowsInputData);
    unemployedList(rowsInputData);
  };

  return (
    <div id="UmemployedTable">
      <table>
        <thead className="tableHead">
          <tr>
            <th className="sNo">S. No.</th>
            <th className="name">Name</th>
            <th className="work">Education</th>
            <th className="phoneNumber">Experience</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {rowsData?.map((rowData, index) => {
            return (
              <tr>
                <td className="SNo">
                  <input
                    type="number"
                    value={`${index + 1}`}
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
                <td className="Education">
                  <input
                    type="text"
                    value={rowData.education}
                    onChange={(event) => handleChange(index, event)}
                    name="education"
                    className="EducationInput"
                  />
                </td>
                <td className="Experience">
                  <input
                    type="text"
                    value={rowData.experience}
                    onChange={(event) => handleChange(index, event)}
                    name="experience"
                    className="ExperienceInput"
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

export default UmemployedTable;
