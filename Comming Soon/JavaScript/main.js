var gameFeatures = document.querySelector(".game-feature");
var countDate = new Date();
countDate = new Date(countDate.getFullYear(), countDate.getMonth() + 6, 0o1);
var x = setInterval(function () {
    var thisDate = new Date()
    var different = countDate - thisDate;
    console.log(different)
    var months = Math.floor(different / (1000 * 60 * 60 * 30 * 24))
    var days = Math.floor(different % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24))
    var hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    var minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60))
    var seconds = Math.floor(different % (1000 * 60) / (1000))
    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;

}, 1000);


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()