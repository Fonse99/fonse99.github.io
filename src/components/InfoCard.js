import React from "react";
import "./styles/InfoCard.css";

export const InfoCardDimensions = Object.freeze(
    {
        SOFT_X_EXPANSION: 'w-75',
        COMPLETE_X_EXPANSION: 'w-100',
        SOFT_Y_EXPANSION: 'h-75',
        COMPLETE_Y_EXPANSION: 'h-100',
        MOTETE: 'w-100 h-100'
    }
)

const InfoCard = ({ children, appendedClasses = "" }) => {
    return (
        <div className={`container ${appendedClasses}`}>
            {children}
        </div>
    )
}

export const CardTitle = ({ title = "card title" }) => {

    return (
        <h3 id="card-title">{title}</h3>
    )
}

export const CardSubtitle = ({ label = "subtitle" }) => {

    return (
        <h3 id="card-subtitle">{label}</h3>
    )
}

export const CardElements = ({ elements = ["first", "second", "so on"], title, style = { color: "white" } }) => {
    return (
        <div>
            <CardSubtitle label={title} />
            <ul style={style}>
                {
                    appendElements(elements)
                }
            </ul>
        </div>
    )
}

const appendElements = (elements) => elements.map(element => <li>{element}</li>);

export default InfoCard;