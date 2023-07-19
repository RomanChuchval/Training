function formatTime (seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");
    const paddedSeconds = remainingSeconds.toString().padStart(2, "0");

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

console.log(formatTime(0));       // Output: "00:00:00"
console.log(formatTime(60));      // Output: "00:01:00"
console.log(formatTime(3661));    // Output: "01:01:01"
console.log(formatTime(86399));   // Output: "23:59:59"
console.log(formatTime(359999));  // Output: "99:59:59"