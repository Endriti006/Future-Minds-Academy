

let intervalId;

function startNotification(text) {
    intervalId = setInterval(() => {
        document.title = (document.title === 'Javascript hands-on') ? text : 'Javascript hands-on';
    }, 1000);
}

function endNotification() {
    clearInterval(intervalId);
    document.title = 'Javascript hands-on';
}