"use es6";

import React from "react";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import { convertCurrencyToNumber } from "../utils/utils";
import { red, green } from "../colors";
import Tooltip from "@material-ui/core/Tooltip";
import { formatCurrency, formatPercentage } from "../utils/formatting";

const TrendArrow = ({ currentValue, lastValue, hideTooltip = false }) => {
  let val1 = currentValue;
  if (typeof currentValue === "string") {
    val1 = convertCurrencyToNumber(val1);
  }
  let val2 = lastValue;
  if (typeof lastValue === "string") {
    val2 = convertCurrencyToNumber(val2);
  }

  if (typeof val1 !== "number" || typeof val2 !== "number" || val1 === val2) {
    return <TrendingFlatIcon />;
  }
  const formattedDifference = formatPercentage((val1 - val2) / val1);

  if (val1 > val2) {
    if (hideTooltip) return <TrendingUpIcon style={{ fill: green }} />;
    return (
      <Tooltip title={`Up ${formattedDifference}`} arrow>
        <TrendingUpIcon style={{ fill: green }} />
      </Tooltip>
    );
  }
  if (hideTooltip) return <TrendingDownIcon style={{ fill: red }} />;
  return (
    <Tooltip title={`Down ${formattedDifference}`} arrow>
      <TrendingDownIcon style={{ fill: red }} />
    </Tooltip>
  );
};

export default TrendArrow;
