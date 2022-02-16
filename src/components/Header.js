import React, { useState, useEffect } from "react";
import logo from "../images/logo/logo.svg";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { useTranslation } from "react-i18next";
import logoWhite from "../images/logo/logo_white.svg";
import WhitepaperEn from "../whitepaper/whitepaper_en.pdf"
import WhitepaperEs from "../whitepaper/whitepaper_es.pdf"

const Header = () => {
  const { language} = useI18next();

  let WhitePaperLink =  WhitepaperEn
  if (language === "es"){
      WhitePaperLink = WhitepaperEs;
  }

  const { languages, originalPath } = useI18next();
  const { t } = useTranslation();
  const [toggleMenu, setToggleMenu] = useState(false);

  const MenuToggleSwitch = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };

  const [scrolled, setScrolled] = useState(false);
  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header id="header" className={`w-100 ${scrolled ? "add-bg" : ""}`}>
      <div className="nav-wrap d-flex jc-between ai-center m-center">
        <div className="d-flex ai-center">
          <a href="./" className="logo">
            <img src={logoWhite} alt="Crypto Makers Foundation" />
            <img
              src={logo}
              alt="Crypto Makers Foundation"
              className="logo_mobile"
            />
          </a>
          <div className="lang-switcher">
            {languages.map((lng) => (
              <Link
                className="lang-switcher--a"
                to={originalPath}
                language={lng}
                key={lng}
              >
                {lng}
              </Link>
            ))}
          </div>
        </div>
        <button
          className="menu-bars"
          tabIndex="-1"
          aria-label="Menu"
          onClick={MenuToggleSwitch}
          onKeyDown={MenuToggleSwitch}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav
          id="nav-primary"
          className={
            toggleMenu ? "nav d-flex ai-center active" : "nav d-flex ai-center"
          }
        >
          <div className="menu-wrap">
            <a href="#hero" onClick={MenuToggleSwitch} className="nav-item">
              {t("Menu_Home")}
            </a>
            <a href="#stake" onClick={MenuToggleSwitch} className="nav-item">
              {t("Menu_Stake")}
            </a>
            <a href="#gamefi" onClick={MenuToggleSwitch} className="nav-item">
              {t("Menu_Gamefi")}
            </a>
            <a href="#roadmap" onClick={MenuToggleSwitch} className="nav-item">
              {t("Menu_Roadmap")}
            </a>
            <a href="#aboutus" onClick={MenuToggleSwitch} className="nav-item">
              {t("Menu_About")}
            </a>
            <a href={WhitePaperLink} target="_blank" rel="noreferrer"  onClick={MenuToggleSwitch} className="nav-item">
              Whitepaper
            </a>
          </div>
          <a
            href="https://pancakeswap.finance/info/token/0xf309993f0e27a34580b2fc12fdc37095fbdc104f"
            target="_blank"
            rel="noreferrer"
            className="nav-btn btn outline c-transparent tc-white"
          >
            {/* {t("Btn_Connect_Wallet")} */}
            {t("Btn_BuyNow")}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
