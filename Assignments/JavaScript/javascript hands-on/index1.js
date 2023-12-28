let intervalId;
let isBellIcon = true;
const faviconElement = document.getElementById('favicon');

function startNotification(text) {
    intervalId = setInterval(() => {
        isBellIcon = !isBellIcon; 
        faviconElement.href = isBellIcon ? 'icons8-bell-16.png' : 'icons8-rocket-16.png';
        document.title = (document.title === 'Javascript hands-on') ? text : 'Javascript hands-on';
    }, 1000);
}

function endNotification() {
    clearInterval(intervalId);
    document.title = 'Javascript hands-on';
    faviconElement.href = 'icons8-bell-16.png';
}
