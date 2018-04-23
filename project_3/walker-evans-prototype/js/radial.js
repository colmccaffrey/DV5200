var nodes = [].concat( //do for each on object types with count to create node circles > need to add voroni for on hover or click interaction > or interaction is sort option to other layout
  d3.range(80).map(function() { return {type: "a"}; }), //range is number of circles- set new range for each year . can be second view on click or scroll
  d3.range(1600).map(function() { return {type: "b"}; }),
  d3.range(800).map(function() { return {type: "c"}; })

);

var node = d3.select("svg")
  .append("g")
  .selectAll("circle")
  .data(nodes)
  .enter().append("circle")
  .attr("r", 2.5)
  .attr("fill", "#cdcdcd")
  .attr("class", function(d) {
    return d.type;
  })
    

    /* 
    change color based on type - use to highlight on hover
    .attr("fill", function(d) { 
        if (d.type === "a"){
          return "brown";
        } else if (d.type === "b") {
          return "steelblue";
        } else {
          return "green";
        }
      })
      */
    //  return d.type === "a" ? "brown" : "b" ? "steelblue" :  "green";})

var simulation = d3.forceSimulation(nodes) //for each node add class so on hover, can change state
    .force("charge", d3.forceCollide(3).radius(4))
    .force("r", d3.forceRadial(function(d) { 
      if (d.type === "a"){
          return 100;
        } else if (d.type === "b") {
          return 110;
        } else {
          return 120;
        }
      }))
      // return d.type === "a" ? 100 : "b" ? 150 :  350; }))
    .on("tick", ticked)

function ticked() {
  node
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
}

