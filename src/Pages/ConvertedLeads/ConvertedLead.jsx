import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../../baseUrl";
import { useSelector } from "react-redux";
import axios from "axios";
import { lightBackground, white } from "../../Assets/Theme/ThemeColors";
import CustomizedSnackbars from "../../Components/SnackBar/SnackBar";

const MainLeadsForm = () => {
  let { id } = useParams();
  let param = id.split("_");

  let leadId = param[0];
  let accessType = param[param.length - 1];

  const navigate = useNavigate();

  const state = useSelector((state) => state.user.data);

  const [agents, setAgents] = useState([]);
  const [orderID, setOrderID] = useState("0000");
  const [date, setDate] = useState(
    `${
      new Date().getMonth() +
      1 +
      " / " +
      new Date().getDate() +
      " / " +
      new Date().getFullYear()
    }`
  );
  const [month, setMonth] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [brand, setBrand] = useState("");
  const [status, setStatus] = useState("");
  const [productType, setProductType] = useState("");
  const [wordCount, setWordCount] = useState("");
  const [amount, setAmount] = useState(0);
  const [remainingBalance, setRemainingBalance] = useState(0);
  const [merchant, setMerchant] = useState("");
  const [agent, setAgent] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  const [comment, setComment] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);

  //notify states
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    return async () => {
      const response = await axios
        .post(
          `${url}${
            accessType === "CREATE"
              ? "/leads/getSpecific"
              : "/convertedLeads/getSpecific"
          }`,
          { _id: leadId }
        )
        .then((response) => {
          let data = response.data.data.data;
          console.log(data);
          setIsDisable(true);
          if (accessType === "CREATE") {
            setName(data.client_name);
            setEmail(data.email);
            setPhone(data.phone_number);
            setBrand(data.brand);
            setAgent(data.agent_name ? data.agent_name.user_name : "");
            setComment(data.comment);
          } else {
            //reaOnly and update
            setName(data.customer_name);
            setEmail(data.email);
            setPhone(data.phone_number);
            setBrand(data.brand);
            setStatus(data.lead_status);
            setProductType(data.product_type);
            setWordCount(data.word_count);
            setAmount(data.amount);
            setRemainingBalance(data.remaining_balance);
            setMerchant(data.merchant);
            setDeliveryDate(data.delivery_date);
            setAgent(data.agent_name ? data.agent_name.user_name : "");
            setComment(data.comment);

            if (accessType === "update") {
              setIsReadOnly(false);
            } else {
              setIsReadOnly(true);
            }
          }
        });
    };
  }, []);

  useEffect(() => {
    return async () => {
      try {
        setIsLoaded(true);
        const response = await axios
          .get(`${url}/auth/getAllUsers`)
          .then((data) => {
            console.log(data.data.data.data);
            let users = data.data.data.data;

            users = users.filter((user) => {
              if (user.user_type === "sales_agent") {
                agents.push(user);
                return user;
              }
            });
            console.log(users);

            // setAgents(users);
            console.log(agents);

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
  const submitForm = async () => {
    setIsLoaded(true);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const d = new Date();
    setMonth(monthNames[d.getMonth()]);
    const data = {
      month: monthNames[d.getMonth()],
      customer_name: name,
      email: email,
      phone_number: phone,
      brand,
      lead_status: status,
      product_type: productType,
      word_count: productType,
      amount: amount,
      remaining_balance: remainingBalance,
      merchant,
      agent,
      order_id: orderID,
      delivery_date: deliveryDate,
      comment,
    };
    await axios
      .post(`${url}/convertedLeads`, data, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then(function (response) {
        if (response.data.data.success) {
          console.log(response.data.data.data);

          let id = response.data.data.data._id;

          navigate(`/convertedlead/${id}_readOnly`);

          console.log("true");
          setIsOpen(true);
          setMessage("Lead Converted Successfully!");
          setSeverity("success");
          // setIsLoaded(false);
        } else {
          setIsOpen(true);
          setMessage(response.data.data.message);
          setSeverity("error");
          console.log(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
        setIsOpen(true);
        setMessage(error.message);
        setSeverity("error");
      });
    setTimeout(() => {
      setIsOpen(false);
      setIsLoaded(false);
    }, 2000);
  };

  return (
    <>
      <Container
        style={{
          maxWidth: "100%",
          padding: "0px",
          overflowY: "scroll",
          height: "90vh",
        }}
      >
        <Box sx={{ mt: 3 }}>
          <Paper sx={{ p: 3, mr: 2, ml: 2 }}>
            <Grid container sx={{ mt: 1, p: 3 }}>
              <Typography variant="h5" color="Primary">
                Convert Lead
              </Typography>
            </Grid>
            <Grid item className="Row" sx={{ p: 1 }}>
              <Grid item container md={9} xs={12}>
                <TextField
                  name="date"
                  label="Date"
                  // type="date"
                  margin="normal"
                  disabled={true}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container className="Row">
              <Grid item container md={4} xs={12} sx={{ p: 1 }}>
                <TextField
                  name="clientName"
                  label="Client Name"
                  type="text"
                  margin="normal"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isDisable}
                />
              </Grid>
              <Grid item container md={4} xs={12} sx={{ p: 1 }}>
                <TextField
                  name="clientEmail"
                  label="Client Email"
                  type="text"
                  margin="normal"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isDisable}
                />
              </Grid>
              <Grid item container md={4} xs={12} sx={{ p: 1 }}>
                <TextField
                  name="clientPhone"
                  label="Client Phone No."
                  type="text"
                  margin="normal"
                  fullWidth
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={isDisable}
                />
              </Grid>
            </Grid>
            <Grid container className="Row">
              <Grid item container md={4} xs={12} sx={{ p: 1 }}>
                <TextField
                  name="brand"
                  label="Brand Name"
                  type="text"
                  margin="normal"
                  fullWidth
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  disabled={isDisable}
                />
              </Grid>
              <Grid item container md={4} xs={12} sx={{ p: 1 }}>
                <TextField
                  name="status"
                  label="Lead Status"
                  type="text"
                  margin="normal"
                  fullWidth
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  disabled={isReadOnly}
                />
              </Grid>
              <Grid item container md={4} xs={12} sx={{ p: 1 }}>
                <TextField
                  name="productType"
                  label="Product Type"
                  type="text"
                  margin="normal"
                  fullWidth
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  disabled={isReadOnly}
                />
              </Grid>
            </Grid>
            <Grid container className="Row">
              <Grid item container md={4} xs={12} sx={{ p: 1 }}>
                <TextField
                  name="wordCount"
                  label="Word Count"
                  type="text"
                  margin="normal"
                  fullWidth
                  value={wordCount}
                  onChange={(e) => setWordCount(e.target.value)}
                  disabled={isReadOnly}
                />
              </Grid>
              <Grid item container md={4} xs={12} sx={{ p: 1 }}>
                <TextField
                  name="amount"
                  label="Amount"
                  type="text"
                  margin="normal"
                  fullWidth
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  disabled={isReadOnly}
                />
              </Grid>
              <Grid item container md={4} xs={12} sx={{ p: 1 }}>
                <TextField
                  name="remainingBalance"
                  label="Remaining Balance"
                  type="text"
                  margin="normal"
                  fullWidth
                  value={remainingBalance}
                  onChange={(e) => setRemainingBalance(e.target.value)}
                  disabled={isReadOnly}
                />
              </Grid>
            </Grid>
            <Grid container className="Row">
              <Grid item container md={4} xs={12} sx={{ p: 1 }}>
                <TextField
                  name="merchant"
                  label="Merchant"
                  type="text"
                  margin="normal"
                  fullWidth
                  value={merchant}
                  onChange={(e) => setMerchant(e.target.value)}
                  disabled={isReadOnly}
                />
              </Grid>
              <Grid item container md={8} xs={12} sx={{ p: 1 }}>
                <FormControl margin="normal" fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Select Sales Agent
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={agent}
                    onChange={(e) => setAgent(e.target.value)}
                    fullWidth
                    label="Select Sales Agent"
                  >
                    {/* <MenuItem value="">
                      <em>None</em>
                    </MenuItem> */}
                    {agents
                      ? agents.map((item) => (
                          <MenuItem fullWidth value={item._id}>
                            {item.user_name + "-" + item.user_email}
                          </MenuItem>
                        ))
                      : ""}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item container md={9} xs={12}>
                <TextField
                  name="deliverydate"
                  label="Delivery Date"
                  // type="date"
                  margin="normal"
                  disabled={isReadOnly}
                  value={`${
                    new Date().getMonth() +
                    1 +
                    " / " +
                    new Date().getDate() +
                    " / " +
                    new Date().getFullYear()
                  }`}
                />
              </Grid>
            </Grid>
            <Grid container className="Row">
              <Grid item container md={12} xs={12} sx={{ p: 1 }}>
                <TextField
                  name="comment"
                  label="Comment"
                  multiline
                  rows={4}
                  type="text"
                  margin="normal"
                  fullWidth
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  disabled={isDisable}
                />
              </Grid>
            </Grid>
            <Grid
              container
              className="Row"
              sx={{ mt: 2 }}
              style={{
                gap: "10px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Grid item container md={1} xs={1}>
                <Button
                  type="clear"
                  style={{
                    border: `1px solid ${lightBackground}`,
                    color: `${lightBackground}`,
                    background: `${white}`,
                  }}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  onClick={() => {
                    navigate("/convertedlead/list");
                  }}
                >
                  back
                </Button>
              </Grid>
              {accessType !== "readOnly" ? (
                <Grid item container md={1} xs={1}>
                  <Button
                    onClick={submitForm}
                    variant="contained"
                    style={{
                      background: `${lightBackground}`,
                      color: `${white}`,
                    }}
                    margin="normal"
                    fullWidth
                    disabled={isLoaded}
                  >
                    {isLoaded ? (
                      <span>
                        {" "}
                        <CircularProgress
                          style={{
                            color: `${white}`,
                            height: "20px",
                            width: "20px",
                          }}
                        />
                      </span>
                    ) : accessType === "CREATE" ? (
                      "save"
                    ) : (
                      "UPDATE"
                    )}
                  </Button>
                </Grid>
              ) : (
                []
              )}
            </Grid>
          </Paper>
        </Box>
      </Container>
      <CustomizedSnackbars
        isOpen={isOpen}
        severity={severity}
        message={message}
      />
    </>
  );
};

export default MainLeadsForm;
