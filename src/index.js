import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "redux/store";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from "notistack";
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
  },
});
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <SnackbarProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </SnackbarProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
