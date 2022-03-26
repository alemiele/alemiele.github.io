let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/agliuccio.png') {
      myImage.setAttribute('src','images/agliuccio2.jpeg');
    } else {
      myImage.setAttribute('src','images/agliuccio.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Agliuccio, ' + myName;
  }

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Agliuccio, ' + myName;
    }
  }

  myButton.onclick = function() {
    setUserName();
  }