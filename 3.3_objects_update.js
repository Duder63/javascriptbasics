//a property value in the object can be replaced

var dude = {
 firstName: "Gary",
 lastName: "Shew"
};

dude['firstName'] = 'Gartholemule';

//console.log(dude['firstName'] = 'Gartholemule');
console.log(dude.firstName + " " + dude.lastName);


//if object does not have that property, the object is augmented

var chick = {
 firstName: "Eileen",
 lastName: "Shew"
};

chick['nickName'] = 'Sweeti';
chick.maidenName = 'Raflik';

console.log(chick.nickName + " " + chick.maidenName);
