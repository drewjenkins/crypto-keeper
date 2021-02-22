"use es6";

import React from "react";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Papa from "papaparse";

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

  const handleUpload = (e) => {
    var reader = new FileReader();
    reader.onload = function () {
      Papa.parse(reader.result, {
        complete: function (results) {
          props.onLoad(
            results.data
              .filter((d) => !!d["Timestamp (UTC)"])
              .map((d) => ({
                ...d,
                Amount: parseFloat(d.Amount),
                "Native Amount": parseFloat(d["Native Amount"]),
                "Native Amount (in USD)": parseFloat(
                  d["Native Amount (in USD)"]
                ),
                "To Currency": d["To Currency"] || null,
                "To Amount": d["To Amount"] ? parseFloat(d["To Amount"]) : null,
              }))
          );
        },
        header: true,
      });
    };
    reader.readAsText(e.target.files[0]);
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
