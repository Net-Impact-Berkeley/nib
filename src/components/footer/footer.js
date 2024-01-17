import React from 'react';
import './footer.scss';
import logo from '../../img/nib-logo-new.png';
import { Link } from "react-router-dom";

const FooterTitle = ({ text }) => {
    return <p className="footerTitle">{text}</p>
}

const FooterLink = ({ link, name }) => {
    return <Link to={link} className="footerLink">{name}</Link>;
}

const Footer = () => {
    return (
        <footer>
            <div className="footerLeft">
                <Link to="/">
                    <img alt="NIB logo" src={logo} className="footerImage" />
                </Link>
                <p className="copyrightText">Copyright Net Impact Berkeley, 2024</p>
            </div>
            <div className="footerRight">
                <div className="email">
                    <FooterTitle text="Contact" />
                    <p><a href="emailto:net-impact@berkeley.edu" className="dontbreak">net-impact@berkeley.edu</a></p>
                    {/** <a href="https://medium.com/netimpactberkeley" className="footerLink" name="Blog">Blog</a> */}
                </div>
                <div className="footerSection">
                    <FooterTitle text="General" />
                    <FooterLink link="/about" name="About" />
                    <FooterLink link="/members" name="Members" />
                    <FooterLink link="/projects" name="Projects" />
                    {/** <a href="https://medium.com/netimpactberkeley" className="footerLink" name="Blog">Blog</a> */}
                </div>
                <div className="footerSection">
                    <FooterTitle text="Students" />
                    <FooterLink link="/apply" name="Join Us" />
                    <a href="https://airtable.com/appK6wRqibWMyzVyQ/shr6XyxVzly3gHzAm" className="footerLink" target="_blank" rel="noopener noreferrer">Application</a>
                    <FooterLink link="/faq" name="FAQs" />
                </div>
                {/* <div className="footerSection">
                    <FooterTitle text="Companies" />
                    <FooterLink link="/home" name="Our Value" />
                </div> */}
                <div className="socialSection">
                    <a href="https://www.facebook.com/nib.berkeley.edu/" target="_blank" rel="noopener noreferrer">
                        <img src={require("./img/facebook.png")} className="socialIcon" alt="Facebook icon" />
                    </a>
                    {/**<a href="https://medium.com/netimpactberkeley" target="_blank" rel="noopener noreferrer">
                        <img src={require("./img/medium.png")} className="socialIcon" alt="Medium icon" />
                    </a> */}
                    <a href="https://www.linkedin.com/company/net-impact-berkeley-undergrad/" target="_blank" rel="noopener noreferrer">
                        <img src={require("./img/linkedin.png")} className="socialIcon" alt="LinkedIn icon" />
                    </a>
                    <a href="https://www.instagram.com/netimpactberkeley" target="_blank" rel="noopener noreferrer">
                        <img src={require("./img/instagram.png")} className="socialIcon" alt="Instagram icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 
