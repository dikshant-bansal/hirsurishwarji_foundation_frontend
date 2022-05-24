import React from "react";
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
    { id: "id", label: "ID", minWidth: 50, sort: true },
    { id: "name", label: "Name", minWidth: 170, sort: true },
    { id: "mobile", label: "Mobile Number", minWidth: 130, sort: true },
    { id: "aadhaar", label: "Aadhar Number", minWidth: 140, sort: true },
    { id: "ration", label: "Ration Card Number", minWidth: 140, sort: true },
    { id: "status", label: "Status", minWidth: 95, sort: false },
    { id: "approve", label: "Approve", minWidth: 120, sort: false },
    { id: "refer", label: "Refer", minWidth: 120, sort: false },
    { id: "view", label: "View", minWidth: 120, sort: false },
    // { id: "survey", label: "Survey", minWidth: 120, sort: false },
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
    // axios({
    //   method: "GET",
    //   url: `https://hs-foundation.herokuapp.com/get/${id}`,
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       axios({
    //         method: "GET",
    //         url: `https://hs-foundation.herokuapp.com/survey/get/${id}`,
    //         headers: { "Content-Type": "application/json" },
    //       }).then((res) => {
    //         if (response.status === 200) {
    //           navigate(`/application/${id}`, {
    //             state: { info: response.data, surveyInfo: res.data },
    //           });
    //         }
    //       });
    //     }
    //   })
    //   .catch((error) => console.error("error", error));
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

  // const surveyBtn = (id) => {
  //   return (
  //     <Button
  //       id="surveyBtn"
  //       className="surveyBtn"
  //       variant="outlined"
  //       onClick={() => navigate(`/survey/${id}`)}
  //       // onClick={() => getSurveyInfo(id)}
  //       size='small'
  //     >
  //       Survey
  //     </Button>
  //   );
  // };

  // const getSurveyInfo = (id) => {
  //   axios({
  //     method: "GET",
  //     url: `https://hs-foundation.herokuapp.com/survey/get/${id}`,
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         navigate(`/survey/${id}`, {state: {surveyInfo : response.data}})
  //       }
  //     })
  //     .catch((error) => console.error("error", error));
  // };

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

  const rows = data.map((element, index) => {
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

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div id="ApplicationList">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ width: column.minWidth }}
                  >
                    {/* <TableSortLabel
                      active={column.sort}
                      direction={"asc"}
                      // onClick={createSortHandler(headCell.id)}
                    > */}
                    {column.label}
                    {/* </TableSortLabel> */}
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
                      {columns.map((column) => {
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
