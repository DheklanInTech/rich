$('.contact-form').submit( function (event){
    // alert(currency)
    event.preventDefault()
    // validate()
    let name = document.getElementById('name').value;
    let email  = document.getElementById('email').value,
        phone    = document.getElementById('phone').value,
        subject = document.getElementById('subject').value,
        message = document.getElementById('message').value
    
    if(name.length < 1){
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Name*</div>";
      fadeIn();
      return false;
    } else if(email.length < 1) {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Email*</div>";
      fadeIn();
      return false;
    } else if(phone.length < 1){
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Phone number*</div>";
      fadeIn();
      return false;
    } else if(subject.length < 1){
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter email subject*</div>";
      fadeIn();
      return false;
    } else if(message.length < 1){
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a message*</div>";
      fadeIn();
      return false;
    } else {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-success success_message'>*Please wait sending message*</div>";
      fadeIn();
            $(this).ajaxSubmit({
                error: function(data){
                    console.log(data) 
                    let dati = data.responseText
                    $("#san-button").removeAttr("disabled");
                    document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>"+ dati +"</div>";
                    fadeIn();
                },
                success: function(data){
                   $("#san-button").removeAttr("disabled");
                   if(data.status === "error"){
                       document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>"+ data.message +"</div>";
                        fadeIn();
                   } else {
                        // alertSuccess(data)
                        // jQuery('.confirm-action').fadeOut(()=>{
                        //     jQuery('.success-confirm').fadeIn()
                        // })
                        let dati = data.message
                        console.log(data)
                        document.getElementById('error-msg').innerHTML = "<div class='alert alert-success success_message'>"+ data +"</div>";
                        fadeIn();
                        $('input').val('');
                        
                   }
                }
            })
    }
    
    return false;
})


function fadeIn() {
  var fade = document.getElementById("error-msg");
  var opacity = 0;
  var intervalID = setInterval(function () {
    if (opacity < 1) {
      opacity = opacity + 0.5
      fade.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 200);
}

