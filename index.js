// Change the name in H1

let titleName = document.querySelector('h1');

let nameChange = function() {
    document.querySelector('h1').innerHTML = 'Dan:)';
}

let nameReturn = function() {
    document.querySelector('h1').innerHTML = 'Daniel Cross';
}

titleName.addEventListener('mouseover', nameChange);
titleName.addEventListener('mouseout', nameReturn);
titleName.addEventListener('touchstart', nameChange);
titleName.addEventListener('touchend', nameReturn);


// Increase Picture size when over and spin 

// let picture = document.getElementsById('profile');

// let pictureGrow = function () {
//     picture.style.minWidth = '800px';
// }

// picture.addEventListener('mouseover', pictureGrow);