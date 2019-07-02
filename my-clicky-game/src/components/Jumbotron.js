import React from "react";
import "../styles/Jumbotron.css";

function Jumbotron() {
    return(
    <div className="row">
        <div className="col-lg-12">
                <div className="jumbotron jumbotron-fluid">
                        <div className="container" id="jumbo">
                            {/*<br>*/}
                          <h1 className="display-4">Clicky Game</h1>
                          <p className="lead">Click on an image to score points, but don't click the same image twice!</p>
                        </div>
                </div>
        </div>
    </div>
    );
}

export default Jumbotron;