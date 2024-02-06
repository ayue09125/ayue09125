let question1Done = false;
let question2Done = false;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#crustacean').addEventListener('click', function(event) {
        if (question1Done == false) {
            document.querySelector('#crustacean').style.background = 'green';
            document.getElementById("response").innerHTML = 'Correct!';
            question1Done = true;
            event.preventDefault();
        }
    });
    document.querySelector('#arachnid').addEventListener('click', function(event) {
        if (question1Done == false) {
            document.querySelector('#arachnid').style.background = 'red';
            document.getElementById("response").innerHTML = 'Incorrect';
            question1Done = true;
            event.preventDefault();
        }
    });
    document.querySelector('#mammal').addEventListener('click', function(event) {
        if (question1Done == false) {
            document.querySelector('#mammal').style.background = 'red';
            document.getElementById("response").innerHTML = 'Incorrect';
            question1Done = true;
            event.preventDefault();
        }
    });
    document.querySelector('#mollusk').addEventListener('click', function(event) {
        if (question1Done == false) {
            document.querySelector('#mollusk').style.background = 'red';
            document.getElementById("response").innerHTML = 'Incorrect';
            question1Done = true;
            event.preventDefault();
        }
    });

    document.querySelector('form').addEventListener('submit', function(event) {
        if (question2Done == false) {
            let answer = document.querySelector('#answer').value;
            if (answer == '7' || answer.toLowerCase() == 'seven') {
                document.getElementById("response2").innerHTML = 'Correct!';
                document.querySelector('#answer').style.background = 'green';
            }
            else {
                document.getElementById("response2").innerHTML = 'Incorrect';
                document.querySelector('#answer').style.background = 'red';
            }
            question2Done = true;
        }
        event.preventDefault();
    });
});