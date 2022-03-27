import React, { createElement } from "react";
import Header from "./components/base/Header";
import Navbar, { NavListItems } from "./components/base/Navbar";
import CircleImage from "./components/CircleImage";
import InfoCard, { CardElements, CardSubtitle, CardTitle } from "./components/InfoCard";
import facebook from './res/assets/icons/facebook_icon_128.png';
import github from './res/assets/icons/github_icon_128.png';
import linkedin from './res/assets/icons/linkedin_icon_128.png';
import descImage from './res/images/desc-picture.jpg';
import image from './res/images/profile-picture.jpg';
import './styles/App.css';


const navMenuItems = [
    { properties: { className: "list-item", key: "home" }, children: "Home" },
    { properties: { className: "list-item", key: "aboutme" }, children: "About me" },
    { properties: { className: "list-item", key: "whatido" }, children: "What I Do" },
    { properties: { className: "list-item", key: "portfolio" }, children: "Portfolio" }
]

const socialNetworks = [
    { title: "Github", properties: { imgSrc: github, className: "icon" } },
    { title: "Linkedin", properties: { imgSrc: linkedin, className: "icon" } },
    { title: "Facebook", properties: { imgSrc: facebook, className: "icon" } },
]

const contactInfo = [
    "name: Brandon Isaac Fonseca",
    "Title: Software Developer",
    "Email: isaac99.bf@gmail.com",
    "Phone: (505) 850 383 65",
    "Experience: 3 years",
    "Age: 23",
    "Address: Chontales, Nicaragua",
    "Github: github.com/fonse99",
]
const App = () => {
    return (

        <div>
            <Header className={"header"}>

                <Navbar className={"navbar"}>

                    <div>
                        <h1 id={"domain-name"}>{"Soybrandon"}</h1>
                    </div>

                    <div>
                        <NavListItems className={"nav-list"} elements={navMenuItems} />
                    </div>

                </Navbar>

                <div id={"profile-container"}>

                    <div id={"social-network-container"}>
                        {
                            socialNetworks.map(e => {
                                return createElement(CircleImage, e.properties)
                            })
                        }
                    </div>
                    <CircleImage
                        className={"profile-picture"}
                        imgSrc={image}
                        size={{ w: 250, h: 250 }}
                    />

                    <h2 id={"profile-name"}>{"Brandon Isaac Fonseca"}</h2>
                </div>

            </Header>

            <main>
                <section className={"piece-container"}>

                    <CircleImage
                        className={"desc-picture"}
                        imgSrc={descImage} />

                    <article>

                        <h2 className={"text-bigger"}>
                            {"Hi I'm Brandon!, this is about me.   "}
                        </h2>
                        <p className={"text-smaller"}>
                            {"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."}
                        </p>
                        <div className={"contact-card"}>
                            {
                                contactInfo.map(e => {
                                    return createElement("h5", null, e)
                                })
                            }
                        </div>
                    </article>
                </section>
                <section className="piece-container-secondary">

                    <article>
                        <h2 className={"text-bigger"}>
                            {"What I do"}
                        </h2>

                        <hr />

                        <div className="skills">
                            <div className="technologies">
                                {/* TODO */}
                            </div>
                            <div className="technologies-details right-section">
                                <section>
                                    <InfoCard >
                                        <CardTitle />
                                        <div id = "card-body">
                                            <CardSubtitle />
                                            <CardElements />
                                        </div>
                                    </InfoCard>
                                </section>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default App;