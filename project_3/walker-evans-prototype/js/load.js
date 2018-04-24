var twenties = [];
var thirties= [];
var forties = [];
var fifties = [];
var sixties = [];
var seventies = [];
var allYears = [];
var barCounts = [];


  d3.csv("data/object_counts.csv", function(counts){
   for (var i=0; i < counts.length; i ++){
    barCounts.push(counts[i]);
   }
   objectBars(counts);
  });


  d3.csv("data/evans-objects-title.csv", function(data){
     for (var i=0; i < data.length; i ++){
      console.log("records " + data.length);
      allYears.push(data[i]);
      if (data[i].value < 1930) {
        twenties.push(data[i]);
      } else
        if (data[i].value < 1940) {
        thirties.push(data[i]);
      } else
        if (data[i].value < 1950) {
        forties.push(data[i]);
      } else
        if (data[i].value < 1960) {
        fifties.push(data[i]);
      } else
        if (data[i].value < 1970) {
        sixties.push(data[i]);
      } else {
        seventies.push(data[i]);
      }
    }
    setNodes(allYears);
    //resetNodes(allYears);
    //console.log(allYears.length);
    //console.log("length " + twenties[3].value);
  });



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
    h = 500;

function showType(type) {
  var name = type;
  d3.selectAll('circle')
      .transition()
      .attr("delay", 1000)
      .attr("duration", 1000)
      //.attr("cy", 400)
      .style('fill', function(d){
    //console.log(" clciked- obejcet " + d[i].type + " name: " + name);
    //console.log( "i = " + i + " d = "+d.type);
      if (name == d.type) { 
        console.log("type" + d.type);
        //console.log(" clciked- obejcet " + d.type + " name: " + name);
        return "#fff";
      }
    })
}

function objectBars(barcount) {
  //console.log("objectebars")
  barcount.forEach(function(d, i) { 
    console.log(d.object + " " + i + " " + d.count); 

  d3.select('#bar-counts')
   .append('li')
   .style({width:  (d.count/20 + 2) + 'px', height: 10 + 'px'})
   .style('background-color', function(d){
      var value = Math.random() * 0xFF | 0;
      var grayscale = (value << 16) | (value << 8) | value;
      var color = '#' + grayscale.toString(16);
      return color;
   })
   .style('display', 'inline-block') 
   .on("mouseover", function(){
    d3.selectAll('.name-count').remove()
    d3.select("#name")
    .append('h2')
    .style('text-transform', 'uppercase')
    .attr('class', 'name-count')
    .text(d.object + "s" + " " + d.count)
    console.log("this type" + d.object)
   })
   .on("click", function(){
      showType(d.object);
   })
   //.text(d.object)
   });
  
}

function setNodes(current){ //array of data for decade/location pressed
d3.selectAll('svg').remove();
console.log("current " + current.length);
var nodes =[];
var x_offset;

for (var j =0; j < current.length; j++){ // load in data and create circle for each - fill with title and link and  object name - if have api, make call to api with just object id, get image url as well
//load data for each using for each of current array, split into 10 columns for years, base x axis on year or decade > create algorthithm for any sort variation
//var nodesYear = num_swarm/10;
//console.log("twenties j " + current[0].object);
var new_nodes = d3.range(1).map(function() {  // sets the # of circles to create > pull data for #
 //console.log("current  + j " + current[j].id + j);
  var x_offset = ((current[j].value - 1900) * 18); // x offset for decade sort
  //var x_offset = (current[j].value - 1920) * 100;  //offset for years - set variable for decade call
  //console.log("offset" + x_offset);
  var true_y = (norm()* 50)+ 300; // *num set distribution on y-axis+ num sets vertical axis from top > can set to variable with css
  return {
    year: current[j].value,
    type: current[j].id,
    object: current[j].object,
    title: current[j].title,
    radius: 1.2, 
    y: true_y,
    true_x: x_offset - 100,
    true_y: true_y }
  });
   nodes = nodes.concat(new_nodes);
 }


var force = d3.layout.force()
    .gravity(-0.05)
    .charge(-0.05) // -2 good
    .friction(.7) //intensity on  load < is better / 0.9 is default
    .nodes(nodes)
    .size([w*2, h*2]);

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
    .style("stroke", "#212121")
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
        } else if (d.year == 1965 ) {
        return "yale";
        } else if (d.year == 1931 ) {
        return "brooklyn";
        } else if (d.year == 1973 || d.year == 1974) {
        return "later";
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
    node.x -= xerr*.09; //distribution distance x  .03 good / .09 good for all
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
        nudge_factor = (l - r) / l * .004; //change from .4 > this is speed of settle
        xnudge = x*=nudge_factor;
        ynudge = y*=nudge_factor;
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

/* select current class
d3.selectAll(".button").on("click", function() {
    CURR_YEAR_INDEX = d3.select(this).attr("data-val");
    d3.select(".current").classed("current", false);
    d3.select(this).classed("current", true);
*/
