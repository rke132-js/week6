const userNameInput = document.querySelector('#userNameField');
const userDoBInput = document.querySelector('#date');
const yearSpan = document.querySelector('#year');
const btn = document.querySelector('#submitBtn');

const greetingLine = document.querySelector('#greeting');
const feedbackLine = document.querySelector('#feedback');

const imageContainer = document.querySelector('#avatarContainer');
const avatarImage = document.querySelector('#avatar');



// let colors = ['red', 'blue', 'yellow'];
// let randomColor = colors[Math.floor(Math.random() * colors.length)];
// console.log(randomColor);


const today = new Date();
const todayYear = today.getFullYear();

yearSpan.innerHTML = todayYear;



btn.addEventListener('click', () => {  
    
    let userName = userNameInput.value;
    greetingLine.innerHTML = `Hello, ${userName}!`;

    //calculate the age
    const userDateOfBirth = new Date(userDoBInput.value);
    console.log(userDateOfBirth);

    const usersYearOfBirth = userDateOfBirth.getFullYear();
    console.log(usersYearOfBirth);
    
    let userAge = todayYear - usersYearOfBirth;
    console.log('age: ', userAge);

    let month = today.getMonth() - userDateOfBirth.getMonth();
    console.log('month diff: ', month);


    if(month < 0 || ( month === 0 && today.getDate() < userDateOfBirth.getDate() )) {
        userAge = userAge - 1;
    }

    if(userAge < 13) {
        feedbackMessage = `${userAge}: too young to sign up.`;
    } else {
        feedbackMessage = 'Welcome!';

        //array
        let avatars = ['bean', 'harry', 'lara', 'yoda'];
        let randomAvatarName = avatars[Math.floor(Math.random() * avatars.length)];

        let avatarImagePath = `avatars/${randomAvatarName}.png`;

        avatarImage.src = avatarImagePath;
        avatarImage.alt = randomAvatarName;

        imageContainer.style.display = 'block';

    }

    feedbackLine.innerHTML = feedbackMessage;

});