let input = document.querySelector('#ageInput');
let dayButton = document.querySelector('#day-mode');
let nightButton = document.querySelector('#night-mode');
let outputYears = document.querySelector('#age-in-year');
let outputMonths = document.querySelector('#age-in-months');
let outputDays = document.querySelector('#age-in-days');
let calculateButton = document.querySelector('#calculate');
let resetButton = document.querySelector('#reset');
let container = document.getElementsByClassName('container');

calculateButton.addEventListener('click', calculate);
resetButton.addEventListener('click', reset);
dayButton.addEventListener('click', daymood);
nightButton.addEventListener('click', nightmood);

function calculate() {
    // User Birth Date 
    
    let dateArry = input.value.split('-');
    let userBirthYear = Number(dateArry[0]);
    let userBirthMonth = Number(dateArry[1]);

    //Current Date
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDateString = currentDate.toDateString();
    let currentDateArry = currentDateString.split(' ');
    let currentDay = Number(currentDateArry[2]);
    
    //Calculation section
    let totalYears = currentYear - userBirthYear; //total number of years
    outputYears.textContent = totalYears;

    let monthsCalculated = currentMonth - userBirthMonth; // total number of months
    let totalMonths;
    if (monthsCalculated === 0) {
        totalMonths = totalYears * 12;
        outputMonths.textContent = totalMonths;
    } else if (monthsCalculated === 1) {
        totalMonths = (totalYears * 12) + 1;
        outputMonths.textContent = totalMonths;
    } else if (monthsCalculated === 2) {
        totalMonths = (totalYears * 12) + 2;
        outputMonths.textContent = totalMonths;
    } else if (monthsCalculated === 3) {
        totalMonths = (totalYears * 12) + 3;
        outputMonths.textContent = totalMonths;
    } else if (monthsCalculated === 4) {
        totalMonths = (totalYears * 12) + 4;
        outputMonths.textContent = totalMonths;
    } else if (monthsCalculated === 5) {
        totalMonths = (totalYears * 12) + 5;
        outputMonths.textContent = totalMonths;
    } else if (monthsCalculated === 6) {
        totalMonths = (totalYears * 12) + 6;
        outputMonths.textContent = totalMonths;
    } else if (monthsCalculated === 7) {
        totalMonths = (totalYears * 12) + 7;
        outputMonths.textContent = totalMonths;
    } else if (monthsCalculated === 8) {
        totalMonths = (totalYears * 12) + 8;
        outputMonths.textContent = totalMonths;
    } else if (monthsCalculated === 9) {
        totalMonths = (totalYears * 12) + 9;
        outputMonths.textContent = totalMonths;
    } else if (monthsCalculated === 10) {
        totalMonths = (totalYears * 12) + 10;
        outputMonths.textContent = totalMonths;
    } else if (monthsCalculated === 11) {
        totalMonths = (totalYears * 12) + 11;
        outputMonths.textContent = totalMonths;
    } else if (monthsCalculated === 2) {
        totalMonths = (totalYears * 12) + 12;
        outputMonths.textContent = totalMonths;
    } 

//calculating total number of days
    if (currentMonth === 0) {
        totalDays = totalYears * 356 + currentDay;
        outputDays.textContent = totalDays;
    } else if (currentMonth === 1) {
        totalDays = totalYears * 356 + currentDay;
        outputDays.textContent = totalDays;
    } else if (currentMonth === 2) {
        totalDays = (totalYears * 365) + 31 + currentDay;
        outputDays.textContent = totalDays;
    } else if (currentMonth === 3) {
        totalDays = (totalYears * 365) + 59 + currentDay;
        outputDays.textContent = totalDays;
    } else if (currentMonth === 4) {
        totalDays = (totalYears * 356) + 90 + currentDay;
        outputDays.textContent = totalDays;
    } else if (currentMonth === 5) {
        totalDays = (totalYears * 365) + 120 + currentDay;
        outputDays.textContent = totalDays;
    } else if (currentMonth === 6) {
        totalDays = (totalYears * 365) + 151 + currentDay;
        outputDays.textContent = totalDays;
    } else if (currentMonth === 7) {
        totalDays = (totalYears * 356) + 181 + currentDay;
        outputDays.textContent = totalDays;
    } else if (currentMonth === 8) {
        totalDays = (totalYears * 365) + 212 + currentDay;
        outputDays.textContent = totalDays;
    } else if (currentMonth === 9) {
        totalDays = (totalYears * 365) + 243 + currentDay;
        outputDays.textContent = totalDays;
    } else if (currentMonth === 10) {
        totalDays = (totalYears * 356) + 273 + currentDay;
        outputDays.textContent = totalDays;
    } else if (currentMonth === 11) {
        totalDays = (totalYears * 365) + 304 + currentDay;
        outputDays.textContent = totalDays;
    } else if (currentMonth === 12) {
        totalDays = (totalYears * 365) + 334 + currentDay;
        outputDays.textContent = totalDays;
    }
}
// Reseting empty space
function reset() {
    input.innerHTML = "";
    outputYears.innerHTML ="";
    outputMonths.innerHTML = "";
    outputDays.innerHTML = "";
}

function daymood() {
    // parts to be change
    document.querySelector('.header').className = 'header2';
    document.querySelector('.container').className = 'container2';
    document.querySelector('.input').className = 'input2';
    document.querySelector('.output-label').className = 'output-label2';
    document.querySelector('#day-mode').id = 'buttons';
    document.querySelector('#night-mode').id = 'buttons';
    document.querySelector('#age-in-year').id = 'agew';
    document.querySelector('#age-in-months').id = 'agew';
    document.querySelector('#age-in-days').id = 'agew';
    document.querySelector('#ageInput').id = 'ageInput2';
    
}
function nightmood() {
    window.location.reload();
}