function updateTime() {
    const timeElement = document.getElementById('currentTime');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 1000); // Update time every second

function convert() {
    const degrees = parseFloat(document.getElementById('degrees').value);
    const type = document.getElementById('type').value;
    let result = 0;

    if (isNaN(degrees)) {
        alert('Please enter a valid temperature');
        return;
    }

    if (type === 'fahrenheit') {
        // Fahrenheit to Celsius
        result = (degrees - 32) * 5 / 9;
        document.getElementById('result').value = result.toFixed(4) + ' °C';
    } else {
        // Celsius to Fahrenheit
        result = (degrees * 9 / 5) + 32;
        document.getElementById('result').value = result.toFixed(4) + ' °F';
    }
}
