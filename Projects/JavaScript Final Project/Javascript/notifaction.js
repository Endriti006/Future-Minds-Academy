let defaultNotifaction = [
    "New message",
    "Last week's report",
    "Abrakadabra",
    "Hello, World Notifaction",
    "Jane Doe wants to connect",
    "Jane Doe wants to connect"
];

localStorage.setItem("notifcation", JSON.stringify(defaultNotifaction));

document.addEventListener("DOMContentLoaded", function () {


    const notificationData = localStorage.getItem("notifcation");





    if (notificationData) {
        const notifications = JSON.parse(notificationData);

        const notificationCount = notifications.length;
        document.getElementById('notification-count').innerText = notificationCount;



        const notificationBox = document.querySelector('.notification-box');

        

      

        notifications.forEach(notification => {
            const li = document.createElement('li');
            li.textContent = notification;
            notificationBox.appendChild(li);
        });
    }
});



document.addEventListener('DOMContentLoaded', function () {
    var notificationContainer = document.getElementById('notification');
    var notificationBox = notificationContainer.querySelector('.notification-box');


    notificationContainer.addEventListener('click', function () {
        notificationBox.style.visibility = (notificationBox.style.visibility === 'visible') ? 'hidden' : 'visible';
    });

    document.addEventListener('click', function (event) {
        if (!notificationContainer.contains(event.target)) {
            notificationBox.style.visibility = 'hidden';
        }
    });
});

