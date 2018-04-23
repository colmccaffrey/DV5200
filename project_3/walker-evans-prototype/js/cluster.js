/*
var twenties = [];
var years = 0;
var allYears = [];

  d3.csv("data/evans-objects-type.csv", function(data){
     for (var i=0; i < data.length; i ++){
      allYears.push(data[i]);
      if (data[i].value < 1930) {
        twenties.push(data[i]);
      } else {
        years = years + 1;
      }
    }
    //resetNodes(allYears);
    console.log(allYears.length);
    //console.log("length " + twenties[3].value);
  });

*/

var content = ["this is text for info div", "content 2"];

function reset() {
  d3.selectAll("circle")
    .style("fill", "#cdcdcd")
  d3.selectAll('p').remove();

}

function showLocation(loc, index) { //run function on current svg loaded
  console.log("clicked loc " + loc);
    d3.selectAll('p').remove();
    d3.select('#info')
    .append('p')
    .html(content[index]);
    //.html(content.join('<br/>'));

    d3.selectAll("circle")
        .style("fill", "#212121")
    d3.selectAll(loc)
        .style("fill", "#fff")
        showWork(loc);
    }

  function showWork(loc) {
    console.log("show work from " + loc);
  }

//console.log("other decades " + years);
var num_swarm = 10;
var decade = 1900;
function swarmCount(num, year) {
  d3.selectAll('svg').remove();
  num_swarm = num;
  decade = year;
  //console.log("twenties.length" + twenties.length);
  //console.log("clicked " + num);
  resetNodes(num_swarm, decade);
  console.log("20s " + twenties.length);
}



var width= window.innerWidth;
//var height=window.innerHeight/ 2;

function norm() {
  var res, i;
  res = 0;
  for (i = 0; i < 10; i += 1) { // sets the stretch of points on vertical axis range
    res += Math.random()*2-1
    }
  return res;
} 

var w = width,
    h = 600;


function resetNodes(current, decade){ //array of data for decade/location pressed
console.log("current " + current.length);
var nodes =[];
var x_offset;
var sortDecade = decade;
for (var j =0; j < current.length; j++){ // load in data and create circle for each - fill with title and link and  object name - if have api, make call to api with just object id, get image url as well
//load data for each using for each of current array, split into 10 columns for years, base x axis on year or decade > create algorthithm for any sort variation
//var nodesYear = num_swarm/10;
//console.log("twenties j " + current[0].object);
var new_nodes = d3.range(1).map(function() {  // sets the # of circles to create > pull data for #
 //console.log("current  + j " + current[j].id + j);
  //var x_offset = (current[j].value - 1900) * 10; // x offset for decade sort
  var x_offset = (current[j].value - sortDecade) * 100;  //offset for years - set variable for decade call
  //console.log("offset" + x_offset);
  var true_y = (norm()* 50)+ 250; // *num set distribution on y-axis+ num sets vertical axis from top > can set to variable with css
  return {
    year: current[j].value,
    type: current[j].id,
    object: current[j].object,
    title: current[j].title,
    radius: 1.8, 
    y: true_y,
    true_x: 200 + x_offset,
    //true_x: (current[j].value-1700),
    true_y: true_y }
  });
   nodes = nodes.concat(new_nodes);
 }


var force = d3.layout.force()
    .gravity(0)
    .charge(0) // -2 good
    .friction(.7) 
    /*
    .gravity(0)
    .charge(0)
    .friction(0.5) //intensity on  load < is better / 0.9 is default
    */
    .nodes(nodes)
    .size([w, h]);

var root = nodes[0];
root.radius = 0;
root.fixed = true;

force.start();

let div = d3.select("body").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);

var svg = d3.select("#chart").append("svg:svg")
    .attr("width", w)
    .attr("height", h);


svg.selectAll("circle")
    .data(nodes)
    .enter().append("svg:circle")    
    .attr("r", function(d) { return d.radius; })
    .style("fill", "#cdcdcd")
    .style("stroke", "black")
    .attr("class", function(d) {
      if (d.year > 1938 && d.year <= 1941) {
        return "newyork" ;
      } else if (d.year >= 1943 && d.year <= 1965) {
        return "staff";
      } else if (d.year == 1935 || d.year == 1937 || d.year == 1938){
        return "fsa";
      } else if (d.year > 1933 && d.year < 1936) {
      return "wva-penn";
      } else if (d.year == 1933) {
        return "cuba";    
      } else if (d.year == 1936) {
        return "alabama";
      } else if (d.year == 1941 ) {
      return "yale";
      }
    })

    .on("mouseover", function(d) {
            div.transition()    
                .duration(200)    
                .style("opacity", .9);    
            div.html(d.title + "</br>" + d.year + "</br>" + d.type + "</br>" + d.object)  
                .style("left", (d3.event.pageX) + "px")   
                .style("top", (d3.event.pageY - 28) + "px"); 
            d3.select(this)
              .style("fill", "steelblue") 
            })          
        .on("mouseout", function(d) {   
            div.transition()    
                .duration(500)    
                .style("opacity", 0); 
            d3.select(this)
            .style("fill", "#cdcdcd")
        });


force.on("tick", function(e) {
  var q,
    node,
    i = 0,
    n = nodes.length;
    
  var q = d3.geom.quadtree(nodes);

  while (++i < n) {
    node = nodes[i];
    q.visit(collide(node));
    xerr = node.x - node.true_x;
    yerr = node.y - node.true_y;
   // node.x -= xerr*0.005;
    node.x -= xerr*0.09; //distribution distance x 
    node.y -= yerr*0.05; //distribution distance y
  }
  


 svg.selectAll("circle")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });

});
}

function collide(node) {
  var r = node.radius,
    nx1,
    nx2,
    ny1,
    ny2,
    xerr,
    yerr;
    
  nx1 = node.x - r;
  nx2 = node.x + r;
  ny1 = node.y - r;
  ny2 = node.y + r;
      
  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
          r = node.radius + quad.point.radius;
      if (l < r) {
        // we're colliding.
        var xnudge, ynudge, nudge_factor;
        nudge_factor = (l - r) / l * .2;
        xnudge = x*nudge_factor;
        ynudge = y*nudge_factor;
        node.x -= xnudge;
        node.y -= ynudge;
        quad.point.x += xnudge;
        quad.point.y += ynudge;
      }
    }
    return x1 > nx2
        || x2 < nx1
        || y1 > ny2
        || y2 < ny1;
  };
}

