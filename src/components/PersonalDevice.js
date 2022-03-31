import React from "react";

import "./styles/PersonalDevice.css";

const DefaultDevice = ({deviceClass }) => {
    return (
        <div className={deviceClass}>
            <div id="device-screen">
                <div className="screen-img-dimensions screen-img-fill"></div>
            </div>
        </div>
    )
}


export default DefaultDevice;