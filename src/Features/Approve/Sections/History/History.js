import React from "react";
import "./History.scss";

const History = ({ historyData, id }) => {

  return (
    <div id="History" className="History">
      <div className="formHeader">History</div>
      {historyData.length > 1 ? (
        <div className="tableContainer">
          <table>
            <thead className="tableHead">
              <tr>
                <th className="SNo">Id</th>
                <th className="Name">Name</th>
                <th className="Work">Aadhar Number</th>
                <th className="Education">Ration Card</th>
                <th className="PhoneNo">Status</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              {historyData?.map((historyRow, index) => {
                if (id !== historyRow.id) {
                  return (
                    <tr>
                      <td className="id">
                        <input
                          value={historyRow.id}
                          name="id"
                          className="idInput"
                          readOnly
                        />
                      </td>
                      <td className="name">
                        <input
                          value={historyRow.name}
                          name="name"
                          className="nameInput"
                        />
                      </td>
                      <td className="aadharNumber">
                        <input
                          value={historyRow.aadharNumber}
                          name="aadharNumber"
                          className="aadharNumberInput"
                          readOnly
                        />
                      </td>
                      <td className="rationCard">
                        <input
                          value={historyRow.rationCard}
                          name="rationCard"
                          className="rationCardInput"
                          readOnly
                        />
                      </td>
                      <td className="status">
                        <input
                          value={historyRow.status}
                          name="status"
                          className="statusInput"
                          readOnly
                        />
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>No History Found !</div>
      )}
    </div>
  );
};

export default History;
