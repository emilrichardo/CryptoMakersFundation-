import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Tokenomics() {
  return (
    <section className="c-grad-violet-t">
      <div className="anchor" id="tokenomics"></div>
      <div className="block-content center">
        <h2 className="h1 tc-white t-center">Tokenomics</h2>
        <p className="tokenomics-subtitle tc-white h5 m-center t-center br-30">
          1.000.000.000
        </p>
        <h3 className="h5 f-roboto tc-white t-center distribution-subtitle">
          Token distribution
        </h3>
        <div className="grid g-60 grid-graph m-down0">
          <div
            className="graph med-t-center"
            data-sal="animated"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            <svg
              id="graph-svg"
              className="w-100 med-w-60 small-w-80"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 633.38 509.68"
            >
              <g id="d-glow-disk" className="gp-cls-1">
                <path
                  className="gp-cls-2 seed"
                  d="M393,190.84l76-97.38c-45-17.33-96.73-27.21-151.71-27.27V177.13A212.48,212.48,0,0,1,393,190.84Z"
                />
                <path
                  className="gp-cls-2 treasury"
                  d="M316.69,177.13h.56V66.19h-.56c-91.27,0-173.51,27.05-231.3,70.3l115.41,76C229.69,190.74,270.92,177.13,316.69,177.13Z"
                />
                <path
                  className="gp-cls-2 private-sale"
                  d="M473.57,302.5l157,14.81q1.41-7.47,2.1-15.11l-158.15-6.81Q474.23,299,473.57,302.5Z"
                />
                <path
                  className="gp-cls-2 investors"
                  d="M450.67,229l133-60.35C555.09,137.32,515.6,111.4,469,93.46l-76,97.38C416.51,199.93,436.39,213.08,450.67,229Z"
                />
                <path
                  className="gp-cls-2 strategic"
                  d="M474.93,287.93c0,2.51-.13,5-.37,7.46l158.15,6.81c.43-4.72.67-9.48.67-14.27,0-43.93-18.24-84.87-49.71-119.32L450.67,229C466,246,474.93,266.25,474.93,287.93Z"
                />
                <path
                  className="gp-cls-2 staking"
                  d="M158.45,287.93c0-29.14,16.08-55.65,42.35-75.43l-115.41-76C32.44,176.12,0,229.37,0,287.93c0,38.73,14.19,75.13,39.12,106.82l138.79-53.57C165.51,325.38,158.45,307.23,158.45,287.93Z"
                />
                <path
                  className="gp-cls-2 team"
                  d="M410,377.43l92.93,89.86c52.94-27,93.47-65.19,114.48-109.62L466.63,323.43C456.08,345.28,436.05,364.08,410,377.43Z"
                />
                <path
                  className="gp-cls-2 airdrop"
                  d="M400.91,381.74l85.24,93.54q8.57-3.81,16.75-8L410,377.43Q405.56,379.68,400.91,381.74Z"
                />
                <path
                  className="gp-cls-2 ido"
                  d="M473.57,302.5a84,84,0,0,1-6.94,20.93l150.75,34.24a167,167,0,0,0,13.23-40.36Z"
                />
                <path
                  className="gp-cls-2 advisors"
                  d="M346.8,396.71l29.49,109a423.22,423.22,0,0,0,56.61-11.47L375.25,390.89A209.75,209.75,0,0,1,346.8,396.71Z"
                />
                <path
                  className="gp-cls-2 gamers"
                  d="M375.25,390.89,432.9,494.27a382.34,382.34,0,0,0,53.25-19l-85.24-93.54A190.4,190.4,0,0,1,375.25,390.89Z"
                />
                <path
                  className="gp-cls-2 gamefi"
                  d="M316.69,398.73c-59.82,0-111.89-23.25-138.78-57.55L39.12,394.75c53.88,68.5,158,114.93,277.57,114.93a451.76,451.76,0,0,0,59.6-3.94l-29.49-109A224.45,224.45,0,0,1,316.69,398.73Z"
                />
              </g>
              <g id="d-seed" className="graph-slice seed show">
                <path
                  className="gp-cls-2"
                  d="M464.7,26.51C420.93,9.68,370.68.07,317.23,0V156.62a206.56,206.56,0,0,1,73.62,13.32L464.7,75.28Z"
                />
                <polygon
                  className="gp-cls-14"
                  points="390.85 121.17 464.7 26.51 464.7 75.28 390.85 169.94 390.85 121.17"
                />
                <path
                  className="gp-cls-15"
                  d="M317.23,156.62a206.56,206.56,0,0,1,73.62,13.32V121.17a206.56,206.56,0,0,0-73.62-13.32Z"
                />
              </g>
              <g id="d-treasury" className="graph-slice treasury show">
                <path
                  className="gp-cls-2"
                  d="M316.69,0C228,0,148,26.29,91.86,68.33V117.1L204,191c28.08-21.14,68.16-34.38,112.65-34.38h.54V0Z"
                />
                <polygon
                  className="gp-cls-14"
                  points="204.04 142.23 91.86 68.33 91.86 117.1 204.04 190.99 204.04 142.23"
                />
                <path
                  className="gp-cls-15"
                  d="M204,142.23V191c28.08-21.14,68.16-34.38,112.65-34.38h.54V107.85h-.54C272.2,107.85,232.12,121.08,204,142.23Z"
                />
              </g>
              <g id="d-investors" className="graph-slice investors show">
                <path
                  className="gp-cls-2"
                  d="M576.2,99.56C548.42,69.15,510,44,464.7,26.51l-73.85,94.66v48.77c22.87,8.83,42.19,21.62,56.07,37.05L576.2,148.33Z"
                />
                <polygon
                  className="gp-cls-14"
                  points="576.2 99.56 446.92 158.22 446.92 206.99 576.2 148.33 576.2 99.56"
                />
                <path
                  className="gp-cls-15"
                  d="M390.85,121.17v48.77c22.87,8.83,42.19,21.62,56.07,37.05V158.22C433,142.79,413.72,130,390.85,121.17Z"
                />
              </g>
              <g id="d-taking" className="graph-slice staking show">
                <path
                  className="gp-cls-2"
                  d="M91.86,68.33c-51.44,38.51-83,90.22-83,147.1h0v49.12h0c.06,37.56,13.85,72.86,38,103.59l134.91-52.06V267.31a90.44,90.44,0,0,1-14.94-27.38C173,221.3,186.07,204.53,204,191V142.23Z"
                />
                <polygon
                  className="gp-cls-14"
                  points="181.79 267.31 46.88 319.38 46.88 368.14 181.79 316.08 181.79 267.31"
                />
                <path
                  className="gp-cls-15"
                  d="M162.88,215.54a77.46,77.46,0,0,0,4,24.39C173,221.3,186.07,204.53,204,191V142.23C178.5,161.45,162.88,187.22,162.88,215.54Z"
                />
                <path
                  className="gp-cls-15"
                  d="M8.86,264.55h0c.06,37.56,13.85,72.86,38,103.59V319.38c-24.22-30.8-38-66.19-38-103.84Z"
                />
              </g>
              <g id="d-strategic-cmf" className="graph-slice strategic show">
                <path
                  className="gp-cls-2"
                  d="M624.52,215.47c0-42.67-17.75-82.44-48.32-115.91L446.92,158.22V207c14.93,16.6,23.58,36.25,23.58,57.32,0,2.44-.12,4.85-.35,7.25l153.72,6.63c.42-4.59.65-9.22.65-13.88v-.08h0V215.47Z"
                />
                <polygon
                  className="gp-cls-14"
                  points="623.87 229.42 470.15 222.79 470.15 271.56 623.87 278.19 623.87 229.42"
                />
                <path
                  className="gp-cls-15"
                  d="M446.92,158.22V207c13.21,14.68,21.49,31.76,23.23,50.09V222.79q.35-3.58.35-7.25C470.5,194.48,461.85,174.82,446.92,158.22Z"
                />
                <path
                  className="gp-cls-15"
                  d="M624.52,215.55c0,4.66-.23,9.28-.65,13.87v48.77c.42-4.59.65-9.22.65-13.88v-.08h0Z"
                />
              </g>
              <g id="d-private-sale" className="graph-slice private-sale show">
                <path
                  className="gp-cls-2"
                  d="M470.15,222.79c-.22,2.33-.54,4.63-1,6.92v48.76l152.65,14.4q1.36-7.26,2-14.68V229.42Z"
                />
                <polygon
                  className="gp-cls-14"
                  points="469.18 229.71 621.83 244.11 621.83 292.88 469.18 278.47 469.18 229.71"
                />
                <path
                  className="gp-cls-15"
                  d="M621.83,244.11v48.76q1.36-7.26,2-14.68V229.42Q623.19,236.83,621.83,244.11Z"
                />
              </g>
              <g id="d-ido" className="graph-slice ido show">
                <path
                  className="gp-cls-2"
                  d="M469.18,229.71a81.28,81.28,0,0,1-6.74,20.34v48.77L609,332.1a162.18,162.18,0,0,0,12.86-39.23V244.11Z"
                />
                <polygon
                  className="gp-cls-14"
                  points="462.44 250.05 608.97 283.33 608.97 332.1 462.44 298.82 462.44 250.05"
                />
                <path
                  className="gp-cls-15"
                  d="M609,283.33h0V332.1a162.18,162.18,0,0,0,12.86-39.23V244.11A162.24,162.24,0,0,1,609,283.33Z"
                />
              </g>
              <g id="d-team" className="graph-slice team show">
                <path
                  className="gp-cls-2"
                  d="M462.44,250.05c-10.26,21.25-29.73,39.52-55.08,52.49v48.77l90.33,87.35C549.15,412.42,588.55,375.29,609,332.1V283.33Z"
                />
                <polygon
                  className="gp-cls-14"
                  points="407.36 302.54 497.69 389.89 497.69 438.66 407.36 351.31 407.36 302.54"
                />
                <path
                  className="gp-cls-15"
                  d="M497.69,389.89v48.77C549.15,412.42,588.55,375.29,609,332.1V283.33C588.55,326.52,549.15,363.66,497.69,389.89Z"
                />
              </g>
              <g id="d-airdrop" className="graph-slice airdrop show">
                <path
                  className="gp-cls-2"
                  d="M407.36,302.54q-4.29,2.2-8.8,4.19V355.5l82.85,90.92q8.32-3.69,16.28-7.76V389.89Z"
                />
                <polygon
                  className="gp-cls-14"
                  points="481.41 446.42 481.41 397.66 398.56 306.73 398.56 355.5 481.41 446.42"
                />
                <path
                  className="gp-cls-15"
                  d="M481.41,397.66v48.76q8.32-3.69,16.28-7.76V389.89Q489.74,394,481.41,397.66Z"
                />
              </g>
              <g id="d-gamers" className="graph-slice gamers show">
                <path
                  className="gp-cls-2"
                  d="M398.56,306.73a184.09,184.09,0,0,1-24.95,8.89v48.77l56,100.49a369.72,369.72,0,0,0,51.76-18.46V397.66Z"
                />
                <polygon
                  className="gp-cls-14"
                  points="373.61 315.63 373.61 364.39 429.65 464.88 429.65 416.11 373.61 315.63"
                />
                <path
                  className="gp-cls-15"
                  d="M429.65,416.11v48.77a369.72,369.72,0,0,0,51.76-18.46V397.66A371,371,0,0,1,429.65,416.11Z"
                />
              </g>
              <g id="d-advisors" className="graph-slice advisors show">
                <path
                  className="gp-cls-2"
                  d="M373.61,315.62A204.23,204.23,0,0,1,346,321.29v48.77l28.67,106a410,410,0,0,0,55-11.15V416.11Z"
                />
                <polygon
                  className="gp-cls-14"
                  points="345.95 370.06 345.95 321.29 374.62 427.26 374.62 476.03 345.95 370.06"
                />
                <path
                  className="gp-cls-15"
                  d="M374.62,427.26V476a410,410,0,0,0,55-11.15V416.11A408.47,408.47,0,0,1,374.62,427.26Z"
                />
              </g>
              <g id="d-gamefi" className="graph-slice gamefi show">
                <path
                  className="gp-cls-2"
                  d="M346,321.29a218.52,218.52,0,0,1-29.26,1.95c-58.15,0-108.76-22.59-134.9-55.93L46.88,319.38v48.76c52.38,66.59,153.56,111.72,269.81,111.72A438.76,438.76,0,0,0,374.62,476V427.26Z"
                />
                <path
                  className="gp-cls-15"
                  d="M316.69,431.09C200.44,431.09,99.26,386,46.88,319.38v48.76c52.38,66.59,153.56,111.72,269.81,111.72A438.76,438.76,0,0,0,374.62,476V427.26A438.76,438.76,0,0,1,316.69,431.09Z"
                />
              </g>
            </svg>
          </div>
          <div className="grid col-2 small-col-1 m-down0 tc-white legend">
            <div>
              <div className="d-flex ai-center jc-between c-violet-light br-5 legend-item seed">
                <p className="legend-item--text d-flex ai-center">Seed</p>
                <p className="fw-bold legend-item--value">8%</p>
              </div>
              <div className="d-flex ai-center jc-between c-violet-light br-5 legend-item investors">
                <p className="legend-item--text d-flex ai-center">Investors</p>
                <p className="fw-bold legend-item--value">8%</p>
              </div>
              <div className="d-flex ai-center jc-between c-violet-light br-5 legend-item strategic">
                <p className="legend-item--text d-flex ai-center">
                  Strategic CMF
                </p>
                <p className="fw-bold legend-item--value">10%</p>
              </div>
              <div className="d-flex ai-center jc-between c-violet-light br-5 legend-item private-sale">
                <p className="legend-item--text d-flex ai-center">
                  Private Sale
                </p>
                <p className="fw-bold legend-item--value">1%</p>
              </div>
              <div className="d-flex ai-center jc-between c-violet-light br-5 legend-item ido">
                <p className="legend-item--text d-flex ai-center">IDO</p>
                <p className="fw-bold legend-item--value">3%</p>
              </div>
              <div className="d-flex ai-center jc-between c-violet-light br-5 legend-item team">
                <p className="legend-item--text d-flex ai-center">Team</p>
                <p className="fw-bold legend-item--value">10%</p>
              </div>
            </div>
            <div>
              <div className="d-flex ai-center jc-between c-violet-light br-5 legend-item airdrop">
                <p className="legend-item--text d-flex ai-center">
                  Communiy Airdrop
                </p>
                <p className="fw-bold legend-item--value">1%</p>
              </div>
              <div className="d-flex ai-center jc-between c-violet-light br-5 legend-item gamers">
                <p className="legend-item--text d-flex ai-center">Gamers</p>
                <p className="fw-bold legend-item--value">3%</p>
              </div>
              <div className="d-flex ai-center jc-between c-violet-light br-5 legend-item advisors">
                <p className="legend-item--text d-flex ai-center">Advisors</p>
                <p className="fw-bold legend-item--value">3%</p>
              </div>
              <div className="d-flex ai-center jc-between c-violet-light br-5 legend-item gamefi">
                <p className="legend-item--text d-flex ai-center">Gamefi</p>
                <p className="fw-bold legend-item--value">20%</p>
              </div>
              <div className="d-flex ai-center jc-between c-violet-light br-5 legend-item staking">
                <p className="legend-item--text d-flex ai-center">Staking</p>
                <p className="fw-bold legend-item--value">20%</p>
              </div>
              <div className="d-flex ai-center jc-between c-violet-light br-5 legend-item treasury">
                <p className="legend-item--text d-flex ai-center">Treasury</p>
                <p className="fw-bold legend-item--value">13%</p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="h5 f-roboto tc-white schedule-subtitle small-t-center">
          Vesting schedule
        </h3>
        <div className="schedule p-20 rel">
          <StaticImage
            className="schedule-img lozad"
            src="./../../images/body/schedule.svg"
            alt="schelude"
          />
        </div>
      </div>
    </section>
  );
}
