"use es6";

import React from "react";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const Footer = (props) => {
  return (
    <Container
      style={{
        background: "#fafafa",
        position: "fixed",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        paddingBottom: 16,
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
      }}
      maxWidth={false}
    >
      <span>Made with ❤️ and 🦄</span>
      <span>
        Want to help pay for server costs?{" "}
        <Link
          href="https://help.crypto.com/en/articles/4424992-paystring-how-does-it-work#:~:text=How%20do%20I%20withdraw%20with%20PayString"
          target="_blank"
        >
          Send a few CRO
        </Link>{" "}
        our way at{" "}
        <Link
          href="https://help.crypto.com/en/articles/4424992-paystring-how-does-it-work#how-do-i-register-for-a-paystring-:~:text=How%20do%20I%20register%20for%20a%20PayString%3F"
          target="_blank"
        >
          hodlcrypto$paystring.crypto.com
        </Link>{" "}
        or donate directly through{" "}
        <Link
          href="https://www.paypal.com/donate?business=NXLVNNNCY68SS&currency_code=USD"
          target="_blank"
        >
          PayPal
        </Link>
      </span>
      <Link href="https://nomics.com/" target="_blank">
        Crypto Market Cap & Pricing Data Provided By Nomics
      </Link>
    </Container>
  );
};

export default Footer;
