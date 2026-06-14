// Character Object
const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 1,
    health: 100,
    image: "images/snortleblat.png",

    attackBtn: function () {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            alert(`${this.name} has died!`);
        }

        renderCharacter();
    },

    levelUp: function () {
        this.level++;
        renderCharacter();
    }
};

// Display Character Information
function renderCharacter() {
    document.querySelector("#characterName").textContent = character.name;
    document.querySelector("#characterClass").textContent = character.class;
    document.querySelector("#characterLevel").textContent = character.level;
    document.querySelector("#characterHealth").textContent = character.health;

    document.querySelector("#characterImage").src = character.image;
    document.querySelector("#characterImage").alt = character.name;
}

// Initial Render
renderCharacter();

// Event Listeners
document.querySelector("#attackBtn").addEventListener("click", function () {
    character.attackBtn();
});

document.querySelector("#levelBtn").addEventListener("click", function () {
    character.levelUp();
});