// input - checkbox
// html - classList.add() .remove()
var switchEl = document.querySelector('input[name=switch]')
// console.log(switchEl)
var titleEl = document.querySelector('#title');
var htmlEl = document.documentElement;
// console.log(htmlEl);
var isMode = false; // light

function onChangeSwitchEl(e) {
    e.preventDefault();
    console.log(e.currentTarget.checked) // true | false (boolean)
    isMode = e.currentTarget.checked;
    setColorMode();
}

function setColorMode() {
    if (isMode) {
        htmlEl.classList.add('mode-dark');
        titleEl.innerHTML = 'Dark Mode';
    } else {
        htmlEl.classList.remove('mode-dark');
        titleEl.innerHTML = 'Light Mode';
    }
}

function addEvent() {
    switchEl.addEventListener('change', onChangeSwitchEl);
}

function reset() {
    if(isMode) {
       switchEl.checked = true; 
    }
    setColorMode();
}

function init() {
    reset();
    addEvent();
}
init();
