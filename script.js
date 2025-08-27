let totalLoved = 0;
let totalCopied = 0;

// Navbar Love
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
function addCallToHistory(title, number) {
    const historyList = document.querySelector('.history-list');
    const callItem = document.createElement('div');
    callItem.classList.add('flex', 'justify-between', 'text-sm', 'text-gray-600');
    callItem.innerHTML = `<span>${title} (${number})</span><span>${getCurrentTime()}</span>`;
    historyList.prepend(callItem);
}

// Love button
document.querySelectorAll('.love-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const icon = btn.querySelector('.love-icon');
        if(icon.classList.contains('fa-regular')){
            icon.classList.remove('fa-regular','text-gray-500');
            icon.classList.add('fa-solid','text-red-500');
            totalLoved++;
        } else {
            icon.classList.remove('fa-solid','text-red-500');
            icon.classList.add('fa-regular','text-gray-500');
            totalLoved--;
        }
        loveCountSpan.innerText = totalLoved;
    });
});

// Copy button
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.emergency-card');
        const number = card.querySelector('.emergency-number').innerText;
        navigator.clipboard.writeText(number).then(() => {
            totalCopied++;
            copyCountSpan.innerText = totalCopied;
            alert(`Copied ${number} to clipboard!`);
        });
    });
});


// Coin count
const coinCountEl = document.getElementById('coin-count');
let coinCount = coinCountEl ? parseInt(coinCountEl.textContent) : 0;

// Call button
document.querySelectorAll('.call-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.emergency-card');
    const title = card.querySelector('.emergency-title').innerText;
    const number = card.querySelector('.emergency-number').innerText;
    
    // Deduct coin if coin element exists
    if(coinCountEl){
      if(coinCount >= 20){
        coinCount -= 20;
        coinCountEl.textContent = coinCount;
      } else {
        alert('Insufficient coins! Please recharge.');
        return; // Stop further execution
      }
    }
    
    // Add call to history
    addCallToHistory(title, number);
    
    // Show call alert
    alert(`Calling ${title} (${number})...`);
  });
});
