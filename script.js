const setupEl = document.querySelector('#setup');
const punchlineEl = document.querySelector('#punchline');

async function fetchData(url) {
    try {
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            return data; 
        } else {
            console.error(`Error: ${res.status} - ${res.statusText}`);
            return null; 
        }
    } catch (error) {
        console.error("Network error:", error);
        return null;
    }
}

async function main() {
    const url = "https://official-joke-api.appspot.com/random_joke/";
    const joke = await fetchData(url);
    if (joke) {
        setupEl.innerText = joke.setup;
        punchlineEl.innerText = joke.punchline;
    } else {
        setupEl.innerText = "Failed to fetch joke";
    }
}

