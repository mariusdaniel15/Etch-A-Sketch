const container = document.querySelector('.container');

for(let i=1;i<=16;i++){
    const square = document.createElement('div');
    square.classList.add('square');


    for(let j=1;j<=16;j++){
        const mini = document.createElement('div');
        mini.classList.add('mini');
        square.appendChild(mini);
    }

container.appendChild(square);

}