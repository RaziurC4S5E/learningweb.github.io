/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'CHELSEA FC';

let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});*/

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/chelseatlogo.jpg') {
        myImage.setAttribute('src', 'images/chelsealogo.jpeg');
    } else {
        myImage.setAttribute('src', 'images/chelseatlogo.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = myName + ' is a fan of Chelsea';
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ' is a fan of Chelsea';
}


myButton.onclick = function () {
    setUserName();
}

