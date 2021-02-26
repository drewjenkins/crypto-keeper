"use es6";

import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import UploadButton from "./UploadButton";
import { updateTicker } from "../actions/ticker";
import Router from "./Router";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

const ws = new WebSocket(`ws://crypto-keeper-api.herokuapp.com`);
ws.onmessage = function (event) {
  const message = JSON.parse(event.data);
  if (message.id !== "updateTicker") return;
  if (!message.data.error) {
    updateTicker(message.data);
  }
};

const App = (props) => {
  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: 60 }}>
        <CssBaseline />
        <UploadButton />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Container>
      <Footer />
    </>
  );
};

export default App;
