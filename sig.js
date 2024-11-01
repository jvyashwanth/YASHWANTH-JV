

function fnValidateSignup(e)
{
    e.preventDefault();   //prevent the form auto reloaded after click on submit
     
    let formData = e.target;
    let input_uname = document.getElementById("username").value; //it will take entered uname
    let input_pass = document.getElementById("password").value;
    let input_cpass = document.getElementById("cpassword").value;
    let input_mail = document.getElementById("mail").value;

    console.log(input_uname);
    console.log(input_pass);
    console.log(input_cpass);
    console.log(input_mail);
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passpattern=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    let validatename=input_uname.length >=5;
    let validatepass=passpattern.test(input_pass) && passpattern.test(input_cpass);
    let validatemail=emailPattern.test(input_mail);

    console.log(validatename)
    console.log(validatepass)
    console.log(validatemail)

//for validating username

if(!input_uname)
    {
        document.getElementsByClassName("name-empty")[0].style.display="block";
        document.getElementsByClassName("name-invalid")[0].style.display="none";
    }
    else if(!validatename)
        {
        document.getElementsByClassName("name-invalid")[0].style.display="block";
        document.getElementsByClassName("name-empty")[0].style.display="none";
    }
    //for validating password

        if (!input_pass) {
            
            document.getElementsByClassName("pass-empty")[0].style.display = "block";
        } else {
            
            document.getElementsByClassName("pass-empty")[0].style.display = "none";
        //length of password
        if (input_pass.length < 8) {
            document.getElementsByClassName("pass-len")[0].style.display = "block";
        } else {
            document.getElementsByClassName("pass-len")[0].style.display = "none";
        }
        //capital letters  
        if (!/[A-Z]/.test(input_pass)) {
            document.getElementsByClassName("pass-caps")[0].style.display = "block";
        } else {
            document.getElementsByClassName("pass-caps")[0].style.display = "none";
        }
        //small letters
        if (!/[a-z]/.test(input_pass)) {
            document.getElementsByClassName("pass-small")[0].style.display = "block";
        } else {
            document.getElementsByClassName("pass-small")[0].style.display = "none";
        }
        //special characters
        if (!/[#!@$%^&*-]/.test(input_pass)) {
            document.getElementsByClassName("pass-sc")[0].style.display = "block";
        } else {
            document.getElementsByClassName("pass-sc")[0].style.display = "none";
        }
        
        //number
        if (!/\d/.test(input_pass)) {
            document.getElementsByClassName("pass-num")[0].style.display = "block";
        } else {
            document.getElementsByClassName("pass-num")[0].style.display = "none";
        }
        // Check if passwords match
    if (input_pass !== input_cpass) {
        document.getElementsByClassName("pass-notmatch")[0].style.display = "block";
    } else {
        document.getElementsByClassName("pass-notmatch")[0].style.display = "none";
}

//for validating mail


if (!validatemail) {
    document.getElementsByClassName("mail")[0].style.display = "block";
} else {
    document.getElementsByClassName("mail")[0].style.display = "none";
}


    }
    

    
    if (validatemail && validatename && validatepass) 
    {
        
    alert("Signup successful!");
    console.log("signup successfull")
    return true;
        
    }
    


}
    