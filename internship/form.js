function validate(){
    var name=document.getElementById("name").value
    var phn=document.getElementById("phn").value
    var pass=document.getElementById("pass").value
    var cpass=document.getElementById("cpass").value
    console.log(name,phn,pass,cpass);

    if(name!=name.match(/[A-Za-z]{3,}/)) {
        alert("Enter Valid Name");
    }
    else if(phn!=phn.match(/[6-9]\d{9}/)){
        alert("Enter Valid Number");
    }
    else if(pass!=pass.match(/[A-Za-z0-9]{4,12}/)){
        alert("Enter Valid Password");
    }
    else if(cpass!=pass){
        alert("Enter Same Password");
    }
    else{
        alert("Thank You For Submitting");
    }
        
    
}