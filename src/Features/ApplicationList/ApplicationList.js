import React from "react";
import './ApplicationList.scss';
import {
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TablePagination, 
  TableRow,
  Button
} from '@mui/material';

const ApplicationList = ({ data }) => {
  const columns = [
    { id: 'id', label: 'ID', minWidth: 50 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'mobile', label: 'Mobile Number', minWidth: 170 },
    { id: 'aadhaar', label: 'Aadhar Number', minWidth: 170 },
    { id: 'ration', label: 'Ration Card Number', minWidth: 170 },
    { id: 'status', label: 'Status', minWidth: 100 },
    { id: 'approve', label: 'Approve', minWidth: 140},
    { id: 'refer', label: 'Refer', minWidth: 140 },
    { id: 'view', label: 'View', minWidth: 140 }
  ];

  const approveBtn = () => {
    return (
      <Button
        id="approveBtn"
        className="approveBtn"
        variant="outlined"
        color="success"
      >
        Approve
      </Button>
    )
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
    )
  };

  const viewBtn = () => {
    return (
      <Button
        id="viewBtn"
        className="viewBtn"
        variant="outlined"
      >
        View
      </Button>
    )
  };

  const createData = (id, name, mobile, aadhaar, ration, status, approve, refer, view) => {
    return { id, name, mobile, aadhaar, ration, status, approve, refer, view };
  }

  const rows = data.map((element, index) => {
    return(
      createData(
        index+1,
        element.personalDetails.name,
        element.personalDetails.mobileNumber,
        element.updateDocuments.aadhaarNumber,
        element.updateDocuments.rationCard,
        'status',
        approveBtn(), 
        referBtn(), 
        viewBtn()
      )
    )
  })
  
  // const rows = [
  //   createData(1, 'ABC', 9999999999, 1111111111, 5555555555, "status", approveBtn(), referBtn(), viewBtn()),
  //   createData(2, 'ABC', 9999999999, 1111111111, 5555555555, "status", approveBtn(), referBtn(), viewBtn()),
  //   createData(3, 'ABC', 9999999999, 1111111111, 5555555555, "status", approveBtn(), referBtn(), viewBtn()),
  //   createData(4, 'ABC', 9999999999, 1111111111, 5555555555, "status", approveBtn(), referBtn(), viewBtn()),
  //   createData(5, 'ABC', 9999999999, 1111111111, 5555555555, "status", approveBtn(), referBtn(), viewBtn()),
  //   createData(6, 'ABC', 9999999999, 1111111111, 5555555555, "status", approveBtn(), referBtn(), viewBtn()),
  //   createData(7, 'ABC', 9999999999, 1111111111, 5555555555, "status", approveBtn(), referBtn(), viewBtn()),
  //   createData(8, 'ABC', 9999999999, 1111111111, 5555555555, "status", approveBtn(), referBtn(), viewBtn()),
  //   createData(9, 'ABC', 9999999999, 1111111111, 5555555555, "status", approveBtn(), referBtn(), viewBtn()),
  //   createData(10, 'ABC', 9999999999, 1111111111, 5555555555, "status", approveBtn(), referBtn(), viewBtn()),
  //   createData(11, 'ABC', 9999999999, 1111111111, 5555555555, "status", approveBtn(), referBtn(), viewBtn()),
  //   createData(12, 'ABC', 9999999999, 1111111111, 5555555555, "status", approveBtn(), referBtn(), viewBtn()),
  //   createData(13, 'ABC', 9999999999, 1111111111, 5555555555, "status", approveBtn(), referBtn(), viewBtn()),
  //   createData(14, 'ABC', 9999999999, 1111111111, 5555555555, "status", approveBtn(), referBtn(), viewBtn()),
  //   createData(15, 'ABC', 9999999999, 1111111111, 5555555555, "status", approveBtn(), referBtn(), viewBtn()),
  // ];

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
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
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
