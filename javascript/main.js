const spinButton = document.querySelector(".spinButton");
const spinner =document.querySelector('.spinner');
const speedUp= document.querySelector('.speedUp');
const speedDown= document.querySelector('.speedDown');
let speed = 10; 

const spinningAnimation = function(){
    spinButton.disabled = true;
    let animate;
    if(speed > 0 ){
        let i = 0;
        animate = setInterval(function(){
           spinner.style.transform = `rotate(${i=i+speed}deg)`;  
        },10)
        setInterval(function(){  //pseudo psychic
            if(speed >0 ){
                speed -= 0.5;
            } else{  // this else secure reclicking animation.
                spinButton.disabled = false;
            }
        },500)
    } else{
        clearInterval(animate);
        speed = 10;
        
    }
}

const changingSpeed = function(modifier){
    if(modifier == "-1" && speed ==0 ){
        modifier =0;
    }
    const number =eval(modifier);
    speed = speed + number
    console.log(speed);
}   
spinButton.addEventListener("click",spinningAnimation);
speedUp.addEventListener('click', function(){changingSpeed("+1")});
speedDown.addEventListener('click',function(){changingSpeed("-1")});