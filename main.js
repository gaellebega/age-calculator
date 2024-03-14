const theOutput = document.getElementById("date");

theOutput.innerHTML = "...your age will be calculated soon";

function displayAge () {
    const birthday = theOutput.value;
    var birthdate = new Date(document.getElementById("date").value);
    let today = new Date();
    var result = today.getFullYear() - birthdate.getFullYear();
    if ( birthday === "" ){
     document.getElementById("result").innerHTML = `Please enter your birthday`
    } else {
        document.getElementById("result").innerHTML = "Your age is " + result + " years old";
    }
}

