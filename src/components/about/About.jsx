import React from 'react'
import "./about.css"
import Methods from '../mothods/Methods';

function About() {
    return (
        <div className="about">
            <h1>What is power theft</h1>
            <p>Every year, Nigerian power utilities lose billions of naira to power theft. Electricity theft occurs when a person taps electricity lines, tampers with electricity meters or transformers, or uses a device that interferes with reading or damages equipment such as electric meters, or uses electricity for purposes other than authorized, according Section 96 (1) of the Electric Power Sector Reform Act (Act No. 6 of 2005).</p>

            <p>In a power system, there are two types of losses (technical and non technical). Technical losses include transmission line losses, transformer losses, measuring system losses, and so on. Other losses that are outside the utility provider's control include electricity theft, non-payment of bills by consumers, and accounting and record-keeping errors are the non-techical losses</p>
            <div className="about_flex">
                <div className="flex">
                    <h2 className="h2">did you know?</h2>
                    <p className="p">Power fraud, or people using power without paying for it, accounts for a significant portion of these losses (approximately 50-60%). Acts of electricity theft will not only cost the state and the power sector money by disrupting regular supply, but they will also cause fires, destroy power supply equipment, and cause extensive power outages, endangering power systems and public safety.</p>
                </div>
                <div className="flex">
                    <h2 className="h2">Factors that influence power theft:</h2>
                    <ul>
                        <li>Inconsistencies in the billing process</li>
                        <li>Accountability is inadequate</li>
                        <li>Poor law enforcement</li>
                        <li>Currupt employees and influential consumers are protected politically.</li>
                        <li>Unemployment</li>
                        <li>Some people are just theives</li>
                    </ul>
                </div>
            </div>
            <h2 className="method_head">Common power theft practices</h2>
            <div className="methods">
                <Methods 
                    src="https://www.nigeriaelectricityhub.com/wp-content/uploads/Energy-Theft-Cartoon.jpg"
                    txt="Direct Hooking/Tapping from Line"
                />
                <Methods 
                    src="https://cdn.dribbble.com/users/1144354/screenshots/5940162/second_textured_2x.jpg"
                    txt="Prepaid meter tampering/by-passing"
                />
                <Methods 
                    src="https://cdn4.vectorstock.com/i/thumb-large/55/48/electrician-light-bulb-cable-electricity-meter-vector-29595548.jpg"
                    txt="Billing Irregularities by the meter readers"
                />
                <Methods 
                    src="https://thumbs.dreamstime.com/b/male-female-characters-paying-utilities-together-concept-invoice-electricity-meter-man-woman-worried-stressed-over-215536955.jpg"
                    txt="Unpaid electric bills"
                />
            </div>
        </div>
    )
}

export default About
