const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const popupText = document.getElementById("popupText");

let noClickCount = 0;

// Handle "No" button clicks
noButton.addEventListener("click", () => {
    noClickCount++;

    if (noClickCount === 1) {
        // Show the "Are you sure?" text
        popupText.style.display = "block";
    } else if (noClickCount === 2) {
        // Show an alert
        alert("Are you really sure?");
    } else if (noClickCount === 3) {
        // Hide the "No" button
        noButton.style.display = "none";
    }
});

// Handle "Yes" button click
yesButton.addEventListener("click", () => {
    // Display text
    popupText.textContent = "Yipeeeee!!!!";
    popupText.style.display = "block";
    popupText.style.color = "#4caf50"; // Green color for success message

    // Close the page after 2 seconds
    setTimeout(() => {
        window.close();
    }, 2000);
});
