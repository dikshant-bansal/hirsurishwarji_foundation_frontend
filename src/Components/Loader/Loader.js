import React from "react";
import { Box, CircularProgress } from "@mui/material";
import "./Loader.scss";

const Loader = () => {
  return (
    <div id="Loader" className="Loader">
      <div className="spinner">
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    </div>
  );
};

export default Loader;
