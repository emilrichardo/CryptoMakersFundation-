import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import axios from "axios";
import CopyAdress from "./CopyAdress";
import TokenPrice from "./TokenPrice";
import MetaMask from "./metamask/";

export default function TokenWidget({
  className,
  contract,
  iconToken,
  theme,
  customBg,
  transparent,
  bgIcon,
  widthCard,
  primaryColor,
  linkBsc,
}) {
  const [token, setToken] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.pancakeswap.info/api/v2/tokens/${contract}`)
      .then((res) => {
        const token = res.data;
        setToken(token.data);
        setLoading(false);
      });
  }, [contract]);

  const ref = useRef(null);

  const [cardAttributes, setCardAttributes] = useState();
  useEffect(() => {
    setCardAttributes(ref.current.offsetWidth);
  }, []);

  //console.log(cardAttributes)

  let formatCard = "";
  if (cardAttributes < 768) {
    formatCard = " card-sm ";
  }
  if (cardAttributes < 240) {
    formatCard = " card-xs ";
  }
  if (cardAttributes > 768) {
    formatCard = " card-md ";
  }
  /*    if (cardAttributes > 900){
            formatCard = " card-lg "
        }

        if (cardAttributes > 1400){
            formatCard = " card-xlg "
        }
    */

  let themeWidget;
  if (theme === "dark") {
    themeWidget = " theme-dark";
  }
  if (theme === "light") {
    themeWidget = " theme-light";
  }

  let opacity = "";
  if (transparent === "true") {
    opacity = " bg-transparent ";
  }

  let tokenBg;
  if (bgIcon === "true") {
    tokenBg = "url(" + iconToken + ")";
  } else {
    tokenBg = "none";
  }

  return (
    <div
      ref={ref}
      id="cardtoken"
      className={
        className +
        " " +
        themeWidget +
        " " +
        formatCard +
        " " +
        opacity +
        " card-token "
      }
      style={{
        backgroundColor: `${customBg}`,
        width: `${widthCard}`,
        borderColor: `${primaryColor ? primaryColor : "trasnparent"}`,
        borderWidth: `${primaryColor ? "5px" : "0"}`,
      }}
    >
      <div className="content-token">
        <TokenPrice
          token={token}
          loading={loading}
          contract={contract}
          iconToken={iconToken}
          primaryColor={primaryColor}
          linkBsc={linkBsc}
        />

        <div className="inputgroup-contract">
          <a
            href={linkBsc}
            target="_blank"
            style={{ display: "flex" }}
            rel="noreferrer"
          >
            {" "}
            <BnbIcon />
          </a>
          <CopyAdress contract={contract} />
          <MetaMask token={token} iconToken={iconToken} contract={contract} />
        </div>
      </div>
      <div className="bg-token" style={{ backgroundImage: `${tokenBg}` }}></div>
    </div>
  );
}

export function BnbIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
      style={{
        enableBackground: "new 0 0 50 50",
        width: "25px",
        margin: "10px 15px",
      }}
      xmlSpace="preserve"
    >
      <polygon
        fill="#EFBA37"
        points="34.983,21.581 40.689,15.875 24.996,0.183 9.306,15.875 15.012,21.581 24.996,11.593 "
      />
      <rect
        x="40.019"
        y="20.911"
        fill="#EFBA37"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.7362 38.4569)"
        width="8.069"
        height="8.069"
      />
      <polygon
        fill="#EFBA37"
        points="24.996,38.3 15.012,28.313 9.306,34.018 24.996,49.708 40.689,34.018 34.983,28.313 "
      />
      <rect
        x="1.905"
        y="20.912"
        fill="#EFBA37"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -15.8998 11.5067)"
        width="8.07"
        height="8.068"
      />
      <rect
        x="20.314"
        y="20.264"
        fill="#EFBA37"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -10.318 24.9807)"
        width="9.362"
        height="9.362"
      />
    </svg>
  );
}
