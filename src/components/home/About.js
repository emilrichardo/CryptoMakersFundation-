import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Defisvg from "./images/Defisvg";
import Gamefisvg from "./images/Gamefisvg";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <section className="c-grad-violet rel">
        <div className="stars abs"></div>
        <div className="rel">
          <div className="anchor" id="aboutus"></div>
          <div className="block-content bottom center">
            <h2 className="h2 tc-blue t-center">{t("About_01")}</h2>
            <p
              className="t-center tc-violet-white h3"
              dangerouslySetInnerHTML={{
                __html: t("About_02", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          </div>

          <div className="block-content pd-down0">
            <div className="block-box right ai-end">
              <div className="block-box--img t-center animated">
                <Defisvg />
              </div>
              <div className="wrapper">
                <p className="t-right small-t-center tc-white">
                  {t("About_03")}
                </p>
                <h2 className="h3 tc-blue t-right small-t-center">
                  {t("About_04")}
                </h2>
                <p className="t-right tc-violet-white small-t-left">
                  {t("About_05")}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rel">
          <div className="anchor" id="gamefi"></div>
          <div className="block-content pd-top0">
            <div className="block-box">
              <div className="block-box--img t-center  animated">
                <Gamefisvg />
              </div>
              <div className="wrapper">
                <h2 className="h3 tc-blue">{t("Gamefi_01")}</h2>
                <p className="tc-violet-white">{t("Gamefi_02")}</p>
              </div>
            </div>
          </div>

          <div className="block-content">
            <h2 className="h2 tc-white t-center">{t("Questions_Title")}</h2>
            <div className="grid col-2 small-col-1 g-100 m-down0">
              <div className="t-right small-t-center">
                <StaticImage
                  src="./../../images/body/scholar.svg"
                  alt=""
                  className="scholar-img ml-auto small-m-center  lozad"
                />
                <h3 className="h4 tc-white">{t("Questions_SubTitle_01")}</h3>
                <p
                  className="small-t-left tc-violet-white"
                  dangerouslySetInnerHTML={{
                    __html: t("Questions_Text_01", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              </div>
              <div className="small-t-center">
                <StaticImage
                  src="./../../images/body/contributor.svg"
                  alt=""
                  className="contributor-img small-m-center  lozad"
                />
                <h3 className="h4 tc-white">{t("Questions_SubTitle_02")}</h3>
                <p className="small-t-left tc-violet-white">
                  {t("Questions_Text_02")}
                </p>
              </div>
            </div>
            <div className="t-center">
              <a
                href="https://discord.gg/9zk9sRsdxA"
                target="_blank"
                rel="noreferrer"
                className="discord-link h5 tc-white d-flex ai-center jc-center m-center"
              >
                <StaticImage
                  src="./../../images/icons/social/discord.svg"
                  alt="discord"
                  className="findus-icon lozad"
                />
                <span className="underline">{t("Questions_Link")}</span>
                <svg
                  className="arrow-right"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 8.47 14.4"
                >
                  <polygon
                    fill="#fff"
                    points="0 13.13 1.27 14.4 8.47 7.2 1.27 0 0 1.27 5.92 7.2 0 13.13"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
