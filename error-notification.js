var original = Meteor._debug;

if (window.Notification && !Notify.needsPermission) {
    Meteor._debug = function (err, stack) {
        var myNotification = new Notify(err, {
            body: stack,
            icon: '/packages/cannap_error-notification/img/meteor.png'
        });
        myNotification.show();
        return original(err,stack);


    }



} else if (Notify.isSupported()) {
    Notify.requestPermission();
}
