import React from 'react'
import "./Footer.css"

function Footer() {
    const content = [
        "Tesla © 2021",
        "Privacy & Legal",
        "Contact",
        "Careers",
        "News",
        "Engage",
        "Locations",
    ]
    return (
        <div className="footercontainer">
            {
               content.map((con) => (
                   <p>{con}</p>
               ))
            }
        </div>
    )
}

export default Footer
