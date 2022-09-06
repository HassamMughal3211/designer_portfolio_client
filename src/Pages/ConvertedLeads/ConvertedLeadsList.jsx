import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../../baseUrl";
import DatatablePage from "../../Components/DataTable/DataTable";
import CustomizedSnackbars from "../../Components/SnackBar/SnackBar";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import {
  darkButton,
  lightBackground,
  lightText,
  white,
} from "../../Assets/Theme/ThemeColors";
import { useSelector } from "react-redux";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const ConvertedLeadsList = () => {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  let navigate = useNavigate();
  // const navigate = useNavigate();

  const columns = [
    {
      label: "Lead Id",
      field: "leadId",
      sort: "asc",
      width: 270,
    },
    {
      label: "Date",
      field: "date",
      sort: "asc",
      width: 270,
    },

    {
      label: "Client Name",
      field: "customer_name",
      sort: "asc",
      width: 100,
    },

    {
      label: "Client Name",
      field: "customer_name",
      sort: "asc",
      width: 100,
    },
    {
      label: "Email Address",
      field: "email",
      sort: "asc",
      width: 100,
    },
    {
      label: "Phone Number",
      field: "phone_number",
      sort: "asc",
      width: 150,
    },
    {
      label: "Brand",
      field: "brand",
      sort: "asc",
      width: 100,
    },
    {
      label: "Lead Status",
      field: "lead_status",
      sort: "asc",
      width: 100,
    },
    {
      label: "Production / Service",
      field: "product_type",
      sort: "asc",
      width: 100,
    },
    {
      label: "Words Count",
      field: "word_count",
      sort: "asc",
      width: 100,
    },
    {
      label: "Amount",
      field: "amount",
      sort: "asc",
      width: 100,
    },
    {
      label: "Remaining Balance",
      field: "remaining_balance ",
      sort: "asc",
      width: 100,
    },
    {
      label: "Merchant",
      field: "merchant ",
      sort: "asc",
      width: 100,
    },
    {
      label: "Agent",
      field: "agent",
      sort: "asc",
      width: 100,
    },
    {
      label: "Order Id",
      field: "order_id",
      sort: "asc",
      width: 100,
    },
    {
      label: "Delivery Date",
      field: "delivery_date",
      sort: "asc",
      width: 100,
    },
    {
      label: "Comment",
      field: "comment",
      sort: "asc",
      width: 100,
    },
    // {
    //   label: "Created By",
    //   field: "created_by",
    //   sort: "asc",
    //   width: 100,
    // },
    {
      label: "Action",
      field: "action",
      sort: "asc",
      width: 100,
    },
  ];

  useEffect(() => {
    return async () => {
      try {
        setIsLoaded(true);
        const response = await axios
          .get(`${url}/convertedLeads/all`)
          .then((data) => {
            console.log("data", data);
            setData({
              columns,
              rows: data.data.data.data.map((item) => ({
                ...item,
                agent: item.agent ? item.agent.user_name : "",
                date: item.date.split("T")[0],
                //  + "-" + item.date.split("T")[1],
                created_by: item.created_by ? item.created_by.user_name : "",
                delivery_date: item.delivery_date.split("T")[0],
                action: (
                  <>
                    <span
                      onClick={() =>
                        navigate(`/ConvertedLead/${item._id}_readOnly`)
                      }
                      style={{ color: `${lightBackground}`, cursor: "pointer" }}
                      title="view "
                    >
                      <RemoveRedEyeIcon />
                    </span>
                    <span
                      onClick={() =>
                        navigate(`/ConvertedLead/${item._id}_update`)
                      }
                      style={{
                        color: `${lightBackground}`,
                        marginLeft: "5px",
                        cursor: "pointer",
                      }}
                      title="edit"
                    >
                      <CreateIcon />
                    </span>
                    <span
                      // onClick={() => navigate(`/ConvertedLead/${item._id}_update`)}
                      style={{
                        color: `${lightBackground}`,
                        marginLeft: "5px",
                        cursor: "pointer",
                      }}
                    >
                      {/* <CreateIcon /> */}
                    </span>
                    <span
                      // prodctionlead/:id
                      onClick={() =>
                        navigate(`/prodctionlead/${item._id}_CREATE`)
                      }
                      style={{
                        color: `${lightBackground}`,
                        marginLeft: "5px",
                        cursor: "pointer",
                      }}
                      title="send to producton"
                    >
                      <KeyboardDoubleArrowRightIcon />
                    </span>
                  </>
                ),
              })),
            });
            setIsOpen(true);
            setMessage("Data Loaded!");
            setSeverity("success");
            setIsLoaded(false);
          });
      } catch (error) {
        console.log("error", error.message);
        setIsLoaded(false);
        setIsOpen(true);
        setMessage(error.message);
        setSeverity("error");
      }
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    };
  }, []);

  return (
    <>
      {" "}
      <Container
        style={{
          maxWidth: "100%",
          padding: "0px",
          overflowY: "scroll",
          height: "90vh",
        }}
      >
        <Paper fullWidth sx={{ m: 1, p: 2, maxWidth: "100%" }}>
          <Grid style={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="h5" color={`${lightText} `}>
              Converted Leads
            </Typography>
          </Grid>
          {/* <Grid xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={() => navigate(`/mainlead/00000000000_CREATE`)}
              variant="contained"
              style={{background:`${lightBackground}` , color:`${white}`}}
              // color={`${darkButton}`}
            >
              Add new Lead
            </Button>
          </Grid> */}
          <DatatablePage data={data} isLoaded={isLoaded} />
        </Paper>
      </Container>
      <CustomizedSnackbars
        isOpen={isOpen}
        severity={severity}
        message={message}
      />
    </>
  );
};

export default ConvertedLeadsList;
