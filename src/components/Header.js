import React from 'react';
import '../styles/Header.css'
function Header(props) {

return(
    <div className="header" >
        
    
                Score: {props.count} | High Score: {props.highScore}
            </div>
    
);
}

export default Header;