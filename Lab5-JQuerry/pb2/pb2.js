$(document).ready(function(){
    $('#submit').click(function(){
        verify();
    });
});
function verify(){
    let errors = [];
    const firstName = $('#firstName');
    const lastName = $('#lastName');
    const birthDate = $('#birthDate');
    const age = $('#age');
    const email = $('#email');

    const nameRegex = /^[a-zA-Z]+$/;
    const birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const ageRegex = /^\d{1,2}$/;
    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/;

    if (!firstName.val().match(nameRegex)) {
        errors.push("First name is not valid! It must contain only letters!");
        firstName.css("border-color", "red");
    }
    else{
        firstName.css("border-color", "green");
    }
    

    if (!lastName.val().match(nameRegex)) {
        errors.push("Last name is not valid! It must contain only letters!");
        lastName.css("border-color", "red");
    }else{
        lastName.css("border-color", "green");
    }
    

    if (!birthDate.val().match(birthDateRegex)) {
        errors.push("Birth date is not valid! It must be in format YYYY-MM-DD!");
        birthDate.css("border-color", "red");
    }else{
        birthDate.css("border-color", "green");
    }


    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();

    let birthYear = birthDate.val().substring(0, 4);
    let birthMonth = birthDate.val().substring(5, 7);
    let birthDay = birthDate.val().substring(8, 10);

    if (!age.val().match(ageRegex)){
        errors.push("Age is not valid! It is not corresponding to your birth date!");
        age.css("border-color", "red");
    }
    else if (age.val() > (currentYear - birthYear)){
        errors.push("Age is not valid! It is not corresponding to your birth date!");
        age.css("border-color", "red");
    }
    else if (age.val() == (currentYear - birthYear)){
        if (birthMonth > currentMonth){
            errors.push("Age is not valid! It is not corresponding to your birth date!");
            age.css("border-color", "red");
        }
        else if (birthMonth == currentMonth){
            if (birthDay > currentDay){
                errors.push("Age is not valid! It is not corresponding to your birth date!");
                age.css("border-color", "red");
            }
            else{
                age.css("border-color", "green");
            }
        }
        else{
            age.css("border-color", "green");
        }
    }
    else if (age.val() == (currentYear - birthYear - 1)){
        if (birthMonth < currentMonth){
            errors.push("Age is not valid! It is not corresponding to your birth date!");
            age.css("border-color", "red");
        }
        else if (birthMonth == currentMonth){
            if (birthDay < currentDay){
                errors.push("Age is not valid! It is not corresponding to your birth date!");
                age.css("border-color", "red");
            }
            else{
                age.css("border-color", "green");
            }
        }
        else{
            age.css("border-color", "green");
        }
    }
    else{
        errors.push("Age is not valid! It is not corresponding to your birth date!");
        age.css("border-color", "red");
    }

    if (!email.val().match(emailRegex)) {
        errors.push("Email is not valid! It must contain @ and .!");
        email.css("border-color", "red");
    }else{
        email.css("border-color", "green");
    }

    if(errors.length > 0){
        alert(errors.join("\n"), "This page says:");
    }
    else{
        alert("All fields are valid!");
    }
}
