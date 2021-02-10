
import React from "react"
import "./header.css"
import Lotus from "../../images/lotus.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#60b7b9`,
      // marginBottom: `1.45rem`,
    }}
  >
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
    <div className="container">

      <div className="row">
            <div className="column1">
                <img src={Lotus} />
            </div>
            <div className="column2">
                ||
            </div>
            <div className="column3">
                EXAM MANAGEMENT SYSTEM
                <br></br>
                LOG IN
            </div>
        </div>
    </div>    
  </header>
)

export default Header


