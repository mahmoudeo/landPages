$(document).ready(function () {
    $("#watchVid").click(function () { 
        let lastVid = document.getElementById("lastVideo");
        if (lastVid.paused) {
            lastVid.play()
        } else {
            lastVid.pause()
        }
     })
     $("#fullYear").html(new Date().getFullYear());
});

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