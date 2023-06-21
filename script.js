// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()
// Form DOM elements
const formQuote = document.getElementById("poster-form-quote");
const formTitle = document.getElementById("poster-form-title");
const formImage = document.getElementById("poster-form-image");
const randomButton = document.getElementById("randomize");
const submitButton = document.getElementById("submit");

// Poster DOM elements
const posterImage = document.getElementById("poster-image");
const posterTitle = document.getElementById("poster-title");
const posterQuote = document.getElementById("poster-quote");

// Array of predefined poster objects
const presetPosters = [
    {
        image: "https://images.unsplash.com/photo-1529310399831-ed472b81d589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        title: "Thomas Edison",
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    },
    {
        image: "https://images.unsplash.com/photo-1592505690387-24e71ca99897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
        title: "Vito Corleone",
        quote: "I'm gonna make him an offer he can't refuse.",
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Benjamin_West%2C_English_%28born_America%29_-_Benjamin_Franklin_Drawing_Electricity_from_the_Sky_-_Google_Art_Project.jpg/671px-Benjamin_West%2C_English_%28born_America%29_-_Benjamin_Franklin_Drawing_Electricity_from_the_Sky_-_Google_Art_Project.jpg",
        title: "Benjamin Franklin",
        quote: "Nothing is certain except for death and taxes.",
    },
    {
        image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        title: "Rene Descartes",
        quote: "I think therefore I am.",
    },
    {
        image: "https://images.unsplash.com/photo-1542397284385-6010376c5337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        title: "Terminator",
        quote: "I'll be back.",
    },
    {
        image: "https://www.indiewire.com/wp-content/uploads/2019/05/Screen-Shot-2019-05-30-at-3.50.42-PM.png?w=1846&h=1310&crop=1",
        title: "Borat",
        quote: "I go to America!",
    },
    // Add more poster objects as needed
];

// Event listener for randomize button
// TODO: Add an event listener to the randomizeButton that calls a function when clicked
randomButton.addEventListener("click", generateRandomPoster);

// Event listener for submit button
// TODO: Add an event listener to the submitButton that calls a function when clicked
submitButton.addEventListener("click", generateCustomPoster);

// Function to generate a random poster
function generateRandomPoster(event) {
    event.preventDefault();
    // TODO: Generate a random index within the range of the posters array length
    // TODO: Retrieve the random poster object from the posters array
    // TODO: Call the function to update the DOM with the values from the random poster object
    const randomIndex = Math.floor(Math.random() * presetPosters.length);
    const randomPoster = presetPosters[randomIndex];

    const { image, title, quote } = randomPoster;

    updatePoster(image, title, quote);

    console.log("Pressed");
}

// Function to generate a custom poster
function generateCustomPoster(event) {
    event.preventDefault();

    // TODO: Retrieve the entered quote and author from the input fields
    const inputQuote = formQuote.value;
    const inputTitle = formTitle.value;
    let inputImage = formImage.value;

    let inputImageValue = inputImage.trim();

    // Check if user submitted an image, if not then choose a random image
    if (inputImageValue === "") {
        const randomIndex = Math.floor(Math.random() * presetPosters.length);
        const randomPoster = presetPosters[randomIndex];

        inputImage = randomPoster.image;
    }

    // TODO: Create a custom poster object with the entered values
    newPoster = {
        image: inputImage,
        title: inputTitle,
        quote: inputQuote,
    };

    // TODO: Call the function to update the DOM with the values from the custom poster object
    updatePoster(newPoster.image, newPoster.title, newPoster.quote);
}

// Function to update the poster content in the DOM
function updatePoster(imageUrl, title, quote) {
    // TODO: Update the DOM with the values provided for the poster image, title, and quote
    posterImage.setAttribute("src", imageUrl);
    posterTitle.textContent = title;
    posterQuote.textContent = quote;
}
