import React, { useState } from "react";
import "./DependentTable.scss";
import { Switch, Button } from "@mui/material";

const DependentTable = ({dependentList}) => {
  const rowsInput = {
    SNo: "",
    Name: "",
    Age: "",
    AadhaarNo: "",
    Education: "",
    Profession: "",
    Income: "",
    ReligiousEducation: "",
  };

  const [rowsData, setRowsData] = useState([rowsInput]);

  const addTableRows = () => {
    setRowsData([...rowsData, rowsInput]);
  };

  const deleteTableRows = () => {
    let rows = [...rowsData];
    if (rows.length > 1) {
      rows.pop();
      dependentList([...rows])
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
    let duplicateRowsData = [...rowsData]
    duplicateRowsData.push(rowsInput)
    dependentList(duplicateRowsData)
  };

  return (
    <div id="DependentTable">
      <table>
        <thead className="tableHead">
          <tr>
            <th className="SNo">S. No.</th>
            <th className="Name">Name</th>
            <th className="Age">Age</th>
            <th className="AadharNo">Aadhaar No.</th>
            <th className="Education">Education</th>
            <th className="Profession">Profession</th>
            <th className="Income">Income</th>
            <th className="ReligiousEducation">Religious Education</th>
            <th className="ReligiousActivity">
              <span className="ReligiousActivityText">Religious Activity</span>
              <span className="ReligiousActivityFields">
                <span className="Kanmool">Kanmool</span>
                <span className="Navkarshi">Navkarshi</span>
                <span className="Pooja">Pooja</span>
                <span className="NightDinner">Night Dinner</span>
              </span>
            </th>
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
                <td className="Age">
                  <input
                    type="number"
                    value={rowData.Age}
                    onChange={(event) => handleChange(index, event)}
                    name="Age"
                    className="AgeInput"
                  />
                </td>
                <td className="AadhaarNo">
                  <input
                    type="number"
                    value={rowData.AadhaarNo}
                    onChange={(event) => handleChange(index, event)}
                    name="AadhaarNo"
                    className="AadhaarNoInput"
                  />
                </td>
                <td className="Education">
                  <input
                    type="text"
                    value={rowData.Education}
                    onChange={(event) => handleChange(index, event)}
                    name="Education"
                    className="EducationInput"
                  />
                </td>
                <td className="Profession">
                  <input
                    type="text"
                    value={rowData.Profession}
                    onChange={(event) => handleChange(index, event)}
                    name="Profession"
                    className="ProfessionInput"
                  />
                </td>
                <td className="Income">
                  <input
                    type="number"
                    value={rowData.Income}
                    onChange={(event) => handleChange(index, event)}
                    name="Income"
                    className="IncomeInput"
                  />
                </td>
                <td className="ReligiousEducation">
                  <input
                    type="text"
                    value={rowData.ReligiousEducation}
                    onChange={(event) => handleChange(index, event)}
                    name="ReligiousEducation"
                    className="ReligiousEducationInput"
                  />
                </td>
                <td className="ReligiousActivity">
                  <Switch />
                  <Switch />
                  <Switch />
                  <Switch />
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

export default DependentTable;
