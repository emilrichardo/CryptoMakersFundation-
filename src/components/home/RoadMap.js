import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useTranslation } from "react-i18next"
export default function RoadMap() {
    const {t} = useTranslation();
    return(
        <section className="rel roadmap-section">
            <div className="anchor" id="roadmap"></div>

            <div
            className="roadmap-light orange-light abs"
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
            >

            </div>
            <div
            className="roadmap-light green-light abs"
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
            >

            </div>
            <div
            className="roadmap-light magenta-light abs"
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
            >

            </div>

            <StaticImage  className="abs world-top lozad" alt='half-world' src="./../../images/body/half-world.png"/>
            <StaticImage  className="abs world-bottom  lozad" alt='half-world' src="./../../images/body/half-world.png"/>

            <StaticImage  className="abs bluemon" alt='bluemon' src="./../../images/body/bluemon.png"/>
            <StaticImage  className="abs yellowmon " alt='yellowmon' src="./../../images/body/yellowmon2.png"/>
            <StaticImage  className="abs world-float " alt='yellowmon' src="./../../images/body/world.png"/>





            <div className="clouds abs"></div>

            <div className="block-content big block-roadmap">
                <h2 className="h2 tc-white t-center roadmap-title">Roadmap</h2>
                <div className="timeline">
                    <article
                    className="timeline-phase d-flex "
                    id="phase-1"
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    >
                        <div className="phase-icon">
                            <StaticImage alt='chest open' className="phase-chest lozad" src="./../../images/body/chest-open.png" />
                        </div>
                        <div className="phase-info d-flex fd-column">
                            <h3 className="h5 f-roboto tc-white phase-title">{t("Roadmap_Phase")} 1</h3>
                            <ul className="as-list tc-violet-white">
                                <li className="list-item"><span>{t("Roadmap_Phase_01_01")} / <span className="date tc-white fw-bold">{t("Month_06")} 2021</span></span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_01_02")}  / <span className="date tc-white fw-bold">{t("Month_06")}2021</span></span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_01_03")}  / <span className="date tc-white fw-bold">{t("Month_07")} 2021</span></span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_01_04")}  / <span className="date tc-white fw-bold">{t("Month_09")} 2021</span></span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_01_05")}  / <span className="date tc-white fw-bold">{t("Month_11")} 2021</span></span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_01_06")}  / <span className="date tc-white fw-bold">{t("Month_11")}-{t("Month_12")} 2021</span></span></li>
                            </ul>
                        </div>
                    </article>
                    <article
                    className="timeline-phase d-flex"
                    id="phase-2"
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    >
                        <div className="phase-icon">
                            <StaticImage src='./../../images/body/chest.png' alt='chest' />

                        </div>
                        <div className="phase-info d-flex fd-column">
                            <h3 className="h5 f-roboto tc-white phase-title">{t("Roadmap_Phase")}  2</h3>
                            <ul className="as-list  tc-violet-white">
                                <li className="list-item"><span>{t("Roadmap_Phase_02_01")}  / <span className="date tc-white fw-bold">{t("Month_12")} 10 2021</span></span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_02_02")} / <span className="date tc-white fw-bold">{t("Month_12")} 10 2021</span></span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_02_03")} / <span className="date tc-white fw-bold">14 {t("Month_12")} 2021</span></span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_02_04")} / <span className="date tc-white fw-bold">5 {t("Month_01")} 2022</span></span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_02_05")} / <span className="date tc-white fw-bold">15 {t("Month_01")}2022</span></span></li>
                            </ul>
                        </div>
                    </article>
                    <article
                    className="timeline-phase d-flex "
                    id="phase-3"
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    >
                        <div className="phase-icon">
                            <StaticImage alt='chest' src="./../../images/body/chest.png" />

                        </div>
                        <div className="phase-info d-flex fd-column">
                            <h3 className="h5 f-roboto tc-white phase-title">{t("Roadmap_Phase")} 3</h3>
                            <ul className="as-list  tc-violet-white">
                                <li className="list-item"><span>{t("Roadmap_Phase_03_01")} / <span className="date tc-white fw-bold">{t("Month_02")} 1 2022</span></span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_03_02")}  / <span className="date tc-white fw-bold">{t("Month_02")} 15 2022</span></span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_03_03")} </span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_03_04")}  / <span className="date tc-white fw-bold">{t("Month_02")} 21 2022</span></span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_03_05")} </span></li>
                            </ul>
                        </div>
                    </article>
                    <article
                    className="timeline-phase d-flex "
                    id="phase-4"
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    >
                        <div className="phase-icon">
                            <StaticImage className="phase-chest lozad" alt='chest' src='./../../images/body/chest.png' />
                        </div>
                        <div className="phase-info d-flex fd-column">
                            <h3 className="h5 f-roboto tc-white phase-title">{t("Roadmap_Phase")} 4</h3>
                            <ul className="as-list  tc-violet-white">
                                <li className="list-item"><span>{t("Roadmap_Phase_04_01")}</span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_04_02")}</span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_04_03")}</span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_04_04")}</span></li>
                            </ul>
                        </div>
                    </article>
                    <article
                    className="timeline-phase d-flex"
                    id="phase-5"
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    >
                        <div className="phase-icon">
                            <StaticImage  className="phase-chest lozad" alt='chest' src='./../../images/body/chest.png' />
                        </div>
                        <div className="phase-info d-flex fd-column">
                            <h3 className="h5 f-roboto tc-white phase-title">{t("Roadmap_Phase")} 5</h3>
                            <ul className="as-list tc-violet-white">
                                <li className="list-item"><span>{t("Roadmap_Phase_05_01")}/ <span className="date tc-white fw-bold">{t("Month_04")} 2022</span></span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_05_02")} / <span className="date tc-white fw-bold">{t("Month_04")} 2022</span></span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_05_03")} <span className="date tc-white fw-bold">{t("Month_04")} 2022</span></span></li>
                                <li className="list-item"><span>{t("Roadmap_Phase_05_04")}</span></li>
                            </ul>
                        </div>
                    </article>
                    <article
                    className="timeline-phase d-flex"
                    id="phase-6"
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    >
                        <div className="phase-icon ">
                         <StaticImage  className="phase-chest lozad" alt='chest' src='./../../images/body/chest.png' />
                        </div>
                        <div className="phase-info d-flex fd-column">
                            <h3 className="h5 f-roboto tc-white phase-title">{t("Roadmap_Phase")} 6</h3>
                            <ul className="as-list  tc-violet-white">
                                <li className="list-item"><span className="fw-bold tc-white">{t("Roadmap_Phase_06_01")}</span></li>
                                <li className="list-item"><span className="fw-bold tc-white">{t("Roadmap_Phase_06_02")}</span></li>
                            </ul>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    )
};
