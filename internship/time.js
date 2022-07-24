var date=new Date();
document.getElementById("date").innerHTML=date;
//  date1=new Date();
document.getElementById("date1").innerHTML=date.getDate();
document.getElementById("month").innerHTML=date.getMonth();
document.getElementById("year").innerHTML=date.getFullYear();
// var time=new Time();
document.getElementById("time").innerHTML=date.getHours();
document.getElementById("minutes").innerHTML=date.getMinutes();
document.getElementById("sec").innerHTML=date.getSeconds();

function ctime(){
    var a=new Date();
    document.getElementById("ctime").innerHTML=a.toLocaleTimeString();
}
setInterval(ctime,1000)