//id

const title = document.getElementById("title");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const output = document.getElementById("output");


const description = document.querySelector(".description");
const button = document.querySelector("#btnClick");



button.addEventListener("click", function() {

    button.textContent = "Clicked";
    let name = nameInput.value;
    let age = ageInput.value;

    output.innerHTML = "<p style= 'color:green;'>   Button was Clicked! </p>";


    if(age == 18){
        output.innerHTML += "<p style='color:blue';> You are 18 years old! </p>";
    }
    else{
        output.innerHTML += "<p style='color:red';> You are not 18 years old! </p>";
    }


    if(age === 18){
        output.innerHTML += "<p style='color:blue';> You are 18 years old! (STRICT) </p>";
    }
    else{
        output.innerHTML += "<p style='color:red';> You are not 18 years old! (STRICT) </p>";
    }


    if (name =! ""){
        output.innerHTML += "<p style='color:black';> Hello, " + name + "I am" + age + "! </p>";
    }
    else{
        output.innerHTML += "<p style='color:black';> Please Enter your name! </p>";
    }

});