import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {

    return (
        <footer className="rel footer">
            <div className="footer-glow abs"></div>
                <StaticImage   style={{overFlow:"visible"}} quality="85" className="w-100" src="../images/body/footer-img.png" alt="" />

            <div className="d-flex abs footer-social small-fd-column"  style={{justifyContent:"space-between", alignItems:"center"}} >
            <div>
            <p className="footer-social--text tc-white m-10 small-t-center">Follow Us:</p>
                <ul className="social-media d-flex jc-center fw-wrap">
                    <li><a target="_blank"  rel="noreferrer"  href="https://dappradar.com/binance-smart-chain/high-risk/crypto-makers-foundation-cmf" className="icon m-5 br-30 dappradar i-color"><span className='d-none'>dappradar</span></a></li>
                    <li><a target="_blank"  rel="noreferrer"  href="https://www.facebook.com/cmcgamingteam" className="icon m-5 br-30 facebook i-color"><span className='d-none'>www.facebook.com</span></a></li>
                    <li><a target="_blank"  rel="noreferrer"  href="https://cryptomakerscrew.com/" className="icon m-5 br-30 cmc i-color"><span className='d-none'>cryptomakerscrew.com</span></a></li>
                    <li><a target="_blank"  rel="noreferrer"  href="https://t.me/+G6UvV13_skk1YjQ0" className="icon m-5 br-30 telegram i-color"><span className='d-none'>t.me</span></a></li>
                    <li><a target="_blank"  rel="noreferrer"  href="https://discord.gg/9zk9sRsdxA" className="icon m-5 br-30 discord i-color"><span className='d-none'>discord</span></a></li>
                    <li><a target="_blank"  rel="noreferrer"  href="https://www.youtube.com/channel/UCMXm9VE-Abmdqxljig5usaA" className="icon m-5 br-30 youtube i-color"><span className='d-none'>youtube.com</span></a></li>
                    <li><a target="_blank"  rel="noreferrer"  href="https://twitter.com/CryptomakersF" className="icon m-5 br-30 twitter i-color"><span className='d-none'>twitter.com</span></a></li>
                </ul>

            </div>


            </div>
        </footer>

    );
}

export default Footer;