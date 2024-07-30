// script.js

// Select all feature items
const featureItems = document.querySelectorAll('.feature ul li');

// Add click event listener to each item
featureItems.forEach(item => {
    item.addEventListener('click', function() {
        alert(`You selected: ${this.textContent}`);
    });
});
