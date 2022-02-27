import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import {
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  startOfMonth,
  startOfWeek,
  startOfYear,
} from "date-fns";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { statisticSelector } from "redux/selectors";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import "./home.css";
import { useStyles } from "./styles";
export const VIEWS = [
  { label: "Week", value: "week" },
  { label: "Month", value: "month" },
  { label: "Year", value: "year" },
];
export default function Home() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  // setUserData([])
  const [view, setView] = useState("week");
  const [startDate, setStartDate] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );
  const [endDate, setEndDate] = useState(
    endOfWeek(new Date(), { weekStartsOn: 1 })
  );
  const statisticStore = useSelector(statisticSelector);
  console.log(statisticStore);
  useEffect(() => {
    if (view === "week") {
      setStartDate(startOfWeek(new Date(), { weekStartsOn: 1 }));
      setEndDate(endOfWeek(new Date(), { weekStartsOn: 1 }));
    }
    if (view === "month") {
      setStartDate(startOfMonth(new Date()));
      setEndDate(endOfMonth(new Date()));
    }
    if (view === "year") {
      setStartDate(startOfYear(new Date()));
      setEndDate(endOfYear(new Date()));
    }
  }, [view]);

  useEffect(() => {
    // dispatch(
    //   getStatistics({
    //     startDate: new Date(startDate).toISOString(),
    //     endDate: new Date(endDate).toISOString(),
    //   })
    // );
    // dispatch(
    //   getChart({
    //     startDate: new Date(startDate).toISOString(),
    //     endDate: new Date(endDate).toISOString(),
    //   })
    // );
    setUserData([]);
    // setUserData
  }, []);
  return (
    <div className="home">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
        mx={2}
      >
        <Box display="flex" alignItems="center">
          <HomeIcon className={classes.icon} />
          <Typography className={classes.title}>Home</Typography>
        </Box>
        <Box className={`${classes.flexBasic} ${classes.header}`}>
          <Box className={classes.actionBox}>
            <IconButton
              className={`fas fa-angle-left ${classes.moveIcon}`}
              onClick={() => {}}
            >
              <ChevronLeftIcon />
            </IconButton>
            <Box mx={1}>
              <Typography>
                {format(startDate, "MMM dd, yyyy")} <span> - </span>
                {format(endDate, "MMM dd, yyyy")}
              </Typography>
            </Box>

            <IconButton
              className={`fas fa-angle-right ${classes.moveIcon}`}
              onClick={() => {}}
            >
              <ChevronRightIcon />
            </IconButton>
            <FormControl
              margin="dense"
              variant="outlined"
              className={classes.formControl}
              size="small"
            >
              <InputLabel id="demo-simple-select-outlined-label">
                View
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={view}
                onChange={(e) => {
                  setView(e.target.value);
                }}
                label="View"
                inputProps={{ MenuProps: { disableScrollLock: true } }}
                // SelectDisplayProps={{
                //   style: { paddingTop: 4, paddingBottom: 10 },
                // }}
              >
                {VIEWS?.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Button color="primary" variant="contained">
          Export
        </Button>
      </Box>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
