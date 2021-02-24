"use es6";

import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import UploadButton from "./UploadButton";
import { getTicker } from "../actions/ticker";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

const App = (props) => {
  React.useEffect(() => {
    setInterval(async () => {
      getTicker();
    }, 125000);
  }, []);
  getTicker();

  return (
    <Container maxWidth="xl" style={{ marginTop: 100 }}>
      <CssBaseline />
      <UploadButton />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Container>
  );
};

export default App;
