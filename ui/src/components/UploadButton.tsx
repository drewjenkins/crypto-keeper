"use es6";

import React from "react";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { updateTransactions } from "../actions/transactions";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: "none",
    },
    button: {
      position: "fixed",
      top: 25,
      right: 25,
      zIndex: 2,
    },
  })
);

const UploadButton = (props) => {
  const classes = useStyles();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTransactions(e.target.files[0]);
  };

  return (
    <div className={classes.root}>
      <input
        accept=".csv"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleUpload}
      />
      <label htmlFor="contained-button-file">
        <Fab
          variant="extended"
          color="primary"
          className={classes.button}
          component="span"
        >
          <span style={{ marginRight: 5 }}>
            Upload Crypto.com Transaction History
          </span>
          <CloudUploadIcon />
        </Fab>
      </label>
    </div>
  );
};

export default UploadButton;
