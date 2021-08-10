import React from 'react'
import "./dangers.css"

function Dangers() {
    return (
        <div className="dangers">
            <h2>Dangers of power theft</h2>
            <ul>
                <li>
                    <h3>Dangers to people</h3>
                    <p>Illegal connections to power lines are never safe, as they haven't been installed by professionals. They're a danger to anyone who may come into contact with them, especially young children.</p>
                    <p>In emergency situations, such as fires, electricity needs to be shut off to permit firefighters and other emergency personnel to do their jobs safely. Power lines that have been compromised by theft measures can stay energized even when emergency responders think they’ve been shut off.</p>
                </li>
                <li>
                    <h3>Dangers to properties</h3>
                    <p>Power surges due to electricity theft can damage the wiring in your home.The overloads can also harm your electrical equipment and appliances.This can lead to a fire outbreak that could take lives and properties.</p>
                </li>
                <li>
                    <h3>Dangers to electrical system</h3>
                    <p>High loads that occur with electricity theft cause power surges and electrical system failures. This damages BC Hydro equipment and infrastructure, what we call the grid, and can lead to the premature failure of expensive electrical transformers.</p>
                </li>
            </ul>
        </div>
    )
}

export default Dangers
