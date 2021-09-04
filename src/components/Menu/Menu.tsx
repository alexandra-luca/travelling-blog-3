import React from 'react';

import {
    Link
  } from "react-router-dom";

export default function Menu() {
    return <nav className="nav">
        <ul className="nav__container">
            <li className="nav__item">
                <Link to="/" className="nav__link">Home</Link>
            </li>
            <li className="nav__item">
                <Link to="/details" className="nav__link">Details</Link>
            </li>
        </ul>
    </nav>;
}