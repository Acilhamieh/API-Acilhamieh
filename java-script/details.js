const queryParams = new URLSearchParams(window.location.search);
const itemId = queryParams.get("id");

if (itemId) {
    const detailsContainer = document.getElementById("details-container");

    fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(item => {
            detailsContainer.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.body}</p>
                <p><strong>User ID:</strong> ${item.userId}</p>
            `;
        })
        .catch(error => {
            detailsContainer.innerHTML = `<p>Error loading details. Please try again later.</p>`;
            console.error("Error fetching details:", error);
        });
} else {
    console.error("No item ID provided in the URL.");
}
