// Object Literals with Methods
//Functions inside of an Object
var player = {
	//Properties
	name: "",
	life: 100,
	damage: 50,

	//Methods
	challenge: function() {
		console.log(this.name + " says, 'Would any one care to fight?'");
	},
	response: function() {
		console.log(this.name + " says, 'Yes, I would like to fight!'");
	},
	attack: function(target) {
		console.log(this.name + " throws the fist at " + target.name + " and does " + this.damage + " damage!");
	}
}

var melkor = Object.create(player);
melkor.name = "Melkor";

var miley = Object.create(player);
miley.name = "Miley";

// console.log(melkor.name);
// console.log(miley.name);

//Access Methods
melkor.challenge();
miley.response();

melkor.attack(miley);



