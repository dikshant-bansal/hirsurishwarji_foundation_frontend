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
    { id: "mobile", label: "Mobile Number", minWidth: 170, sort: true },
    { id: "aadhaar", label: "Aadhar Number", minWidth: 170, sort: true },
    { id: "ration", label: "Ration Card Number", minWidth: 170,  sort: true  },
    { id: "status", label: "Status", minWidth: 100, sort: false },
    { id: "approve", label: "Approve", minWidth: 140, sort: false },
    { id: "refer", label: "Refer", minWidth: 140, sort: false },
    { id: "view", label: "View", minWidth: 140, sort: false },
    { id: "survey", label: "Survey", minWidth: 140, sort: false },
  ];

  const approveBtn = (id) => {
    return (
      <Button
        id="approveBtn"
        className="approveBtn"
        variant="outlined"
        color="success"
        onClick={() => navigate(`/approve/${id}`)}
      >
        Approve
      </Button>
    );
  };

  const referBtn = () => {
    return (
      <Button
        id="referBtn"
        className="referBtn"
        variant="outlined"
        color="secondary"
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
      >
        View
      </Button>
    );
  };

  const getApplicationInfo = (id) => {
    axios({
      method: "GET",
      url: `https://hs-foundation.herokuapp.com/get/${id}`,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          navigate(`/application/${id}`, { state: { info: response.data } });
        }
      })
      .catch((error) => console.error("error", error));
  };

  const surveyBtn = (id) => {
    return (
      <Button
        id="surveyBtn"
        className="surveyBtn"
        variant="outlined"
        onClick={() => navigate(`/survey/${id}`)}
        // onClick={() => getSurveyInfo(id)}
      >
        Survey
      </Button>
    );
  };

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
    view,
    survey
  ) => {
    return {
      id,
      name,
      mobile,
      aadhaar,
      ration,
      status,
      approve,
      refer,
      view,
      survey,
    };
  };

  const rows = data.map((element, index) => {
    return createData(
      index + 1,
      element.name,
      element.mobileNumber,
      element.aadharnumber,
      element.rationCard,
      element.status,
      approveBtn(element.id),
      referBtn(),
      viewBtn(element.id),
      surveyBtn(element.id)
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
                    style={{ minWidth: column.minWidth }}
                  >
                    <TableSortLabel
                      active={column.sort}
                      direction={"asc"}
                      // onClick={createSortHandler(headCell.id)}
                    >
                      {column.label}
                    </TableSortLabel>
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
