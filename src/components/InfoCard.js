import React from "react";
import "./styles/InfoCard.css";



const InfoCard = ({ children }) => {
    return (
        <div className="container">
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