import React from "react";
import './App.css';


const Defpage = () =>
{
    return(
        <div>
            <div>
                <p className="titleset">WELCOME TO OUR SITE&#127919;</p>
            </div>
            
            {/* <hr color="black"/> */}

            <div className="social-icon"><br/>FOLLOW US<br/>ON SOCIAL MEDIA,<br/><br/>
                <a href="https://www.youtube.com/" target={"_blank"} ><img className="icon" src="youtube.png"/></a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.facebook.com/" target={"_blank"}><img className="icon" src="facebook.png"/></a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.instagram.com/" target={"_blank"}><img className="icon" src="instagram.png"/></a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.twitter.com/" target={"_blank"}><img className="icon" src="twitter.png"/></a>
            </div>
        </div>
    )
}

export default Defpage;
