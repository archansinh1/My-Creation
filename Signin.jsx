import React,{ useState } from "react";
// import './App.css';
import './img/login.css';


//Validation
function pwd(lol)
{
    const Name = document.getElementById('l1').value;

    if(Name == "")
    {
        lol.preventDefault();
        document.getElementById('error').innerHTML = "* Please Enter Name";
        return false;
    }

    const pass = document.getElementById('l2').value;

        if(pass == "")
        {
            lol.preventDefault();
            document.getElementById('error5').innerHTML = "* Enter password";
            return false;
        }
}

//GetData
// const Getdata = () =>
// {
// }

const Login = () =>
{
    const [name,setname] = useState("");
    const [btn,setbtn] = useState("");

    const [passwd,setpasswd] = useState("");
    const [btnn,setbtnn] = useState("");

    const input = (show) =>{
        setname(show.target.value)
    }
    const inputt = (show) =>{
        setpasswd(show.target.value)
    }

    const pwdd = (lol) =>
    {
        lol.preventDefault();
        setbtn(name)
        setbtnn(passwd)
    }
    

    return(
        <div>
            {/* <h1>Login : {btn+""+btnn}</h1> */}
            
            {/* ...........................LOGIN FORM............................. */}
            <div className="login-form">
                <h1>LOGIN</h1>
                <form onSubmit={pwdd} action='#' method="POST">
                    <p>NAME</p>
                    <input type="text" onChange={input} name="" id="l1" placeholder="Username"></input>
                    <span id='error' style={{color:'red'}}></span>
                    {/* <br></br><br></br> */}
                            
                    <p>PASSWORD</p>
                    <input type="password" onChange={inputt} name="" id="l2" placeholder="Password"></input>
                    <span id='error5' style={{color:'red'}}></span>
                    <br/>

                    <button className='login-btn' onClick={pwd}>SUBMIT</button>
                </form>
            </div>
            {/* ................................................................. */}


                {/* <hr/> */}
            {/* ...........................GET DATA.............................. */}
                {/* <center > */}
                    <table style={{border:'2px groove black',marginLeft:'185px',marginTop:'10px'}}>
                        <tr style={{border:'2px groove lightblue',textAlign:'center'}}>
                            <th>
                                WELCOME TO LOGIN : 
                            </th>
                            <td>
                                <h3 style={{color:'lightblue'}}>{btn}</h3>
                            </td>
                        </tr>
                        <tr style={{border:'2px groove black',textAlign:'center'}}>
                            <th>
                                Password : 
                            </th>
                            <td>
                                <h3 style={{color:'lightblue'}}>{btnn}</h3>
                            </td>
                        </tr>
                    </table>
                {/* </center> */}
            {/* ................................................................. */}
        </div>
    )
}

export default Login;