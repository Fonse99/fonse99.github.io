import React from "react";

const CircleImageContainer = ({ className, imgSrc, alt, toolTip, size = { w: "45px", h: "45px" } }) => {

    const { w, h } = size;

    return (
        <img
            className={className}
            alt={alt}
            src={imgSrc}
            title={toolTip}
            height={h}
            width={w}
        ></img>
    );

}

export default CircleImageContainer;