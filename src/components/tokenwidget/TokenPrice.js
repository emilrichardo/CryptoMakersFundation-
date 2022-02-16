import React from "react";
//import { StaticImage } from "gatsby-plugin-image";
export default function TokePrice({token,loading,iconToken,primaryColor,linkBsc}) {

    let tokenvalue = parseFloat(token.price).toFixed(2);
    let bnbvalue = parseFloat(token.price_BNB).toFixed(6);



    return(

        <>
        {loading
        ? <div className="lds-ripple"><div></div><div></div></div>
        :

        <>
        <p>{token.name}  <span>({token.symbol})</span> </p>
        <div className="d-flex ai-center">
            {/* <StaticImage  style={{overFlow:"visible"}} imgClassName="token-image" src="./../../images/body/cmf-token.svg" alt="CMF Token" /> */}
            <div className="d-flex fd-column ai-start">
                <p className="token-money h1 fw-bold">$ {tokenvalue}</p>
                <p className="token-crypto"><span className="amount">{ bnbvalue }</span> <span className="coin fw-bold">BNB</span></p>
            </div>
        </div>
        <p className="fw-bold">Smart Contracts:</p>

        {/* <div className="tokenprice-content">
            <div className="token-name">
                {iconToken
                ? <img className="icon-token" alt={token.name}  src={iconToken} />
                : <svg className="icon-token"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20V20ZM12 7.05L16.95 12L12 16.95L7.05 12L12 7.05V7.05ZM12 9.879L9.879 12L12 14.121L14.121 12L12 9.879V9.879Z" fill={primaryColor ? primaryColor  : "#B8B8B8"}/>
                    </svg>
                }
                <h5> {token.name}  <span>({token.symbol})</span> </h5>
            </div>

            <div className="token-price">
                <h4 className='usdprice'> <span className="Symbol">$</span> {tokenvalue}</h4>
                <div className='cryptoprice'>{ bnbvalue }  <BnbIcon/><span>BNB</span> </div>
            </div>
            <a href={linkBsc} target="_blank" rel="noreferrer" className="link-bsc" > Binance Smart Chain (BEP20)</a>
        </div> */}
        </>

        }
        </>



    )
};
