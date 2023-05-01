const submit = document.getElementById("submit");
submit.addEventListener("click", function() {
    let errors = [];
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const birthDate = document.getElementById("birthDate");
    const age = document.getElementById("age");
    const email = document.getElementById("email");

    const nameRegex = /^[a-zA-Z]+$/;
    const birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const ageRegex = /^\d{1,2}$/;
    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/;

    if (!firstName.value.match(nameRegex)) {
        errors.push("First name is not valid! It must contain only letters!");
        firstName.style.borderColor = "red";
    }
    else{
        firstName.style.borderColor = "green";
    }
    

    if (!lastName.value.match(nameRegex)) {
        errors.push("Last name is not valid! It must contain only letters!");
        lastName.style.borderColor = "red";
    }else{
        lastName.style.borderColor = "green";
    }
    

    if (!birthDate.value.match(birthDateRegex)) {
        errors.push("Birth date is not valid! It must be in format YYYY-MM-DD!");
        birthDate.style.borderColor = "red";
    }else{
        birthDate.style.borderColor = "green";
    }


    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();

    let birthYear = birthDate.value.substring(0, 4);
    let birthMonth = birthDate.value.substring(5, 7);
    let birthDay = birthDate.value.substring(8, 10);

    if (!age.value.match(ageRegex)){
        errors.push("Age is not valid! It is not corresponding to your birth date!");
        age.style.borderColor = "red";
    }
    else if (age.value > (currentYear - birthYear)){
        errors.push("Age is not valid! It is not corresponding to your birth date!");
        age.style.borderColor = "red";
    }
    else if (age.value == (currentYear - birthYear)){
        if (birthMonth > currentMonth){
            errors.push("Age is not valid! It is not corresponding to your birth date!");
            age.style.borderColor = "red";
        }
        else if (birthMonth == currentMonth){
            if (birthDay > currentDay){
                errors.push("Age is not valid! It is not corresponding to your birth date!");
                age.style.borderColor = "red";
            }
            else{
                age.style.borderColor = "green";
            }
        }
        else{
            age.style.borderColor = "green";
        }
    }
    else if (age.value == (currentYear - birthYear - 1)){
        if (birthMonth < currentMonth){
            errors.push("Age is not valid! It is not corresponding to your birth date!");
            age.style.borderColor = "red";
        }
        else if (birthMonth == currentMonth){
            if (birthDay < currentDay){
                errors.push("Age is not valid! It is not corresponding to your birth date!");
                age.style.borderColor = "red";
            }
            else{
                age.style.borderColor = "green";
            }
        }
        else{
            age.style.borderColor = "green";
        }
    }
    else{
        errors.push("Age is not valid! It is not corresponding to your birth date!");
        age.style.borderColor = "red";
    }

    if (!email.value.match(emailRegex)) {
        errors.push("Email is not valid! It must contain @ and .!");
        email.style.borderColor = "red";
    }else{
        email.style.borderColor = "green";
    }

    if(errors.length > 0){
        alert(errors.join("\n"), "This page says:");
    }
    else{
        alert("All fields are valid!");
    }

});
