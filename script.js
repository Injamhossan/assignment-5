
let totalLoved = 0;
let totalCopied = 0;

// Navbar spans
const loveCountSpan = document.querySelector('.love-count');
const copyCountSpan = document.querySelector('.copy-count');

// Get current time
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')} ${ampm}`;
}

// Add call to history
