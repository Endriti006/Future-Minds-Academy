console.log("Hello World1");

let defaultNotifaction=[
    "New message",
    "Last week's report",
    "Abrakadabra",
    "Hello, World Notifaction",
    "Jane Doe wants to connect",
    "Jane Doe wants to connect"
];

localStorage.setItem("notifcation",JSON.stringify(defaultNotifaction));

document.addEventListener("DOMContentLoaded", function() {
    // Retrieve data from local storage
    const notificationData = localStorage.getItem("notifcation");

    // Check if data exists in local storage
    if (notificationData) {
        const notifications = JSON.parse(notificationData);

        // Update notification count
        const notificationCount = notifications.length;
        document.getElementById('notification-count').innerText = notificationCount;

        // Get the notification box element
        const notificationBox = document.querySelector('.notification-box');

        // Iterate through notifications and add them to the notification box
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

