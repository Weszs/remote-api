// ===============================
// FETCH COUNTRIES DATA
// ===============================
async function fetchCountriesData() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/region/europe");

        if (!response.ok) {
            console.log(`Network response was not ok - Status: ${response.status}`);
            return;
        }

        const data = await response.json();
        displayCountriesData(data);

    } catch (error) {
        const container = document.getElementById("remote-data-container");
        container.innerHTML =
            '<p class="error">⚠️ Failed to load countries. Please try again later.</p>';
        console.error(`Error fetching countries: ${error}`);
    }
}


// ===============================
// DISPLAY COUNTRIES DATA
// ===============================
function displayCountriesData(countriesArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";

    countriesArray.forEach(country => {
        htmlOutput += `
            <div style="border: 1px solid #ddd; padding: 15px; border-radius: 5px; background-color: white;">
                <img src="${country.flags.png}" 
                     alt="Flag of ${country.name.common}" 
                     style="width: 100%; max-width: 150px; margin-bottom: 10px;">
                <p>
                    <b>${country.name.common}</b><br>
                    Capital: ${country.capital ? country.capital[0] : "N/A"}<br>
                    Population: ${country.population.toLocaleString()}<br>
                    Region: ${country.region}
                </p>
            </div>
        `;
    });

    container.innerHTML = htmlOutput;
}


// ===============================
// FETCH USERS DATA
// ===============================
async function fetchUsersData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            console.log(`Network response was not ok - Status: ${response.status}`);
            return;
        }

        const data = await response.json();
        console.log(data);
        displayUsersData(data); // FIXED: Changed from data.results to data

    } catch (error) {
        const container = document.getElementById("remote-data-container");
        container.innerHTML =
            '<p class="error">⚠️ Failed to load users. Please try again later.</p>';
        console.error(`Error fetching users: ${error}`);
    }
}


// ===============================
// DISPLAY USERS DATA
// ===============================
function displayUsersData(usersArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";

    usersArray.forEach((user, index) => {
        htmlOutput += `
            <div style="border: 1px solid #ddd; padding: 15px; border-radius: 5px; background-color: white;">
                <img src="https://i.pravatar.cc/150?img=${index + 1}" 
                     alt="${user.name}" 
                     style="width: 100%; max-width: 120px; border-radius: 50%; margin-bottom: 10px;">
                <p>
                    <b>${user.name}</b> (${user.username})<br>
                    Email: <a href="mailto:${user.email}">${user.email}</a><br>
                    Website: <a href="http://${user.website}" target="_blank">${user.website}</a><br>
                    Location: ${user.address.street}, ${user.address.city}
                </p>
            </div>
        `;
    });

    container.innerHTML = htmlOutput;
}

// ===============================
// FETCH RICK AND MORTY DATA
// ===============================
async function fetchRMData() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");

        if (!response.ok) {
            console.log(`Network response was not ok - Status: ${response.status}`);
            return;
        }

        const data = await response.json();
        displayRMData(data.results); // The API returns { results: [...] }

    } catch (error) {
        const container = document.getElementById("remote-data-container");
        container.innerHTML =
            '<p class="error">⚠️ Failed to load characters. Please try again later.</p>';
        console.error(`Error fetching characters: ${error}`);
    }
}

// ===============================
// DISPLAY RICK AND MORTY DATA
// ===============================
function displayRMData(charactersArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";
    
    charactersArray.forEach(character => {
        htmlOutput += `
            <div style="border: 1px solid #ddd; padding: 15px; border-radius: 5px; background-color: white;">
                <img src="${character.image}" alt="${character.name}" style="width: 100%; max-width: 150px; margin-bottom: 10px;">
                <p>
                    <b>${character.name}</b><br>
                    Status: ${character.status}<br>
                    Species: ${character.species}<br>
                    Gender: ${character.gender}<br>
                    Origin: ${character.origin.name}
                </p>
            </div>
        `;
    });
    
    container.innerHTML = htmlOutput;
}


// ===============================
// EVENT LISTENER (ONLY ONE)
// ===============================
document.getElementById("button-container").addEventListener("click", function(e) {

    if (e.target.id === "btn-countries") {
        fetchCountriesData();
    } else if (e.target.id === "btn-users") {
        fetchUsersData();
    } else if (e.target.id === "btn-rm") { // FIXED: Changed to match your HTML button id
        fetchRMData();
    }

});