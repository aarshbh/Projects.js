const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const text = document.querySelector('h1');

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if (e.target.id ==="red"){
            body.style.backgroundColor= "red"
            

        }
        else if (e.target.id ==="blue"){
            body.style.backgroundColor= "blue"

        }

        else if (e.target.id ==="green"){
            body.style.backgroundColor= "green"
        }

        else if (e.target.id ==="yellow"){
            body.style.backgroundColor= "yellow"
            
            
        }
        if(e.target.id === "yellow"){
            text.style.color = "Black"
        }
        else{
        text.style.color = "White";
        }
    })
})

