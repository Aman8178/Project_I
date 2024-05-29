document.addEventListener('DOMContentLoaded', () => {
    const countdown = document.getElementById('countdown');
    const complete = document.getElementById('complete');
    const daysSpan = countdown.querySelector('li:nth-child(1) span');
    const hoursSpan = countdown.querySelector('li:nth-child(2) span');
    const minutesSpan = countdown.querySelector('li:nth-child(3) span');
    const secondsSpan = countdown.querySelector('li:nth-child(4) span');
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    function updateCountdown() {
        const eventDate = new Date('2024-06-10T00:00:00');
        const now = new Date();
        const diff = eventDate - now;

        if (diff <= 0) {
            document.body.classList.add('show-complete');
            document.body.classList.remove('show-countdown');
            complete.style.display = 'block';
            countdown.style.display = 'none';
            complete.querySelector('#complete-info').textContent = `Countdown Finished on ${eventDate.toLocaleDateString()}`;
            clearInterval(interval);
        } else {
            document.body.classList.add('show-countdown');
            document.body.classList.remove('show-complete');
            const days = Math.floor(diff / day);
            const hours = Math.floor((diff % day) / hour);
            const minutes = Math.floor((diff % hour) / minute);
            const seconds = Math.floor((diff % minute) / second);

            daysSpan.textContent = String(days).padStart(2, '0');
            hoursSpan.textContent = String(hours).padStart(2, '0');
            minutesSpan.textContent = String(minutes).padStart(2, '0');
            secondsSpan.textContent = String(seconds).padStart(2, '0');
        }
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
