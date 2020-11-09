const charactersURL = "https://robertoscioni.github.io/FCM/character.json"
let characters
const initializeEnvironement = () => {
	fetch(charactersURL)
		.then((chars) => chars.json())
		.then((usefuldata) => {
			console.log("usefuldata", usefuldata)
			characters = usefuldata
			const deck = document.querySelector("#DECK")
			deck.appendChild(printSheet(usefuldata[0]))
		})
}

const printSheet = (character) => {
	/*this function will return a DOM object containing a complete character sheet*/
	const char = document.querySelector(".character-template").cloneNode(true)
	char.classList.remove("character-template")
	char.querySelector(".name").innerText = character.name
	character.aspects.forEach((Aspect) => {
		let aspect = document.createElement("li")
		aspect.classList.add("list-group-item", "p-0")
		aspect.innerText = Aspect
		char.querySelector(".aspects").appendChild(aspect)
	})
	return char
}
