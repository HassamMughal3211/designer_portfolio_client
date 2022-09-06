import React from "react";
import { MDBDataTable } from "mdbreact";
import { CircularProgress, Container, Paper, Typography } from "@mui/material";

const DatatablePage = ({  data, isLoaded }) => {
  console.log("data table", data);
  return isLoaded == false ? (
    <MDBDataTable striped responsive bordered small data={data} />
  ) : (
    <CircularProgress />
  );
};

export default DatatablePage;
