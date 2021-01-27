let heros = [
	"Quincy",
	"Gwen",
	"Striker Jones",
	"Obyn",
	"Etienne",
	"Churchill",
	"Benjamin",
	"Ezili",
	"Pat Futsy",
	"Adora",
	"Brickwell",
]

module.exports.run = async (bot, message, args) => {
	let times = parseInt(args[0] ? args[0] : 1)
	if (times > heros.length) return message.channel.createMessage("You are asking for more heros than there are.")
	let pickedHeros = []
	let listedHeros = []
	let a = 0
	while (a != times){
		let hero = heros[Math.floor(Math.random()*heros.length)]
		if (listedHeros.includes(hero)) {
			
		}else {
			listedHeros.push(hero)
			pickedHeros.push(`\`${hero}\` has been chosen`)
			a ++
		}
	}
	message.channel.createMessage(pickedHeros.join('\n'))
}

module.exports.info = {
    name: "heros",
    description: "Roll for a random hero",
    category: "Game",
}