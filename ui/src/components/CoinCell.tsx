"use es6";

import React from "react";
import { Symbol, CryptoName } from "../../types";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import { getCryptoNameFromSymbol } from "../utils/utils";
import styled from "@emotion/styled";

type CoinCellProps = {
  coin: Symbol;
  rank?: number;
};

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 30px 30px auto;
  grid-gap: 10px;
  justify-items: start;
`;

const CoinCell = ({ coin = "???", rank }: CoinCellProps) => {
  // @ts-ignore
  const crypto: CryptoName = getCryptoNameFromSymbol(coin) || {
    symbol: coin,
  };

  return (
    <Container>
      {rank}
      <Avatar style={{ width: 30, height: 30 }} alt={coin} src={crypto.iconUrl}>
        $
      </Avatar>
      <div
        style={{
          display: "grid",
          flexDirection: "column",
          justifyContent: "center",
          lineHeight: 1.3,
        }}
      >
        <Link
          href={`https://www.cointracker.io/price/${coin.toLowerCase()}`}
          target="_blank"
        >
          {coin}
        </Link>
        <div>{crypto.label || coin}</div>
      </div>
    </Container>
  );
};

export default CoinCell;
