let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭",
 "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

    let randomEmojiOne = Math.floor(Math.random() * fighters.length) /* instead we'll use .length 17*/
    let randomEmojiTwo = Math.floor(Math.random() * fighters.length) /*duplicate cuz we want 2 random emojis*/

    /*console.log*/ stageEl.textContent = (fighters[randomEmojiOne] + " vs " + fighters[randomEmojiTwo])
})
