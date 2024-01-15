const keyDisplay = document.getElementById('key-display');
const keycodeDisplay = document.getElementById('keycode-display');

document.addEventListener('keydown', (event) => {
    // Update key display
    keyDisplay.textContent = `Pressed Key: ${event.key}`;

    // Update keycode display
    keycodeDisplay.textContent = `Keycode: ${event.keyCode}`;

    // Extra: Log key history
    logKeyHistory(event);
});

// Extra: Handle key combinations
const keyHistory = [];

function logKeyHistory(event) {
    const keyHistoryItem = {
        key: event.key,
        code: event.code,
        keyCode: event.keyCode,
        timestamp: new Date().toLocaleTimeString(),
    };

    keyHistory.push(keyHistoryItem);

    // Display key history (optional)
    console.clear(); // Clear console for better visibility
    console.table(keyHistory);
}
