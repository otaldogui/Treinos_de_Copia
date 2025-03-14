import React from "react";
import { link } from "react-router-dom";

import "./Header.css";

import logo from "../assets/logo.svg";
import cameera from "../assets/camera.svg";

export default function Header () {
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to="/">
                    <img src={logo} alt="InstaRocket" />
                </Link>
                <Link to="/new">
                <img src={cameera} alt="Enviar Publicação" />
                </Link>
            </div>
        </header>
    );
}