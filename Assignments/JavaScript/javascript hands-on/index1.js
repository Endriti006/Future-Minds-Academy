
let intervalId; // to store the interval ID for clearing later

function startNotification(text) {
    // Clear any existing notification
    endNotification();

    // Set interval to change notification every 1 second
    intervalId = setInterval(() => {
        document.title = (document.title === 'Javascript hands-on') ? text : 'Javascript hands-on';
        changeFavicon((document.title === 'Javascript hands-on') ? 'icons8-rcoket-16.png' : 'bell-icon.png');
    }, 1000);
}

function endNotification() {
    clearInterval(intervalId);
    document.title = 'Javascript hands-on';
}