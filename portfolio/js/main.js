$(jQuery).scroll(
    function () {
        if ($(this).scrollTop() >= 200)
            $("#navigation").addClass("__no_transparent");
        else
            $("#navigation").removeClass("__no_transparent");
    }

);

$("document").ready(
    function () {
        $(".circle").circleProgress({
            startAngle: -Math.PI / 2,
            fill: "#0575e6",

        }).on("circle-animation-progress" , function (event , progress , stepValue) { 
            $(this).find("span").html(Math.round(stepValue * 100) + "%");
         });
    }
);

let year = new Date().getFullYear()

$('#year').html(year);

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