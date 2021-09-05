const spinButton = document.querySelector(".spinButton");
const spinner =document.querySelector('.spinner');
const speedUp= document.querySelector('.speedUp');
const speedDown= document.querySelector('.speedDown');
let speed = 10; 
//There I downloaded all elements that will change color with interaction
const firstAmongus = [...document.querySelectorAll('.firstAmongus')];
const firstAmongusInput = document.querySelector('.firstAmongusInput');
const secondAmongus = [...document.querySelectorAll('.secondAmongus')];
const secondAmongusInput = document.querySelector('.secondAmongusInput');
const thirdAmongus = [...document.querySelectorAll('.thirdAmongus')];
const thirdAmongusInput = document.querySelector('.thirdAmongusInput');
const colorSpinner = [...document.querySelectorAll('.colorSpinner')];
const colorSpinnerInput = document.querySelector('.colorSpinnerInput');

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

const changingColorOfItem = function(event,array){
    if(event.target.value.length > 2){
        array.forEach(item =>item.attributes.fill.value = `${event.target.value}`);
    }
}

firstAmongusInput.addEventListener('focusout',function(){changingColorOfItem(event,firstAmongus)});
secondAmongusInput.addEventListener('focusout',function(){changingColorOfItem(event,secondAmongus)});
thirdAmongusInput.addEventListener('focusout',function(){changingColorOfItem(event,thirdAmongus)});
colorSpinnerInput.addEventListener('focusout',function(){changingColorOfItem(event,colorSpinner)});

spinButton.addEventListener("click",spinningAnimation);
speedUp.addEventListener('click', function(){changingSpeed("+1")});
speedDown.addEventListener('click',function(){changingSpeed("-1")});