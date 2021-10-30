import React from 'react'
import "./Styles/TopHeader.css"
import {Link} from 'react-router-dom'
function TopHeader() {
    return (
        <div className="TopHeadercontainer">
           <Link className="topheader">Read Tesla's 2020 Impact Report</Link>
        </div>
    )
}

export default TopHeader
