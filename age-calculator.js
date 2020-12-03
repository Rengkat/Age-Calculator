let input = document.querySelector('#ageInput');
let dayButton = document.querySelector('#day-mode');
let nightButton = document.querySelector('#night-mode');
let outputYears = document.querySelector('#age-in-year');
let outputMonths = document.querySelector('#age-in-Months');
let outputDays = document.querySelector('#age-in-days');
let calculateButton = document.querySelector('#calculate');
let resetButton = document.querySelector('#reset');

calculateButton.addEventListener('click', calculate);

function calculate() {
    // User Birth Date 
    
    let dateArry = input.value.split('-');
    let userBirthYear = Number(dateArry[0]);
    let userBirthMonth = Number(dateArry[1]);
    let userBirthDay = Number(dateArry[2]);

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

    let totalMonths = currentMonth - userBirthMonth; // total number of months
    outputMonths.textContent = totalMonths;
  
    
    
}