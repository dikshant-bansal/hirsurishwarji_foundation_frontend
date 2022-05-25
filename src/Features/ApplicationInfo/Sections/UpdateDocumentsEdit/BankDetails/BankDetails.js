import React, { useState, useEffect } from "react";
import "./BankDetails.scss";
import { Button } from "@mui/material";

const BankDetailsTable = ({ bankAccounts, list }) => {
  // useEffect(() => {
  //   addTableRows();
  // }, []);

  const rowsInput = {
    sNo: null,
    accountName: null,
    accountNumber: null,
    bankBranch: null,
    bankName: null,
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
    bankAccounts(rows);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const rowsInputData = [...rowsData];
    rowsInputData[index][name] = value;
    if (rowsInputData[index].sNo === null) {
      rowsInputData[index].sNo = index + 1;
    }
    setRowsData(rowsInputData);
    bankAccounts(rowsInputData);
  };

  return (
    <div id="BankDetailsTable">
      <table>
        <thead className="tableHead">
          <tr>
            <th className="sNo">S. No.</th>
            <th className="name">Account Name</th>
            <th className="work">Account Number</th>
            <th className="phoneNumber">Bank Branch</th>
            <th className="phoneNumber">Bank Name</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {rowsData?.map((rowData, index) => {
            return (
              <tr key={index}>
                <td className="SNo">
                  <input
                    type="number"
                    value={`${index + 1}`}
                    name="sNo"
                    className="SNoInput"
                    readOnly
                  />
                </td>
                <td className="AccountName">
                  <input
                    type="text"
                    value={rowData.accountName}
                    onChange={(event) => handleChange(index, event)}
                    name="accountName"
                    className="AccountNameInput"
                  />
                </td>
                <td className="AccountNumber">
                  <input
                    type="text"
                    value={rowData.accountNumber}
                    onChange={(event) => handleChange(index, event)}
                    name="accountNumber"
                    className="AccountNumberInput"
                  />
                </td>
                <td className="BankName">
                  <input
                    type="text"
                    value={rowData.bankName}
                    onChange={(event) => handleChange(index, event)}
                    name="bankName"
                    className="BankNameInput"
                  />
                </td>
                <td className="BankBranch">
                  <input
                    type="text"
                    value={rowData.bankBranch}
                    onChange={(event) => handleChange(index, event)}
                    name="bankBranch"
                    className="BankBranchInput"
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

export default BankDetailsTable;
