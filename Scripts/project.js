// project.js

// Function to fetch and parse the CSV file
function fetchCSV() {
    fetch('../data/data.csv')  // Adjust the path to your CSV file as necessary
        .then(response => response.text())
        .then(data => {
            const parsedData = parseCSV(data);
            displayData(parsedData);
        })
        .catch(error => console.error('Error fetching CSV file:', error));
}

// Function to parse the CSV data
function parseCSV(data) {
    const lines = data.split('\n');
    const headers = lines[0].split(',');
    const rows = lines.slice(1).map(line => line.split(','));
    return { headers, rows };
}

// Function to display the data
function displayData({ headers, rows }) {
    const container = document.getElementById('projects-container');
    rows.forEach(row => {
        const projectName = row[0];
        const imageUrl = row[1];

        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        const button = document.createElement('button');
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = projectName;
        button.appendChild(img);

        const h2 = document.createElement('h2');
        h2.textContent = projectName;

        button.appendChild(h2);
        projectDiv.appendChild(button);
        container.appendChild(projectDiv);
    });
}

// Fetch and display the CSV data on page load
document.addEventListener('DOMContentLoaded', fetchCSV);
