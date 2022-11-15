// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.scss';
import '../scripts/map.js';

// We can use node_modules directely in the browser!
// import * as d3 from 'd3';

// const client_id = 'b59b4b9f65884c448551b2e5a47bd79b';
// const redirect_uri = 'http://localhost:5173/';

function getData() {
  console.log('Grabbing new userdata...');

  fetch(
    'https://opensheet.elk.sh/10V0lGVvZzTSVAFejQCgTVT5kJaWmmGgNTTiAyTcSswA/dummy'
  )
    .then((res) => res.json())
    .then((data) => {
      let newArray = [];

      data.forEach((item) => {
        newArray.push(item['artist']);
      });

      const upper = newArray.map((element) => {
        return element.charAt(0).toUpperCase() + element.slice(1);
      });

      var options = [upper];

      function makeUL(array) {
        // Create the list element:
        var list = document.createElement('ul');

        for (var i = 0; i < array.length; i++) {
          // Create the list item:
          var item = document.createElement('li');

          // Set its contents:
          item.appendChild(document.createTextNode(array[i]));

          // Add it to the list:
          list.appendChild(item);
        }

        // Finally, return the constructed list:
        return list;
      }

      document.getElementById('artists').appendChild(makeUL(options[0]));
    });
}

getData();
