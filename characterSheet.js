const characters="https://robertoscioni.github.io/FCM/character.json"

const printSheet=()=>{
    /*this function will return a DOM object containing a complete character sheet*/
    fetch(./character.json).then((characters)=>console.log(characters))
}

