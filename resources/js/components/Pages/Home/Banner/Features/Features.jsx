import React, { useState } from "react";

const Features = ({ feature }) => {
    // console.log(feature);
    const { title, img, panelItem, extraPannelIfo } = feature;
    console.log(extraPannelIfo);
    const [showfeatures, setShowFeatures] = useState(false);
    const [showExtraPannel, setShowExtraPannel] = useState(false);

    const showFeatures = () => {
        if (showFeatures) {
            return "show_feature_info";
        }
    };
    return (
        <div
            className={
                showfeatures ? "feature_info show_feature_info" : "feature_info"
            }
        >
            <img className="img-fluid feature_img" src={img} alt="" />
            <p
                onClick={() => setShowFeatures(!showfeatures)}
                className="feature_title"
            >
                {title}
            </p>

            <div
                className={
                    showExtraPannel
                        ? "show_extra_panel hide_extra_panel"
                        : "show_extra_panel"
                }
            >
                {extraPannelIfo?.map((panel) => (
                    <div className="panel_info">
                        <p>{panel}</p>

                        <select name="" id="">
                            <option value="">High</option>
                            <option value="">Medium</option>
                            <option value="">Low</option>
                        </select>
                    </div>
                ))}
            </div>
            <div
                className={
                    showfeatures ? "others_features" : "hideOthers_features"
                }
            >
                <button onClick={() => setShowExtraPannel(!showExtraPannel)}>
                    Natural
                </button>
                <button>Manmade</button>
                <button>Political</button>
                <button>Techonology</button>
                <button>Accidental</button>
                <button>Operational</button>
            </div>
        </div>
    );
};

export default Features;
