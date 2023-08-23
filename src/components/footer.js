import React from "react";


function Footer(){
    const date = new Date();
    var year = date.getFullYear();

    return (
    <div>
        <footer>copyright {year}</footer>
    </div>
    );
}

export default Footer;