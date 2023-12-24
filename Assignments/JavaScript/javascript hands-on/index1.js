
let intervalId; // to store the interval ID for clearing later

function startNotification(text) {
    intervalId = setInterval(() => {
        document.title = (document.title === 'Javascript hands-on') ? text : 'Javascript hands-on';
        changeFavicon((document.title === 'Javascript hands-on') ? 'icons8-bell-16.png' : 'icons8-rocket-16.png');
    }, 1000);
}

function endNotification() {
    clearInterval(intervalId);
    document.title = 'Javascript hands-on';
}