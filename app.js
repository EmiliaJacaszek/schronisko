$(document).ready(function () {
  console.log('app.js loaded');

  const $navbar = $('.fixed-top');

  $(window).on('scroll', () => {
    if (window.pageYOffset > 0) {
      $navbar.addClass('navbar-scroll');
    } else {
      $navbar.removeClass('navbar-scroll');
    }
  });


  const email = $('#email');
  const subject = $('#subject');
  const message = $('#message');
  const submitBtn = $('.submit');

  let form = {
    email: false,
    subject: false,
    message: false
  }

   email.on('keyup', function (evt) {
     if (evt.target.value.length > 0) {
       form.email = true;
     }
     else {
         form.email = false;
     }
   });

   subject.on('keyup', function (evt) {
     if (evt.target.value.length > 0) {
       form.subject = true;
     }
   else {
           form.subject = false;
    }
   });

   message.on('keyup', function (evt) {
     if (evt.target.value.length > 0) {
      form.message = true;
     }
      else {
     form.message = false;
   }
      {
         submitBtn.attr('disabled', false);
     }
   });


    $('.flashMessage').hide();
    $('.submit').click(function(){
      console.log($('.flashMessage'));
    $('.flashMessage').html('Twoja wiadomość została wysłana').fadeIn('slow').fadeToggle(5000);


});

 });
