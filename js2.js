// Q7
for (let i=0 ; i<=5 ; i++){
    alert(i);
}

//Q8
var text="";
for (let i=0 ; i<=5 ; i++){
    text+=(i+" ");
}
alert(text);


//Q9
for (let i=0 ; i<=20 ; i+=3){
    if(i!=0){
    alert(i);
    }
}


//Q10
var number=parseInt(prompt("Enter a number in range of 0 and 100!"));
while (number < 0 || number > 100 || isNaN(number)){
    number=parseInt(prompt("Wrong number, Try again!\nEnter a number in range of 0 and 100!"));
}

//Q11
var num=parseInt(prompt("Enter a number to calculat sum from 0:"));
var sum=0;
for (let i=0; i<=num ; i++){
    sum+=i;
}
alert("sum = "+ sum);