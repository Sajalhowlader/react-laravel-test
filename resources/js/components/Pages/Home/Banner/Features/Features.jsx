import React from "react";

const Features = ({ feature }) => {
    const { title, img } = feature;
    return (
        <div className="fearure">
            <img className="img-fluid" src={img} alt="" />
            <p>{title}</p>
        </div>
    );
};

export default Features;
