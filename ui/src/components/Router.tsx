import React, { Component } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import TransactionLog from "./TransactionLog";
import RawDataTable from "./RawDataTable";
import Market from "./Market";
import Positions from "./Positions";
import { Switch, Route, Link } from "react-router-dom";

const Routes = (props) => {
  const handleCallToRouter = (event, value) => {
    props.history.push(value);
  };

  return (
    <Route
      path="/"
      render={({ location }) => (
        <>
          <Tabs value={location.pathname}>
            <Tab
              label="Prices"
              component={Link}
              value="/"
              to={{
                pathname: "/",
                search: props.location.search,
              }}
            />
            <Tab
              label="Positions"
              component={Link}
              value="/positions"
              to={{
                pathname: "/positions",
                search: props.location.search,
              }}
            />
            <Tab
              label="Transaction Log"
              component={Link}
              value="/transaction-log"
              to={{
                pathname: "/transaction-log",
                search: props.location.search,
              }}
            />
            <Tab
              label="Raw Data"
              component={Link}
              value="/raw-data"
              to={{ pathname: "/raw-data", search: props.location.search }}
            />
          </Tabs>
          <Switch>
            <Route path="/raw-data" component={RawDataTable} />
            <Route path="/positions" component={Positions} />
            <Route path="/transaction-log" component={TransactionLog} />
            <Route path="/" component={Market} />
          </Switch>
        </>
      )}
    />
  );
};

export default withRouter(Routes);
