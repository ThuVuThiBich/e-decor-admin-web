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
import { Add, Delete, Edit, Storefront } from "@material-ui/icons";
import { LoadingTable } from "components/Common/LoadingTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer } from "react-toastify";
import { shipmentSelector } from "redux/selectors";
import { deleteShipment, getShipments } from "redux/shipmentRedux";
// import ShipmentForm from "./shipmentForm";
import "./shopList.css";
import { useStyles } from "./styles";

export default function ShopList() {
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
          <Storefront className={classes.icon} />
          <Typography className={classes.title}>Shops</Typography>
        </Box>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            id ? history.push("/shops") : history.push("/shops/add");
          }}
        >
          {id ? (
            "Back To Shipments List"
          ) : (
            <>
              <Add />
              New Shop
            </>
          )}
        </Button>
      </Box>
      <Box my={2} mb={4}>
        {id ? (
          // <ShipmentForm />
          <></>
        ) : (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 600 }}>Shop's Name</TableCell>
                  <TableCell style={{ fontWeight: 600 }} align="center">
                    Email
                  </TableCell>
                  <TableCell style={{ fontWeight: 600 }} align="center">
                    Phone
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
                  <LoadingTable colsNumber={5} />
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
                              history.push(`/shops/${row?.id}`);
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
