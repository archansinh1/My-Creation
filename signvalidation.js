const Valid = (evt) =>
{
        // Name Validation
        const Name = document.getElementById('a1').value;
        const surname = document.getElementById('a2').value;


        if(Name == "")
        {
            evt.preventDefault();
            document.getElementById('error').innerHTML = "* Please Enter Name";
            return false;
        }
        if(Name.length<3 || Name.length>10)
        {
            evt.preventDefault();
            document.getElementById('error').innerHTML = "* Enter Valid Name";
            return false;
        }
        if(!isNaN(Name))
        {
            evt.preventDefault();
            document.getElementById('error').innerHTML = "* Numbers Is Not Allow";
            return false;
        }

        // Surname Validation

        if(surname == "")
        {
            evt.preventDefault();
            document.getElementById('error2').innerHTML = "* Please Enter surname";
            return false;
        }
        if(surname.length<3 || surname.length>10)
        {
            evt.preventDefault();
            document.getElementById('error2').innerHTML = "* Enter Valid surname";
            return false;
        }
        if(!isNaN(surname))
        {
            evt.preventDefault();
            document.getElementById('error2').innerHTML = "* Numbers Is Not Allow";
            return false;
        }

        // Email Validation
        const EmailId = document.getElementById('a3').value;
        var email = EmailId.indexOf('@')

        if(EmailId == "")
        {
            evt.preventDefault();
            document.getElementById('error3').innerHTML = "* Please Enter Email";
            return false;
        }
        // if(email<=0)
        // {
        //     evt.preventDefault();
        //     document.getElementById('error3').innerHTML = "* Enter Valid Email";
        //     return false;
        // }
        // if((EmailId.charAt(EmailId.length -4!='.') && (EmailId.length -3!='.')))
        // {
        //     evt.preventDefault();
        //     document.getElementById('error3').innerHTML = "* Invalid Email";
        //     return false;
        // }
//
        // Password and Confirm Password Validation  
        const password = document.getElementById('a4').value;
        const cpassword = document.getElementById('a5').value;

        if(password == "" || cpassword == "")
        {
            evt.preventDefault();
            document.getElementById('error4').innerHTML = "* Invalid password";
            return false;
        }
        if(password != cpassword)
        {
            evt.preventDefault();
            document.getElementById('error4').innerHTML = "* Password is not mached";
            return false;
        }
}

export default Valid;