var myApp = new Framework7({
    animateNavBackIcon: true
});
var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: false,
    domCache: true
});
$$('.ac-5').on('click', function() {
     // Check first, if we already have opened picker
  if ($$('.picker-modal.modal-in').length > 0) {
    myApp.closeModal('.picker-modal.modal-in');
  }
    myApp.pickerModal('.picker-info')
  
});