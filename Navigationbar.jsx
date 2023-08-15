import { Link } from "react-router-dom"

const Nav = () =>{
    return(
        <>
            <div className="nav">
                <ul className="nav-u">
                    <Link className="lnk1" to="/">MYCREATION</Link>
                    
                    <Link className="lnk" to="/"></Link>                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className="lnk" to="Home">HOME</Link>                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className="lnk" to="Signup">REGISTRATION</Link>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className="lnk" to="Signin">LOGIN</Link>          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className="lnk" to="AboutUs">ABOUT</Link>       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </ul>
            </div>
        </>
    )
}

export default Nav;
