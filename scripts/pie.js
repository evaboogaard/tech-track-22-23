//   // Creating Pie generator
//   var pie = d3.pie();

//   // Creating arc
//   var arc = d3.arc().innerRadius(0).outerRadius(100);

//   let g = svg.append('g').attr('transform', 'translate(150,120)');

//   // Grouping different arcs
//   var arcs = g.selectAll('arc').data(pie(newArray)).enter().append('g');

//   // Appending path
//   arcs
//     .append('path')
//     .attr('fill', (data, i) => {
//       let value = data.data;
//       return d3.schemeSet3[i + 1];
//     })
//     .attr('d', arc);

//   // Adding data to each arc
//   arcs
//     .append('text')
//     .attr('transform', (d) => {
//       return 'translate(' + arc.centroid(d) + ')';
//     })
//     .text(function (d) {
//       return d.data;
//     });
