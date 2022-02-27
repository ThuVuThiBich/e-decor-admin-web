import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { AttachMoney, Delete, Edit } from "@material-ui/icons";
import { LoadingTable } from "components/Common/LoadingTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer } from "react-toastify";
import { shipmentSelector } from "redux/selectors";
import { deleteShipment, getShipments } from "redux/shipmentRedux";
import ShipmentForm from "./shipmentForm";
import { useStyles } from "./styles";
import "./transactionList.css";

export default function TransactionList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const classes = useStyles();
  const { shipments, isUpdating } = useSelector(shipmentSelector);

  useEffect(() => {
    dispatch(getShipments());
  }, [dispatch, isUpdating]);

  console.log(shipments);
  return (
    <Box style={{ flex: 4 }} p={2}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Box display="flex" alignItems="center">
          <AttachMoney className={classes.icon} />
          <Typography className={classes.title}>Transactions</Typography>
        </Box>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            id ? history.push("/shipment") : history.push("/shipment/add");
          }}
        >
          {id ? "Back To Shipments List" : "Report"}
        </Button>
      </Box>
      <Box my={2} mb={4}>
        {id ? (
          <ShipmentForm />
        ) : (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 600 }}>Shop's Name</TableCell>
                  <TableCell style={{ fontWeight: 600 }} align="center">
                    Transaction's Name
                  </TableCell>
                  <TableCell style={{ fontWeight: 600 }} align="center">
                    Amount
                  </TableCell>
                  <TableCell style={{ fontWeight: 600 }} align="center">
                    Date
                  </TableCell>
                  <TableCell style={{ fontWeight: 600 }} align="center">
                    Status
                  </TableCell>
                  <TableCell style={{ fontWeight: 600 }} align="center">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {true ? (
                  <LoadingTable colsNumber={6} />
                ) : (
                  shipments.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row?.name ? row?.name : "xxx"}</TableCell>
                      <TableCell align="center">
                        {row?.workingTime ? row?.workingTime : "..."}
                      </TableCell>
                      <TableCell align="center">
                        {row?.fee ? row?.fee : "..."}
                      </TableCell>
                      <TableCell align="center">
                        {row?.maxOrderValue ? row?.maxOrderValue : "..."}
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="Edit">
                          <IconButton
                            aria-label="edit"
                            onClick={() => {
                              history.push(`shipment/${row?.id}`);
                            }}
                          >
                            <Edit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton
                            aria-label="delete"
                            onClick={() => {
                              dispatch(deleteShipment(row?.id));
                            }}
                          >
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
      <ToastContainer autoClose={2000} style={{ marginTop: "100px" }} />
    </Box>
  );
}
