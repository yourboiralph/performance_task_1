
isNotAllowed = true;
do{
    let enteredNumber = prompt("How old are you?");
        if(enteredNumber < 25){
            alert("Your age is " + enteredNumber +" and is not allowed in this website ;)")
        }
        else if(enteredNumber >= 25 && enteredNumber <= 100){
            alert("You are " + enteredNumber + " years old and is allowed to enter the website")
            isNotAllowed = false;
        }
        else{
            alert("Okay Ancient One, you are" + enteredNumber +" years old, go back to sleep.")
        }
}
while(isNotAllowed);

let isAbove25 = confirm("Are you above 25 years old?");
    if(isAbove25 == true){
        alert("User is above 25!")
    }
    else{
        alert("User is below 25!")
    }
let numberLessThan100 = prompt("enter a number");
    if(numberLessThan100 < 100){
        alert("User entered less than 100");
    }
    if(numberLessThan100 == 100){
        alert("User entered equal to 100");
    }
    if(numberLessThan100 > 100){
        alert("User entered above 100");
    }


//Print numbers 1 - 30
document.write("Print numbers 1 - 30 <br> <br>");
for(a = 0; a < 30; a++){
    document.write((a+1) + "<br>")
}

/* IF GUSTO TAG MAS EFFICIENT SIR HAHAHAHAH PERO PA BRAYT2 MAN KO SO MODULO AKONG GAMITON

for(b = 0; b <= 40; b+=2){
    document.write(b + "<br>");
}*/

//Print the even numbers 1-40
document.write("<br> Print the even numbers 1-40 <br> <br>");
for(b = 0; b <= 40; b++){
    if(b % 2 == 0){
        document.write(b +"<br>")
    }
}

//Print numbers that are divisible by 3, 40 - 10
document.write("<br> Print numbers that are divisible by 3, 40 - 10 <br> <br>");
for (c = 40; c >= 10; c--){
    if(c % 3 == 0){
        document.write(c + "<br>");
    }
}

