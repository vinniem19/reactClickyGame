import React from "react";
import "../styles/Navbar.css";

function Navbar() {
    return(
        <div className="row">
            <div className="col-lg-12">
                <nav className="navbar navbar-default">
                        <div className="container-fluid">
                          <div className="navbar-header">
                            <a className="navbar-brand" href="C:\Users\vinnie\VinUCFWork\clicky game static\index.html">Click Game</a>
                          </div>
                            <ul className="nav navbar-nav">
                                <li>Score: <span id="score"></span> | High Score: <span id="high-score"></span> </li>
                            </ul>
                        </div>
                      </nav>
        </div>
    </div>


    );
}

export default Navbar;