import * as d3 from 'd3';

function getData() {
  console.log('Grabbing new userdata...');

  fetch(
    'https://opensheet.elk.sh/10V0lGVvZzTSVAFejQCgTVT5kJaWmmGgNTTiAyTcSswA/dummy'
  )
    .then((res) => res.json())
    .then((data) => {
      let newArray = [];

      data.forEach((item) => {
        newArray.push(item['genre']);
      });

      newArray.length = 8;

      let editedArray = newArray.map((item) => item.split(',')).flat();

      let genres = [];

      editedArray.flat().forEach((genre) => {
        genre = genre.trim();

        if (!genres[genre]) {
          genres[genre] = 0;
        }

        genres[genre] = genres[genre] + 1;
      });

      console.log(genres);
    });
}

getData();
