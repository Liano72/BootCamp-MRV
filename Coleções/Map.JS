const addAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'Engenheiro') {
			admins.push(key);
		}
	}

	return admins;
};

const myMap = new Map();

myMap.set('Lucas','Engenheiro');
myMap.set('Fernando','Segurança');
myMap.set('Vitoria','Arquiteta');

console.log(addAdmins(myMap));
