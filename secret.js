const userNum = document.querySelector('#userNumber');
const submitBtn = document.querySelector('#submitBtn');
const feedbackBlock = document.querySelector('#feedback');
const cpuRollBlock = document.querySelector('#cpuRoll');
const winnerBlock = document.querySelector('#winner');


submitBtn.addEventListener('click', () => {
    const userChoice = Number(userNum.value); //casting
    const cpuChoice = Math.floor(Math.random() * 5) + 1;
    
    let message = '';

    if(userChoice === cpuChoice) {
        message = 'Congratulations! You won!';
    }
    else {
        message = 'Oops. CPU won. Try again!';
    }
    
    cpuRollBlock.innerHTML = `CPU rolled: ${cpuChoice}`;
    winnerBlock.innerHTML = message;
    
    feedbackBlock.style.display = 'block';

});