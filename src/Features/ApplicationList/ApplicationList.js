import React, { useState, useEffect } from "react";
import "./ApplicationList.scss";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableSortLabel,
  TablePagination,
  TableRow,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ApplicationList = ({ data }) => {
  const navigate = useNavigate();

  const columns = [
    { id: "id", label: "ID", minWidth: 50, sort: true, sortAsc: true },
    { id: "name", label: "Name", minWidth: 170, sort: true, sortAsc: true },
    {
      id: "mobile",
      label: "Mobile Number",
      minWidth: 130,
      sort: true,
      sortAsc: true,
    },
    {
      id: "aadhaar",
      label: "Aadhar Number",
      minWidth: 140,
      sort: true,
      sortAsc: true,
    },
    {
      id: "ration",
      label: "Ration Card Number",
      minWidth: 140,
      sort: true,
      sortAsc: true,
    },
    { id: "status", label: "Status", minWidth: 95, sort: false, sortAsc: true },
    {
      id: "approve",
      label: "Approve",
      minWidth: 120,
      sort: false,
      sortAsc: true,
    },
    { id: "refer", label: "Refer", minWidth: 120, sort: false, sortAsc: true },
    { id: "view", label: "View", minWidth: 120, sort: false, sortAsc: true },
    // { id: "survey", label: "Survey", minWidth: 120, sort: false, sortAsc:true },
  ];

  const approveBtn = (id) => {
    return (
      <Button
        id="approveBtn"
        className="approveBtn"
        variant="outlined"
        color="success"
        onClick={() => getToAprroveScreen(id)}
        size="small"
      >
        Approve
      </Button>
    );
  };

  const getToAprroveScreen = (id) => {
    let getApproveData = axios({
      method: "GET",
      url: `https://hs-foundation.herokuapp.com/approval/get/${id}`,
      headers: { "Content-Type": "application/json" },
    });
    let getBankDetailsData = axios({
      method: "GET",
      url: `https://hs-foundation.herokuapp.com/bankDetails/get/${id}`,
      headers: { "Content-Type": "application/json" },
    });
    let applicationDetailsData = axios({
      method: "GET",
      url: `https://hs-foundation.herokuapp.com/get/${id}`,
      headers: { "Content-Type": "application/json" },
    });
    let surveyDetailsData = axios({
      method: "GET",
      url: `https://hs-foundation.herokuapp.com/survey/get/${id}`,
      headers: { "Content-Type": "application/json" },
    });
    Promise.all([
      getApproveData,
      getBankDetailsData,
      applicationDetailsData,
      surveyDetailsData,
    ])
      .then((response) => {
        let getApproveDataResponse = response[0];
        let getBankDetailsDataResponse = response[1];
        let applicationDetailsDataResponse = response[2];
        let surveyDetailsDataResponse = response[3];
        if (
          getApproveDataResponse.status === 200 &&
          getBankDetailsDataResponse.status === 200 &&
          applicationDetailsDataResponse.status === 200 &&
          surveyDetailsDataResponse.status === 200
        ) {
          navigate(`/approve/${id}`, {
            state: {
              approvalInfo: getApproveDataResponse.data,
              bankInfo: getBankDetailsDataResponse.data,
              applicationInfo: applicationDetailsDataResponse.data,
              surveyInfo: surveyDetailsDataResponse.data,
            },
          });
        }
      })
      .catch((error) => console.error("error", error));
  };

  const referBtn = () => {
    return (
      <Button
        id="referBtn"
        className="referBtn"
        variant="outlined"
        color="secondary"
        size="small"
      >
        Refer
      </Button>
    );
  };

  const viewBtn = (id) => {
    return (
      <Button
        id="viewBtn"
        className="viewBtn"
        variant="outlined"
        // onClick={() => navigate(`/application/${id}`)}
        onClick={() => getApplicationInfo(id)}
        size="small"
      >
        View
      </Button>
    );
  };

  const getApplicationInfo = (id) => {
    let applicationDetailsData = axios({
      method: "GET",
      url: `https://hs-foundation.herokuapp.com/get/${id}`,
      headers: { "Content-Type": "application/json" },
    });
    let surveyDetailsData = axios({
      method: "GET",
      url: `https://hs-foundation.herokuapp.com/survey/get/${id}`,
      headers: { "Content-Type": "application/json" },
    });
    Promise.all([applicationDetailsData, surveyDetailsData])
      .then((response) => {
        let applicationDetailsDataResponse = response[0];
        let surveyDetailsDataResponse = response[1];
        if (
          applicationDetailsDataResponse.status === 200 &&
          surveyDetailsDataResponse.status === 200
        ) {
          navigate(`/application/${id}`, {
            state: {
              info: applicationDetailsDataResponse.data,
              surveyInfo: surveyDetailsDataResponse.data,
            },
          });
        }
      })
      .catch((error) => console.error("error", error));
  };

  const createData = (
    id,
    name,
    mobile,
    aadhaar,
    ration,
    status,
    approve,
    refer,
    view
  ) => {
    return { id, name, mobile, aadhaar, ration, status, approve, refer, view };
  };

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [columnHeaders, setColumnHeaders] = useState([...columns]);
  const [tableData, setTableData] = useState([...data]);

  const rows = tableData.map((element, index) => {
    return createData(
      element.id,
      element.name,
      element.mobileNumber,
      element.aadharnumber,
      element.rationCard,
      element.status,
      approveBtn(element.id),
      referBtn(),
      viewBtn(element.id)
      // surveyBtn(element.id)
    );
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const createSortHandler = (columnId) => {
    let sortedItem = undefined;
    const columnCopy = columnHeaders.map((item) => {
      if (item.id === columnId) {
        item.sortAsc = !item.sortAsc;
        sortedItem = item;
      }
      return item;
    });
    const dataCopy = tableData.sort((obj1, obj2) => {
      if(obj1[sortedItem.id] > obj2[sortedItem.id]){
        return sortedItem.sortAsc ? 1 : -1
      } else {
        return sortedItem.sortAsc ? -1 : 1
      }
      // return 1;
    })
    setColumnHeaders([...columnCopy]);
    setTableData([...dataCopy]);
  };

  return (
    <div id="ApplicationList">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columnHeaders.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ width: column.minWidth }}
                  >
                    {column.sort ? (
                      <TableSortLabel
                        active={column.sort}
                        direction={column.sortAsc ? "asc" : "desc"}
                        onClick={() => createSortHandler(column.id)}
                      >
                        {column.label}
                      </TableSortLabel>
                    ) : (
                      `${column.label}`
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columnHeaders.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 30, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default ApplicationList;
