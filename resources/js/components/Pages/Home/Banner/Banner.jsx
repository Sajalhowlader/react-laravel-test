import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { RiMessage2Fill } from "react-icons/ri";
import "./Banner.css";
const Banner = () => {
    return (
        <section className="side_ber_feature">
            <div className="sideber_feature_container">
                <div className="side_nav">
                    <AiFillHome />
                    <RiMessage2Fill />
                    <BsPersonFill />
                    <HiUsers />
                    <FaBookOpen />
                </div>
                <div className="features"></div>
            </div>
        </section>
    );
};

export default Banner;
