let title = document.title.innerHTML;

function startNotification(text) {
    setInterval(()=>{
        document.title.innerHTML = text;
    }, 1000)
}

function endNotification(text) {

}