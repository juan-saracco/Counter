const counter = document.getElementById('counter');
const subtract = document.getElementById('subtract');
const reset = document.getElementById('reset');
const add = document.getElementById('add');
const container = document.getElementById('container');
const correct = new Audio();
correct.src = './sounds/correct-ding.mp3'

let acu = 0;


add.addEventListener('click', ()=>{
    acu ++;
    counter.textContent = acu;
    if (acu > 0 ) {
        container.style.backgroundColor = 'green';
    }else if (acu < 0) {
        container.style.backgroundColor = 'red';
    }else{
        container.style.backgroundColor='cornflowerblue'
    };

});

reset.addEventListener('click', ()=>{
    acu=0;
    counter.textContent=acu;
    container.style.backgroundColor='cornflowerblue';
    correct.play();

});

subtract.addEventListener('click', ()=>{
    acu --;
    counter.textContent=acu;
    if (acu > 0 ) {
        container.style.backgroundColor = 'green';
    }else if (acu < 0) {
        container.style.backgroundColor = 'red';
    }else{
        container.style.backgroundColor='cornflowerblue'
    };

});


