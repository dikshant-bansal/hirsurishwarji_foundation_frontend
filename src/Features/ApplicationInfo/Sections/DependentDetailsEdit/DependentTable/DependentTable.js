import React, { useEffect, useState } from "react";
import "./DependentTable.scss";
import { Button } from "@mui/material";
// import Switch from "react-switch";
import { DragSwitch } from "react-dragswitch";
import "react-dragswitch/dist/index.css";

const DependentTable = ({ dependentList, list }) => {
  // const [kanmool, setKanmool] = useState(false);
  // const [navkarshi, setNavkarshi] = useState(false);
  // const [pooja, setPooja] = useState(false);
  // const [nightDinner, setNightDinner] = useState(false);

  // useEffect(() => {
  //   addTableRows();
  // }, []);

  const rowsInput = {
    sNo: null,
    name: null,
    Age: null,
    aadhaarNo: null,
    education: null,
    profession: null,
    income: null,
    religiousEducation: null,
    kanmool: false,
    navkarshi: false,
    pooja: false,
    nightDinner: false,
  };

  const [rowsData, setRowsData] = useState(list ? list : []);

  const addTableRows = () => {
    setRowsData([...rowsData, rowsInput]);
  };

  const deleteTableRows = () => {
    let rows = [...rowsData];
    if (rows.length > 1) {
      rows.pop();
      dependentList([...rows]);
    } else {
      rows = [rowsInput];
    }
    setRowsData(rows);
    dependentList(rows);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const rowsInputData = [...rowsData];
    rowsInputData[index][name] = value;
    if (rowsInputData[index].sNo === null) {
      rowsInputData[index].sNo = index + 1;
    }
    setRowsData(rowsInputData);
    dependentList(rowsInputData);
  };

  const handleKanmoolSwitchChange = (index, event) => {
    const rowsInputData = [...rowsData];
    rowsInputData[index]['kanmool'] = event;
    if (rowsInputData[index].sNo === null) {
      rowsInputData[index].sNo = index + 1;
    }
    setRowsData(rowsInputData);
    dependentList(rowsInputData);
  };

  const handleNavkarshiSwitchChange = (index, event) => {
    const rowsInputData = [...rowsData];
    rowsInputData[index]['navkarshi'] = event;
    if (rowsInputData[index].sNo === null) {
      rowsInputData[index].sNo = index + 1;
    }
    setRowsData(rowsInputData);
    dependentList(rowsInputData);
  };

  const handlePoojaSwitchChange = (index, event) => {
    const rowsInputData = [...rowsData];
    rowsInputData[index]['pooja'] = event;
    if (rowsInputData[index].sNo === null) {
      rowsInputData[index].sNo = index + 1;
    }
    setRowsData(rowsInputData);
    dependentList(rowsInputData);
  };

  const handleNightDinnerSwitchChange = (index, event) => {
    const rowsInputData = [...rowsData];
    rowsInputData[index]['nightDinner'] = event;
    if (rowsInputData[index].sNo === null) {
      rowsInputData[index].sNo = index + 1;
    }
    setRowsData(rowsInputData);
    dependentList(rowsInputData);
  };

  return (
    <div id="DependentTable">
      <table>
        <thead className="tableHead">
          <tr>
            <th className="sNo">S. No.</th>
            <th className="name">Name</th>
            <th className="age">Age</th>
            <th className="aadharNo">Aadhaar No.</th>
            <th className="education">Education</th>
            <th className="profession">Profession</th>
            <th className="income">Income</th>
            <th className="religiousEducation">Religious Education</th>
            <th className="kanmool">Kanmool</th>
            <th className="navkarshi">Navkarshi</th>
            <th className="pooja">Pooja</th>
            <th className="nightDinner">Night Dinner</th>
            {/* <th className="religiousActivity">
              <span className="religiousActivityText">Religious Activity</span>
              <span className="religiousActivityFields">
                <span className="kanmool">Kanmool</span>
                <span className="navkarshi">Navkarshi</span>
                <span className="pooja">Pooja</span>
                <span className="nightDinner">Night Dinner</span>
              </span>
            </th> */}
          </tr>
        </thead>
        <tbody className="tableBody">
          {rowsData?.map((rowData, index) => {
            return (
              <tr key={index}>
                <td className="sNo">
                  <input
                    type="number"
                    value={`${index + 1}`}
                    name="sNo"
                    className="sNoInput"
                    readOnly
                  />
                </td>
                <td className="name">
                  <input
                    type="text"
                    value={rowData.name}
                    onChange={(event) => handleChange(index, event)}
                    name="name"
                    className="nameInput"
                  />
                </td>
                <td className="age">
                  <input
                    type="number"
                    value={rowData.age}
                    onChange={(event) => handleChange(index, event)}
                    name="age"
                    className="ageInput"
                  />
                </td>
                <td className="aadhaarNo">
                  <input
                    type="number"
                    value={rowData.aadhaarNo}
                    onChange={(event) => handleChange(index, event)}
                    name="aadhaarNo"
                    className="aadhaarNoInput"
                  />
                </td>
                <td className="education">
                  <input
                    type="text"
                    value={rowData.education}
                    onChange={(event) => handleChange(index, event)}
                    name="education"
                    className="educationInput"
                  />
                </td>
                <td className="profession">
                  <input
                    type="text"
                    value={rowData.profession}
                    onChange={(event) => handleChange(index, event)}
                    name="profession"
                    className="professionInput"
                  />
                </td>
                <td className="income">
                  <input
                    type="number"
                    value={rowData.income}
                    onChange={(event) => handleChange(index, event)}
                    name="income"
                    className="incomeInput"
                  />
                </td>
                <td className="religiousEducation">
                  <input
                    type="text"
                    value={rowData.religiousEducation}
                    onChange={(event) => handleChange(index, event)}
                    name="religiousEducation"
                    className="religiousEducationInput"
                  />
                </td>
                {/* <td className="religiousActivity"> */}
                <td className="switchTD">
                  <DragSwitch
                    name="kanmool"
                    onChange={(event) => handleKanmoolSwitchChange(index, event)}
                    checked={rowData?.kanmool}
                  />
                </td>
                <td className="switchTD">
                  <DragSwitch
                    name="navkarshi"
                    onChange={(event) => handleNavkarshiSwitchChange(index, event)}
                    checked={rowData?.navkarshi}
                  />
                </td>
                <td className="switchTD">
                  <DragSwitch
                    name="pooja"
                    onChange={(event) => handlePoojaSwitchChange(index, event)}
                    checked={rowData?.pooja}
                  />
                </td>
                <td className="switchTD">
                  <DragSwitch
                    name="nightDinner"
                    onChange={(event) => handleNightDinnerSwitchChange(index, event)}
                    checked={rowData?.nightDinner}
                  />
                </td>
                {/* </td> */}
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
