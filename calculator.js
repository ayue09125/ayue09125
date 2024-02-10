hzUnits = {
    "hz ": 1 / 1000,
    "kHz": 1,
    "MHz": 1000,
    "GHz": 1000000
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {

        let bw = number(document.querySelector('#bw').value);
        let sf = number(document.querySelector('#sf').value);
        let cr = number(document.querySelector('#cr').value);
        //let br = number(document.querySelector('#br').value);

        let answer = sf * bw * cr;

        if (typeof answer === 'undefined') {
            document.getElementById("answer").innerHTML = "undefined";
        }
        else {
            document.getElementById("answer").innerHTML = answer;
        }


        event.preventDefault();
    });



});
