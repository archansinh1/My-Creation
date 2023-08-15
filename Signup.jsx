import React,{ useState} from "react";
import Valid from "./signvalidation";
import './img/signup.css';



// function submit()
// {
//     const  va1 =   document.getElementById('a1').value;
   
//     if(va1 == "")
//     {
//          alert("not fill")
//     }
// }


const Registration = () =>
{
    const [name,setname] = useState("");
    const [btn,setbtn] = useState("");

    const [surname,setsurname] = useState("");
    const [btn1,setbtn1] = useState("");

    const [mail,setmail] = useState("");
    const [btn2,setbtn2] = useState("");

    const [city,setcity] = useState("");
    const [btn3,setbtn3] = useState("");

    const [passwd,setpasswd] = useState("");
    const [btn4,setbtn4] = useState("");

    const [passwod,setpasswod] = useState("");
    const [btn5,setbtn5] = useState("");

    const input = (AV) =>{
        setname(AV.target.value)
    }
    const input1 = (AV) =>{
        setsurname(AV.target.value)
    }
    const input2 = (AV) =>{
        setmail(AV.target.value)
    }
    const input3 = (AV) =>{
        setcity(AV.target.value)
    }
    const input4 = (AV) =>{
        setpasswd(AV.target.value)
    }
    const input5 = (AV) =>{
        setpasswod(AV.target.value)
    }


    const validate = (VA) =>
    {
        VA.preventDefault();
        setbtn(name)
        setbtn1(surname)
        setbtn2(mail)
        setbtn3(city)
        setbtn4(passwd)
        setbtn5(passwod)
    }

    return(
        <div className="s-f">
             {/* ...........................SIGNUP FORM............................. */}
            <div className="signupp-form">
            <h1>Registration</h1>

            <form onSubmit={validate}>
                <p>NAME</p>
                <input type="text" onChange={input} name="" id="a1"></input>
                <span id='error' style={{color:'red'}}></span>
                {/* <br></br> */}

                <p>SURNAME</p>
                <input type="text" onChange={input1} name="" id="a2"></input>
                <span id='error2' style={{color:'red'}}></span>
                {/* <br></br> */}

                <p>EMAIL</p>
                <input type="text" onChange={input2} name="" id="a3"></input>
                <span id='error3' style={{color:'red'}}></span>
                {/* <br></br> */}

                <p>CITY</p>
                <select onChange={input3}>
                            <option label="Select Your City"></option>
                            <optgroup label="Gujarat">
                                <option value="">Gandhinagar</option>
                                <option value="">Ahmedabad</option>
                                <option value="">Rajkot</option>
                                <option value="">Surat</option>
                                <option value="">Junagadh</option>
                                <option value="">Patan</option>
                                <option value="">Vadodara</option>
                            </optgroup>
                            <optgroup label="Rajasthan">
                                <option value="">Jaipur</option>
                                <option value="">Kota</option>
                                <option value="">Ajmer</option>
                                <option value="">Bikaner</option>
                            </optgroup>
                            <optgroup label="Uttar Pradesh">
                                <option value="">Lacknow</option>
                                <option value="">Agra</option>
                                <option value="">Rampur</option>
                                <option value="">Kanpur</option>
                                <option value="">Lalitpur</option>
                                <option value="">Mirzapur</option>
                                <option value="">Jhansi</option>
                            </optgroup>
                            <optgroup label="Madhya Pradesh">
                                <option value="">indore</option>
                                <option value="">Bhopal</option>
                                <option value="">jabalpur</option>
                                <option value="">Gwalior</option>
                                <option value="">Ujjain</option>
                                <option value="">Ratlam</option>
                                <option value="">Dewas</option>
                            </optgroup>
                        </select>
                {/* <br></br> */}

                <p>PASSWORD</p>
                <input type="password" onChange={input4} name="" id="a4"></input><br></br>
                <p>CONFIRM PASSWORD</p> 
                <input type="password" onChange={input5} name="" id="a5"></input>
                <span id='error4' style={{color:'red'}}></span>
                {/* <br></br>&nbsp;&nbsp;&nbsp; */}

                {/* <br></br> */}

                <button className="sign-btn" onClick={Valid}>SUBMIT</button>
            </form>
             {/* ...........................SIGNUP FORM............................. */}
            </div>
        
            <table style={{border:'2px groove black',marginLeft:'55%',backgroundColor:'purple',marginTop:'10%',opacity:'0.8'}}>
                        <tr style={{border:'2px groove lightblue',textAlign:'center'}}>
                            <th>
                                NAME  : 
                            </th>
                            <td>
                                <h3 style={{color:'white'}}>{btn}</h3>
                            </td>
                        </tr>
                        <tr style={{border:'2px groove black',textAlign:'center'}}>
                            <th>
                                SURNAME : 
                            </th>
                            <td>
                                <h3 style={{color:'white'}}>{btn1}</h3>
                            </td>
                        </tr>
                        <tr style={{border:'2px groove black',textAlign:'center'}}>
                            <th>
                                EMAIL : 
                            </th>
                            <td>
                                <h3 style={{color:'white'}}>{btn2}</h3>
                            </td>
                        </tr>
                        <tr style={{border:'2px groove black',textAlign:'center'}}>
                            <th>
                                CITY : 
                            </th>
                            <td>
                                <h3 style={{color:'white'}}>{btn3}</h3>
                            </td>
                        </tr>
                        {/* <tr style={{border:'2px groove black',textAlign:'center'}}>
                            <th>
                                CITY : 
                            </th>
                            <td>
                                <h3 style={{color:'white'}}>{btn3}</h3>
                            </td>
                        </tr> */}
                        <tr style={{border:'2px groove black',textAlign:'center'}}>
                            <th>
                                PASSWORD : 
                            </th>
                            <td>
                                <h3 style={{color:'white'}}>{btn4}</h3>
                            </td>
                        </tr>
                    </table>

        </div>

        
    )
}

export default Registration;