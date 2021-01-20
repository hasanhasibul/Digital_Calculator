let screen = document.getElementById('previous');
buttons = document.getElementsByClassName('numbers');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('Button text is ', buttonText);
        // if (buttonText == 'X') {
        //     buttonText = '*';
        //     screenValue += buttonText;
        //     screen.innerText = screenValue;
        // }
         if (buttonText == 'DEL') {
            screenValue = "";
            screen.innerText = screenValue;
            document.getElementById('current').innerText="";
        }
        else if (buttonText == 'AC') {
            screenValue = screenValue.slice(0,screenValue.length-1);
            screen.innerText = screenValue;
            if(screenValue.length==0){
                document.getElementById('current').innerText="";
            }
            
        }
        else if (buttonText == '=') {
            document.getElementById('current').innerText=screenValue;
            screen.innerText = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.innerText = screenValue;
        }

    })
}


