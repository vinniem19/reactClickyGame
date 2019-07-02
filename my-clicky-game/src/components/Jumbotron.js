import React from "react";
import "../styles/Jumbotron.css";

function Jumbotron() {
    return(
    <div class="row">
        <div class="col-lg-12">
                <div class="jumbotron jumbotron-fluid">
                        <div class="container" id="jumbo">
                            {/*<br>*/}
                          <h1 class="display-4">Clicky Game</h1>
                          <p class="lead">Click on an image to score points, but don't click the same image twice!</p>
                        </div>
                </div>
        </div>
    </div>
    );
}

export default Jumbotron;