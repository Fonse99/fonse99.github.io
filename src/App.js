import React, { createElement } from "react";
import Header from "./components/base/Header";
import './styles/App.css';
import Navbar, { NavListItems } from "./components/base/Navbar";
import CircleImageContainer from "./components/CircleImage";

import image from './res/assets/profile-picture.jpg';
import github from './res/assets/github_icon_128.png'
import facebook from './res/assets/facebook_icon_128.png'
import linkedin from './res/assets/linkedin_icon_128.png'

const navMenuItems = [
    { properties: { className: "list-item", key:"home" }, children: "Home" },
    { properties: { className: "list-item", key:"aboutme" }, children: "About me" },
    { properties: { className: "list-item", key:"whatido" }, children: "What I Do" },
    { properties: { className: "list-item", key:"portfolio" }, children: "Portfolio" }
]


const socialNetworks = [
    { title: "Github", properties: { imgSrc: github, className: "icon" } },
    { title: "Linkedin", properties: { imgSrc: linkedin, className: "icon" } },
    { title: "Facebook", properties: { imgSrc: facebook, className: "icon" } },
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
                                return createElement(CircleImageContainer, e.properties)
                            })
                        }
                    </div>
                    <CircleImageContainer
                        className={"profile-picture"}
                        imgSrc={image}
                        size={{ w: 250, h: 250 }}
                    />

                    <h2 id={"profile-name"}>{"Brandon Isaac Fonseca"}</h2>
                </div>

            </Header>

            <main>
                
            </main>
        </div>
    );
}

export default App;