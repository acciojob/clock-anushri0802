//your JS code here. If required.
function updateTimer() {
      const now = new Date();  // Get the current date and time
      const dateString = now.toLocaleString();  // Format the date and time to a readable format
      document.getElementById('timer').innerText = dateString;  // Update the timer element with the new time
    }

    // Call the updateTimer function every second (1000 milliseconds)
    setInterval(updateTimer, 1000);

    // Initial call to display the current date and time when the page loads
    updateTimer();