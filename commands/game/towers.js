let towers = [
	"Dart",
	"Boomerang",
	"Bomb",
	"Tack",
	"Ice",
	"Glue",
	"Sniper",
	"Sub",
	"Boat",
	"Ace",
	"Heli",
	"Mortar",
	"Gunner",
	"Wizard",
	"Super",
	"Ninja",
	"Alchemist",
	"Druid",
	"Banana farm",
	"Spike factory",
	"Village",
	"Engineer"
]

let paths = [
	"5-2-0",
	"5-0-2",
	"5-1-0",
	"5-0-1",
	"5-0-0",
	"2-5-0",
	"0-5-2",
	"1-5-0",
	"0-5-1",
	"0-5-0",
	"2-5-0",
	"0-2-5",
	"1-0-5",
	"0-1-5",
	"0-0-5",
	"4-2-0",
	"4-0-2",
	"4-1-0",
	"4-0-1",
	"4-0-0",
	"2-4-0",
	"0-4-2",
	"1-4-0",
	"0-4-1",
	"0-4-0",
	"2-0-4",
	"0-2-4",
	"1-0-4",
	"0-1-4",
	"0-0-4",
	"3-2-0",
	"3-0-2",
	"3-1-0",
	"3-0-1",
	"3-0-0",
	"2-3-0",
	"0-3-2",
	"1-3-0",
	"0-3-1",
	"0-3-0",
	"2-0-3",
	"0-2-3",
	"1-0-3",
	"0-1-3",
	"0-0-3",
	"2-2-0",
	"2-0-2",
	"2-1-0",
	"2-0-1",
	"0-0-2",
	"0-2-2",
	"1-2-0",
	"2-1-0",
	"0-2-0",
	"1-0-2",
	"0-1-2",
	"0-0-2",
	"1-1-0",
	"1-0-1",
	"1-0-0",
	"0-1-1",
	"0-1-0",
	"0-0-1",
	"0-0-0"
]

module.exports.run = async (bot, message, args) => {
	let times = parseInt(args[0] ? args[0] : 1)
	if (times > towers.length) return message.channel.createMessage("You are asking for more towers than there are.")
	towerAndPath = []
	let a = 0
	pickedTowers = []
	while (a != times){
		let tower = towers[Math.floor(Math.random()*towers.length)]
		if (pickedTowers.includes(tower)) {
			
		}else {
			let path = paths[Math.floor(Math.random()*paths.length)]
			towerAndPath.push(`Tower \`${tower}\` was picked with path \`${path}\``)
			pickedTowers.push(tower)
			a ++
		}
	}
	message.channel.createMessage(towerAndPath.join('\n'))
}

module.exports.info = {
    name: "towers",
	description: "Roll for a random tower",
	usage:"(number)",
    category: "Game",
}