var box = document.body.querySelector(".box");

//
var numone = Number(prompt("Enter a number:"));

if(!isNaN(numone)){

}else{
    document.body.innerHTML="Try again"
}

var operators = prompt("Enter a operator:");

if(operators=="+"||operators=="-"||operators=="*"||operators=="/"){

}else{
    document.body.innerHMTL="Try again"
}

var numtwo = Number(prompt("Enter a number:"));

if(!isNaN(numtwo)){

}else{
    document.body.innerHTML="Try again"
}

var result = 0;

if(operators=="+"){
    result=numone+numtwo;
}else if(operators=="-"){
    result=numone-numtwo;
}else if(operators=="*"){
    result=numone*numtwo;
}else if(operators=="/"){
    result=numone/numtwo;
}
var total = document.body.querySelector(".box")
 total.innerHTML=result;











