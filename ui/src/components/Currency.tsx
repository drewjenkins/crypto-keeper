"use es6";

import React from "react";
import { green, red } from "../colors";
import { convertCurrencyToNumber } from "../utils/utils";

type CurrencyProps = {
  value: string;
};
const Currency = (props: CurrencyProps) => {
  return (
    <span
      style={{
        color: convertCurrencyToNumber(props.value) > 0 ? green : red,
      }}
    >
      {props.value}
    </span>
  );
};

export default Currency;
