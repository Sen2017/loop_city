//i can count
for (var count = 0; count <= 100; count++){
  console.log(count + " huskies");
}

//Noah's Passenger Manifest
for (var animalCount = 0; animalCount <= 5; animalCount ++){
  console.log("There are " + animalCount + " many animals in Noah's Ark");
}

//Hip Hop Array
var partyAnimals = ["bunny", "fox", "buffalo", "polar bears", "rodent"];

for (i = 0; i <= 4; i++){
  console.log(partyAnimals[i]);
}

//Merlin's battle weapon
var weaponChest = ["Mace", "Sorcerererer's Stone", "Excalibur"];
var hero = {
	wizard: "Merlin",
	weapon: weaponChest[1],
	power: 30
}

function merlinWeapon(a){
	if (a == "Sorcerererer's Stone"){
		console.log(hero.wizard + " shall slay the dragon with the " + a.weapon + ".");
	}else{
		hero.weapon = weaponChest[1];
		console.log(hero.wizard + " is ready for war with the " + a.weapon);
	}
}
merlinWeapon(hero)