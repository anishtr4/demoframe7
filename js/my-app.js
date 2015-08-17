var myApp = new Framework7({
    animateNavBackIcon: true
});
var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true,
    domCache: true
});
$$('.ac-5').on('click', function() {
    var buttons = [{
        text: 'Button1',
        onClick: function() {
            myApp.alert('Button1 clicked');
        }
    }, {
        text: 'Button2',
        onClick: function() {
            myApp.alert('Button2 clicked');
        }
    }, {
        text: 'Cancel',
        color: 'red',
        onClick: function() {
            myApp.alert('Cancel clicked');
        }
    }, ];
    myApp.actions(buttons);
});