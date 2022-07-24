function validate(){
    var name=document.getElementById("name").value
    var mail=document.getElementById("mail").value
    var sub=document.getElementById("sub").value
    var phn=document.getElementById("phn").value
    var msg=document.getElementById("msg").value
    console.log(name,mail,sub,phn,msg);

    if(name!=name.match(/[A-Za-z]{3,}/)){
        alert("Enter Valid Name");
    }
    else if(mail!=mail.match(/[a-z0-9]+@[a-z]+.[a-z]{2,5}/)){
        alert("Enter Valid Email");
    }
    else if(sub!=sub.match(/[A-Za-z]{2,}/)){
        alert("Enter Valid Subject");
    }
    else if(phn!=phn.match(/[6-9]\d{9}/)){
        alert("Enter Valid Phone Number");
    }
    else if(msg!=msg.match(/[a-zA-Z0-9]{1,}/)){
        alert("Enter Valid Subject");
    }
    else{
        alert("Thank you for Submitting");
    }
}