import * as d3 from 'd3';

let dataType;
dataType = 'test';

const w = 500;
const h = 300;

let dataSet = [];
let newArray = [];

const svg = d3
  .select('.test')
  .append('svg')
  .attr('class', 'd3-test')
  .attr('width', w)
  .attr('height', h);

function getData() {
  console.log('Grabbing new userdata...');

  fetch(
    'https://opensheet.elk.sh/10V0lGVvZzTSVAFejQCgTVT5kJaWmmGgNTTiAyTcSswA/dummy'
  )
    .then((res) => res.json())
    .then((data) => {
      dataSet = data;
      filterData();
      drawGraph();
    });
}
getData();

function drawGraph() {
  svg
    .selectAll('rect')
    .data(newArray)
    .join('rect')
    .transition()
    .duration(1000)
    .attr('x', (d, i) => i * 40)
    .attr('y', (d, i) => h - 30 * d)
    .attr('width', 35)
    .attr('height', (d, i) => d * 30)
    .attr('fill', 'white')
    .attr('class', 'bar');
  svg
    .selectAll('text')
    .data(newArray)
    .join('text')
    .transition()
    .duration(1000)
    .style('fill', 'white')
    .text((d) => d)
    .attr('x', (d, i) => i * 40)
    .attr('y', (d, i) => h - (d * 30 + 3));
}

function filterData() {
  newArray = [];
  dataSet.forEach((item) => {
    newArray.push(item[dataType]);
  });

  newArray.sort();
}

const option = document.querySelector('#genreperiod');

function update() {
  if (option.value === 'fourweeks') {
    dataType = 'test';
  } else if (option.value === 'sixmonths') {
    dataType = 'test-2';
  } else if (option.value === 'alltime') {
    dataType = 'test-3';
  }

  filterData();
  drawGraph();
}

option.addEventListener('change', update);
