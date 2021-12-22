import React from "react";

const CircleImageContainer = ({className, imgSrc, alt, toolTip, size = { w: "45px", h: "45px" } }) => {

    const { w, h } = size;

    return (
        // <div className={'circle-container'}>
            <img
                className={className}
                alt={alt}
                src={imgSrc}
                title={toolTip}
                height={h}
                width={w}
            ></img>
        // </div>
    );

}

export default CircleImageContainer;