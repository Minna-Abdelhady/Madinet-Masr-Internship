// script.js

// JavaScript to include the header
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        // Add event listener to the button for redirection
        document.getElementById('home-button').onclick = function() {
            window.location.href = '../Pages/index.html'; // Replace 'index.html' with your target page
        };
        document.getElementById('compare-button').onclick = function() {
            window.location.href = '../Pages/Compare.html'; // Replace 'compare.html' with your target page
        };
        
    })
    .catch(error => console.log('Error loading header:', error));
