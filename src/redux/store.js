import { configureStore } from "@reduxjs/toolkit";
import userReducer from "pages/Auth/userSlice";
import shipmentReducer from "./shipmentRedux";

export default configureStore({
  reducer: {
    user: userReducer,
    shipment: shipmentReducer,
  },
});
