
let defualTitle = document.title;
let faviconElement = document.querySelector("link[rel~='icon']");
let defaultFavicon = faviconElement.href;

let bellIconLink = getBellIconLink();

let isInDefaultState = true;
let notifactionInterval;

function startNotification(message) {
    if (notifactionInterval)
        endNotification();

    notifactionInterval = setInterval(() => {
        if (isInDefaultState)
            setToNotifaction(message);
        else
            resetToDefualt();

        isInDefaultState = !isInDefaultState;
    }, 1000);
}

function endNotification() {
    clearInterval(notifactionInterval);
    resetToDefualt();
}

function resetToDefualt() {
    document.title = defualTitle;
    faviconElement.href = defaultFavicon;
}

function setToNotifaction(message) {
    document.title = message;
    faviconElement.href = bellIconLink;
}

function getBellIconLink(){
    const canvas = document.createElement('canvas');
    canvas.widh = 32;
    canvas.height =32;
    const context = canvas.getContext('2D');
    context.font = '32px sans-serif';
    context.fillText('a',0,30);

    return canvas.toDataURL('image/png');
}