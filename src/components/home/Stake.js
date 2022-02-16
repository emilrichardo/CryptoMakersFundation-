import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";

export default function Stake() {
  const { t } = useTranslation();
  return (
    <>
      <section className="c-violet-dark rel">
        <div className="anchor" id="stake"></div>
        <StaticImage
          src="./../../images/body/line-commet.svg"
          alt="line-comment"
          className="commet abs"
        />
        <div className="block-content pd-down0">
          <div className="block-box right ai-end">
            <div
              className="block-box--img"
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-easing="ease"
            >
              <StaticImage
                className="gamers-img med-w-80 small-w-70 m-center "
                src="./../../images/body/gamers.png"
                alt="gamers"
              />
            </div>
            <div className="wrapper">
              <h2 className="h3 tc-magenta t-right small-t-center">
                {t("Stake_01")}
              </h2>
              <p className="t-right small-t-left tc-violet-white">
                {t("Stake_02")}
              </p>
            </div>
          </div>
        </div>
        <div className="block-content pd-top0">
          <div className="block-box">
            <div
              className="block-box--img"
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-easing="ease"
              style={{ textAlign: "center" }}
            >
              <StaticImage
                className="axie-img med-w-80 small-w-70 m-center "
                src="./../../images/body/cmc500.png"
                alt=""
              />
            </div>
            <div className="wrapper">
              <h2 className="h3 tc-magenta small-t-center">{t("Stake_03")}</h2>
              <p className="tc-white h5 fw-bold">{t("Stake_04")}</p>
              <ul className="as-list  tc-violet-white">
                <li className="list-item">{t("Key_Stats_01")}</li>
                <li className="list-item">{t("Key_Stats_02")}</li>
                <li className="list-item">{t("Key_Stats_03")}</li>
                <li className="list-item">{t("Key_Stats_04")}</li>
                <li className="list-item">{t("Key_Stats_05")}</li>
                <li className="list-item">{t("Key_Stats_06")}</li>
                <li className="list-item"> {t("Key_Stats_07")}</li>
                <h4>{t("Key_Stats_08")}</h4>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="rel">
        <StaticImage
          src="./../../images/body/3d-space.svg"
          alt=""
          className="w-100 lozad"
        />
        <StaticImage
          className="gamer w-20 med-w-30 small-w-40 abs lozad"
          alt="gamer"
          src="./../../images/body/gamer.png"
        />
      </section>
    </>
  );
}
