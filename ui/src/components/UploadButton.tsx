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
      right: 25,
      bottom: 25,
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
        <Fab className={classes.button} color="primary" component="span">
          <CloudUploadIcon />
        </Fab>
      </label>
    </div>
  );
};

export default UploadButton;
