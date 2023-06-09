const container = document.querySelector('.container');
//the grid
const content = document.querySelector('.content');
container.appendChild(content);

function grid(number){
    for(let i=1;i<=number;i++){
        const square = document.createElement('div');
        square.classList.add('square');


        for(let j=1;j<=number;j++){
            const mini = document.createElement('div');
            mini.classList.add('mini');
            square.appendChild(mini);
        }

    content.appendChild(square);
    }
}

function colorGrid(color){
    const minis = document.querySelectorAll('.mini');
    minis.forEach(mini => {
        mini.addEventListener('mouseover', () => {
            mini.style.backgroundColor = `${color}`;
        });
    });
}


//the menu
const menu = document.querySelector('.menu');

const introduce = document.createElement('div');
introduce.classList.add('introduce');
menu.appendChild(introduce);

const inputNum = document.createElement('input');
inputNum.classList.add('inputNum');
introduce.appendChild(inputNum);

const btn1 = document.createElement('button');
btn1.classList.add('btn1');
btn1.textContent='submit';
introduce.appendChild(btn1);

const btn2 = document.createElement('button');
btn2.classList.add('btn2');
btn2.textContent = 'black';
menu.appendChild(btn2);

const btn3 = document.createElement('button');
btn3.classList.add('btn3');
btn3.textContent = 'rainbow';
menu.appendChild(btn3);

const btn4 = document.createElement('button');
btn4.classList.add('btn4');
btn4.textContent = 'clear';
menu.appendChild(btn4);

//btn functions
btn1.addEventListener('click', () => {
  let input = Number(inputNum.value);
  while (content.firstChild){
    content.removeChild(content.firstChild);
  }
  grid(input);
});

btn2.addEventListener('click', () => colorGrid('black'));

const colors = ['violet', 'indigo','blue','green','yellow','orange','red'];
let colorIndex = 0;
btn3.addEventListener('click', () => {
   setInterval(() => {
    colorGrid(colors[colorIndex]);
    colorIndex = (colorIndex + 1) % colors.length;
   }, 1000);
});

btn4.addEventListener('click', () => {
    const minis = document.querySelectorAll('.mini');
    minis.forEach(mini => {addEventListener
      mini.style.backgroundColor = 'white'; 
    });
    inputNum.value = '';
});