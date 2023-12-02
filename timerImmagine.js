let countdown = 5;
let intervalloTimer;

function startTimer() {

    document.getElementById("countdown").value = countdown;

    intervalloTimer = setInterval(function () {
        countdown--;
        document.getElementById("countdown").value = countdown;
        if (countdown = 0) {
            clearInterval(intervalloTimer);
            document.getElementById("countdown").value = ` <div id="immagine">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.logrocket.com%2Fcustom-events-in-javascript-a-complete-guide%2F&psig=AOvVaw3aSzD5QVpJlxyn8cjYOWyI&ust=1701459684616000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICrv7K97IIDFQAAAAAdAAAAABAE"
                alt="">
        </div>`
        }
    }, 1000);
}



