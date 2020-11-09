const charactersURL = "https://robertoscioni.github.io/FCM/character.json"
let characters
const initializeEnvironement = () => {
	fetch(charactersURL)
		.then((chars) => chars.json())
		.then((usefuldata) => {
			console.log("usefuldata", usefuldata)
			characters = usefuldata
		})
}

const printSheet = (character) => {
	/*this function will return a DOM object containing a complete character sheet*/
	const char = document.querySelector(".character-template").cloneNode
	char.classlist.remove(".character-template")
	char.querySelector("name") = character.name
	return char
}
