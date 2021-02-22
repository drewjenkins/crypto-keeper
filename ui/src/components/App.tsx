"use es6";

import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
// import RawDataTable from "./RawDataTable";
import PrettyDataTable from "./PrettyDataTable";
import UploadButton from "./UploadButton";
import { ticker } from "../api/crypto";

const App = (props) => {
  const [data, setData] = React.useState([]);
  const [tickerData, setTickerData] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      setTickerData(await ticker());
    })();
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: 100 }}>
      <CssBaseline />
      <UploadButton onLoad={setData} />
      {/* <RawDataTable data={data} /> */}
      <PrettyDataTable data={data} tickerData={tickerData} />
    </Container>
  );
};

export default App;
