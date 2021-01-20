let current = document.getElementById('current');
const previous =  document.getElementById('previous');
let screenValue = "";
const numbers =  document.getElementsByClassName('numbers');
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
   number.addEventListener('click',function(event){
    let buttonText = event.target.innerText;
    if(buttonText == '='){
      current.innerText = eval(screenValue);
      previous.innerText= screenValue;
    }
    else if(buttonText == 'DEL'){
        screenValue= '';
        current.innerText = screenValue;
        previous.innerText="";
    }
    else if (buttonText== 'AC'){
        screenValue=screenValue.slice(0,screenValue.length-1);
        current.innerText = screenValue;
    }
    else{
        screenValue += buttonText;
        current.innerText = screenValue
    }
   })
}