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

      newArray.length = 8;

      const upper = newArray.map((element) => {
        return element.charAt(0).toUpperCase() + element.slice(1);
      });

      let options = [upper];

      function makeUL(array) {
        // Create the list element:
        let list = document.createElement('ul');

        for (var i = 0; i < array.length; i++) {
          // Create the list item:
          let item = document.createElement('li');

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
