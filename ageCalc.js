const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function ageCalculator(){
    let today = new Date()
    let inputDate = new Date(document.getElementById("date").value);
    let birthMonth, birthDate, birthYear;

    let birthDetails = {
        date: inputDate.getDate(),
        months:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate() ;

    leapChecker(currentYear);

    if (birthDetails.year > currentYear ||
        (birthDetails.months > currentMonth && birthDetails.year ==currentYear) ||
        (birthDetails.date > currentDate && birthDetails.year ==currentYear &&
            birthDetails.months ==currentMonth)){
        alert("not born yet");
        return;
    }
    birthYear = currentYear - birthDetails.year;
    if (currentMonth >= birthDetails.months){
        birthMonth = currentMonth - birthDetails.months;
    }
    else {
        birthYear--;
        birthMonth = 12 + currentMonth -birthDetails.months;
    }
    if (currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    }
    else{
        birthMonth--;
        birthDate = months[currentMonth-2] +currentDate -birthDetails.date;
    }
    if (birthMonth < 0){
        birthMonth = 11;
        birthYear--;
    }

    if (isNaN(birthYear) ||  isNaN(birthMonth) || isNaN(birthDate)){
        document.getElementById("ageOutput").innerHTML = "Would you mind entering your birthday?"
    }
    else{
        document.getElementById("ageOutput").innerHTML = "Your age is " + String(birthYear) + " years old "
    }
}
function leapChecker(year){
    if (year%4 == 0 || (year%100 == 0 && year%400 == 0) ){
        months[1] = 29
    }else {
        months[1] = 28
    }

}