import React from "react";

import "./styles/CircleImage.css"
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

export const CircleFilled = ({ shadowed = false, sh_animations, animations, title = "Title", color = "darkgrey" }) => {
    return (
        <div className={"tech-circle"}>

            <div
                id="filled-circle"
                className={`soft-shader ${animations}`}
                style={{ backgroundColor: color }}>

                <h3>{title}</h3>

            </div>{applyShadow(shadowed, sh_animations)}</div>
    )
}


function applyShadow(isShadowed, sh_animations) {
    if (isShadowed)
        return <div id="shadow" className={`${sh_animations}`}></div>

}
export default CircleImageContainer;