const theOutput = document.getElementById("date");

theOutput.innerHTML = "...your age will be calculated soon";

function displayAge () {
    var birthdate = new Date(document.getElementById("date").value);
    let today = new Date();
    var result = today.getFullYear() - birthdate.getFullYear();

    document.getElementById("result").innerHTML = "Your age is " + result + " years old";
}
