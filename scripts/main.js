// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.scss'

// We can use node_modules directely in the browser!
import * as d3 from 'd3';

const data = [
	{
		id: 1,
		name: 'ROBERT',
		kaas: false,
		coords: {
			lat: "52.3676",
			long: "4.9041"
		}
	},
	{
		id: "2",
		name: 'viNcent',
		kaas: "true",
		coords: {
			lat: "52.3676",
			long: "4.9041"
		}
	},
	{
		id: 3,
		name: 'laura',
		kaas: true,
		coords: {
			lat: "52.3676",
			long: "4.9041"
		}
	},
]

data.forEach(item => {
// normalize capitals in names
item.name = item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase();

// convert id to number
item.id = parseInt(item.id, 10);
  
// convert kaas to string
item.kaas = item.kaas.toString();
  
// fix coords
delete item.coords;
});


/*
   4) "coords" is an object. If you try and print this, you'll get [object Object] or something.
   We'll have to loop over the object and print a custom string using template literals.
*/

function generateTable() {
	let table = document.querySelector('table');
	let theading = document.querySelector('thead tr');
	let tbody = document.querySelector('tbody');
  
  Object.keys(data[0]).forEach(key => {
		let newElement = document.createElement('th');
		newElement.textContent = key;
		theading.appendChild(newElement);
	})

	data.forEach(obj => {
		let tr = document.createElement('tr');
		tbody.appendChild(tr);

		for (const [key, value] of Object.entries(obj)) {
			let td = document.createElement('td');
			td.textContent = value;
			tr.appendChild(td);
  		}
	})
}

generateTable()