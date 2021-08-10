import React from 'react'
import "./methods.css"

function Methods({src, txt}) {
    return (
        <div className="method">
            <div className="m_img">
                <img src={src} alt="....." />
            </div>
            <p>{txt}</p>
        </div>
    )
}

export default Methods
