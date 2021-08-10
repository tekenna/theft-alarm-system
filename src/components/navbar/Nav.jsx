import React from 'react'
import "./nav.css"

function nav() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="https://img.freepik.com/free-vector/save-energy-environmental-logo-vector-with-green-power-text_53876-112056.jpg?size=338&ext=jpg&ga=GA1.2.1725407827.1628380800" alt=",,,,,,," />
            </div>
            <ul className="nav_ul">
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#methods">methods</a></li>
                <li><a href="#effects">Effects</a></li>
                <li><a href="#dangers">Dangers</a></li>
                <li><a href="#consequences">consequences</a></li>
            </ul>
        </div>
    )
}

export default nav
