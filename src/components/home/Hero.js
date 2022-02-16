import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";
import TokenWidget from "../../components/tokenwidget";
import coinGecko from "./../../images/body/coingecko.svg"
import coinCodex from "./../../images/body/coincodex.svg"

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="anchor" id="hero"></div>
      <div className="block-box-bg hero">
        <div className="bg-overlay mv-overlay"></div>

        <StaticImage
          className="block-box-full--img absolute"
          imgClassName="block-box-full--img "
          alt="hero"
          src="./../../images/hero/hero.jpg"
        />

        <StaticImage
          src="./../../images/hero/hero-chars.png"
          alt=""
          className="hero-img op-trans absolute"
        />

        <div className="wrapper ai-center med-jc-center tc-white med-ai-end">
          <div className="w-50 med-w-100 med-t-center p-0-30">
            <h1 className="h1 fw-medium hero-title">{t("Hero_1")}</h1>
            <p className="h4">{t("Hero_2")}</p>

            <div className="cmf-token d-flex fd-column ai-start med-ai-center">
              <TokenWidget
                className="cardtokencustom"
                contract="0xf309993f0e27a34580b2fc12fdc37095fbdc104f"
                linkBsc="https://bscscan.com/token/0xf309993f0e27a34580b2fc12fdc37095fbdc104f"
                //iconToken={iconToken}
                theme="dark"
                bgIcon="true"
                widthCard="100%"
                transparent="true"
                //primaryColor="#290062"
                customBg="rgba(41, 0, 98,0)"
              />
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
              <a
                href="https://pancakeswap.finance/info/token/0xf309993f0e27a34580b2fc12fdc37095fbdc104f"
                target="_blank"
                rel="noreferrer"
                className="btn c-yellow tc-violet-black"
              >
                {t("Btn_BuyNow")}
              </a>
              <a
              href="https://www.coingecko.com/en/coins/crypto-makers-foundation"
              target="_blank"
              rel="noreferrer"
              >
                <img style={{width:"35px", marginTop:"15px", marginLeft:"25px"}} src={coinGecko} alt="coingecko" className="coingecko-icon" />
              </a>
              <a
              href="https://coincodex.com/crypto/crypto-makers-foundation/"
              target="_blank"
              rel="noreferrer"
              >
                <img style={{width:"35px", marginTop:"15px", marginLeft:"25px"}} src={coinCodex} alt="coincodex" className="coingecko-codex" />
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
