//Ensures that the JavaScript code runs only after the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const dataContainer = document.getElementById("data-container");
    
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const div = document.createElement("div");
                div.className = "data-item";
                div.innerHTML = `
                    <h2>${item.title}</h2>
                    <p>${item.body}</p>
                    <button onclick="viewDetails(${item.id})">View Details</button>
                `;
                dataContainer.appendChild(div);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});

function viewDetails(id) {
    // Redirect or pass data to the Detailed Information Page
    window.location.href = `index2.html?id=${id}`;
}
