//require stuff here

var player = require('./player.js');
var monster = require('./monster.js');

// player.name = "Paul";
// player.life = 120;
// console.log(player.name);
// player.challenge();

// player.name = "Julie";
// console.log(player.name);
// console.log(player.life);

var paul = player();
paul.name = "Paul";
console.log(paul.name);

var julie = player();
julie.name = "Julie";
console.log(julie.name);

var gary = monster();
gary.name = "Dude";
console.log(gary.name);
gary.makeNoise();
