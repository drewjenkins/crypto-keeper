"use es6";

import React from "react";
import TrendArrow from "./TrendArrow";
import { red, green } from "../colors";

type TrendCellProps = {
  currentValue: number;
  lastValue: number;
  valueLabel: string;
  hideArrow?: boolean;
};

const TrendCell = (props: TrendCellProps) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          marginLeft: 5,
          color: props.currentValue > 0 ? green : red,
        }}
      >
        {props.valueLabel}
      </span>
      {!props.hideArrow && (
        <div style={{ display: "flex", alignItems: "center", marginRight: 30 }}>
          <TrendArrow
            currentValue={props.currentValue}
            lastValue={props.lastValue}
            hideTooltip={true}
          />
        </div>
      )}
    </div>
  );
};

export default TrendCell;
