// script.js

// Initialize the clock and update every second
function updateClock() {
    const clockElement = document.getElementById('clock');
    
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    // Update the time for other time zones
    updateTimeZone('Europe/London', 'london-time');
    updateTimeZone('Asia/Tokyo', 'tokyo-time');
  }
  
  // Update the time zone clock
  function updateTimeZone(timeZone, elementId) {
    const timeElement = document.getElementById(elementId);
    
    const timeInZone = new Date().toLocaleString("en-US", { timeZone: timeZone });
    const hours = new Date(timeInZone).getHours();
    const minutes = new Date(timeInZone).getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
    timeElement.textContent = `${elementId.split('-')[0]}: ${formattedTime}`;
  }
  
  // Function for changing background color
  function changeBackground() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    document.getElementById('title').style.color = randomColor;
    document.getElementById('change-button').style.backgroundColor = randomColor;
    
    // Confetti animation on background change
    confettiAnimation();
  }
  
  // Generate random color for background change
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Confetti animation effect
  function confettiAnimation() {
    confetti({
      particleCount: 200,
      spread: 160,
      origin: { x: 0.5, y: 0.5 }
    });
  }
  
  // Set interval to update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize clock
  updateClock();
  changeBackground();
  setInterval(changeBackground, 5000); // Change background every 5 seconds
  