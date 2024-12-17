const form = document.getElementById('story-form');
const storyOutput = document.getElementById('story-output');
const storyText = document.getElementById('story-text');
const loading = document.getElementById('loading');

// Array of 50 Christmas Stories
const stories = [
    "On Christmas Eve, {name} heard jingle bells outside. {character} and {pet} were waiting with Santa's sleigh!",
    "{name} and {pet} discovered a hidden gift left by {character}. It glowed with Christmas magic!",
    "A snowstorm trapped {name} and {character} in a cabin. With {pet}'s help, they built the coziest Christmas celebration ever.",
    "Santa sent a special letter to {name}. {character} and {pet} delivered it on a magical sleigh ride.",
    "At midnight, {name} followed {character} into a snowy forest. Together, they found the lost Star of Christmas.",
    // Add more variations here
];

// Function to generate a random story
function getRandomStory(name, character, pet) {
    const randomIndex = Math.floor(Math.random() * stories.length);
    let story = stories[randomIndex];
    return story.replace("{name}", name).replace("{character}", character).replace("{pet}", pet);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Show loading message
    loading.classList.remove('hidden');
    storyOutput.classList.add('hidden');

    const name = document.getElementById('name').value;
    const character = document.getElementById('character').value;
    const pet = document.getElementById('pet').value;

    setTimeout(() => {
        // Hide loading and display story
        loading.classList.add('hidden');
        storyOutput.classList.remove('hidden');

        // Generate and display story
        const story = getRandomStory(name, character, pet);
        storyText.textContent = story;
    }, 2000);
});
