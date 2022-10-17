import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { RiMessage2Fill } from "react-icons/ri";
import assets from "../../Assets/Feature_img/assets.jpg";
import dependency from "../../Assets/Feature_img/dependency.jpg";
import interested from "../../Assets/Feature_img/interested.jpg";
import report from "../../Assets/Feature_img/reports.png";
import threats from "../../Assets/Feature_img/threats.jpg";
import users from "../../Assets/Feature_img/users.jpg";
import "./Banner.css";
import Features from "./Features/Features";
const Banner = () => {
    const features = [
        {
            title: "threats",
            img: threats,
            panelItem: [
                "Natural",
                "Manmade",
                "Political",
                "Techonology",
                "Accidental",
                "Operational",
            ],
            extraPannelIfo: [
                "Earthquake",
                "Floods",
                "Thunderstorm",
                "Lightning",
                "Epidemic/Pandemic",
                "Drought",
                "Sandstorm",
                "Extreme Weather",
            ],
        },
        {
            title: "assets",
            img: assets,
             panelItem: [
                "Natural",
                "Manmade",
                "Political",
                "Techonology",
                "Accidental",
                "Operational",
            ],
            extraPannelIfo: [
                "Earthquake",
                "Floods",
                "Thunderstorm",
                "Lightning",
                "Epidemic/Pandemic",
                "Drought",
                "Sandstorm",
                "Extreme Weather",
            ],
        },
        {
            title: "users",
            img: users,
        },
        {
            title: "dependency numbers",
            img: dependency,
        },
        {
            title: "Interested parties",
            img: interested,
        },
        {
            title: "report",
            img: report,
        },
    ];

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
                <div className="features_container">
                    {features.map((feature) => (
                        <Features feature={feature} key={feature.title} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;
