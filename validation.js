function validation1(){
    var email = document.getElementById("mail"); 
    var validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   
    if (email.value.match(validRegex)){
        email.style.borderColor = "green";
        alert("Form Submitted Successfully!")
        return true;
    }else{
        document.getElementById('error').style.display ="inline-block";
        email.style.borderColor = "red";
        return false;
    }

}
function validation2(){
    var emaill = document.getElementById("maill"); 
    var validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   
    if (emaill.value.match(validRegex)){
        alert("Form Submitted Successfully!")
        return true;
    }else{
        document.getElementById('errorR').style.display ="inline";
        emaill.style.borderColor = "red";
        return false;
    }

}
