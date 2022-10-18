import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="siteFooter">
            <div className="footerIcon">
                <FaLinkedinIn />
                <FaFacebook />
                <FaInstagram />
                <FaTwitter></FaTwitter>
            </div>
            <div className="or">
                <div></div>
            </div>
            <p>All rights resorved &copy;testmyplan.io</p>
        </footer>
    );
};

export default Footer;
