// Change the name in H1///

// assign variable to heading target 
let titleName = document.querySelector('h1');
let button = document.querySelector('button');
// console.log(button);

// function to alter innerHTML of H1 
const nameChange = function() {
    document.querySelector('h1').innerHTML = 'Dan:)';
}
// function to return to origional 
const nameReturn = function () {
    document.querySelector('h1').innerHTML = 'Daniel Cross'
}

//hide all elements after clicking button 
const revealInfo = function (e) {
    console.log(e);
    document.querySelector('p').style.display = 'block';
    document.querySelector('.skills').style.display = 'block';
    document.querySelector('.projects').style.display = 'block';
}

// event listeners 
button.addEventListener('click', revealInfo);
titleName.addEventListener('mouseover', nameChange);
titleName.addEventListener('mouseleave', nameReturn);

