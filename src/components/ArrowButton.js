import React from "react";

import "./styles/ArrowButton.css"

const ArrowButton = ({ orientation = "right", style = { width: "55px", height: "41px" } }) => {
    return (
        <button style={style} id="simple-arrow-button">
            {/*TODO Change arrow letters for arrow icons*/}
            {(orientation === "left") ? "<" : ">"}
        </button>
    )

}

export default ArrowButton;