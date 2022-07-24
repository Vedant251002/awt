// DATA : Marks weights 78kg height is 1.69m tall
//         jhon weights 92kg height is 1.95m tall 

var massMark = 78;
var heightMark = 1.69;
var massJhon = 92;
var heightJhon = 1.95;

var BMIMark = massMark / heightMark **2;
var BMIJhon = massJhon / heightJhon **2;

console.log(BMIMark);
document.write(BMIJhon,BMIJhon);

if(BMIMark>BMIJhon){
    document.write("bmimark is greater than bmijhon");
    console.log("bmimark is greater than bmijhon");
}
else{
    document.write("bmijhon is greater than bmimark");
    console.log("bmijhon is greater than bmimark");
}

var mark = {
    name : "mark miller",
    mass : 78,
    height : 1.69,
    calcbmi:function(){
        jhon.bmi = john.mass / john.height **2;
    },
};

var jhon = {
    name : "jhon wick",
    mass : 92,
    height : 1.95,

};
mark.calcbmi();
console.log(mark.bmi);