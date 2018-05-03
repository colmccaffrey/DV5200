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
    h = 600;

var webUrl;

/*
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

*/
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

function setImgUrl(id) {
  var url = 'https://collectionapi.metmuseum.org/api/collection/v1/object/' + id;
  //var noImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7aloV4xbHXsO942_Gr1dGGl18Quq_cWD4AcpIudDEdSakgjFE';

  var load = d3.xhr(url)
  .mimeType("application/json")
  .header("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWNjYWMyOTBAbmV3c2Nob29sLmVkdSIsInBlcm1pc3Npb25zIjp7InByb3ZlbmFuY2UiOmZhbHNlLCJ3ZWJMYWJlbCI6ZmFsc2V9LCJleHAiOjQ2NzgxNzgzODV9.HhOOmPn9LVY5C8A0HYKIHqTKIt9RV0ScrwnGfn8P0ag")
  .get(function(error, data){
      if (error) throw error;
     // console.log("data " + data); 
      
      var payload = JSON.parse(data.response); 
     var imgurl = payload.media.images.primaryImage.imageUrl;
      console.log("url " + imgurl);

     })
   }
      //console.log("url " + imgurl);


      //var imgUrl = [];
    
      /*
      for (var i=0; i<=payload.media.images.additionalImages.length-1; i++)
      {
       imgUrl.push(payload.media.images.additionalImages[i]);   
      }
      console.log(imgUrl);
      
      d3.select('#viz1')
      .style('background-color', 'lightpink')
      .selectAll('div.imgcont')
      .data(imgUrl)
      .enter()
          .append('div')
          .attr('class', 'imgcont')
          .append('img')
          .attr('src', function(data){return data.imageUrl})
  */



function setNodes(current){ //array of data for decade/location pressed
 d3.select('#bc-type')
    .html("");
  d3.select('#bc-loc')
    .html("");
d3.selectAll('svg').remove();
d3.selectAll('.subnav').remove();

console.log("current " + current.length);
var nodes =[];
var x_offset;
//********************remove after testing!!!!!!! --> reset to full length
//for (var j =0; j < 500; j++){ 
for (var j =0; j < current.length; j++){ // load in data and create circle for each - fill with title and link and  object name - if have api, make call to api with just object id, get image url as well
//load data for each using for each of current array, split into 10 columns for years, base x axis on year or decade > create algorthithm for any sort variation
//var nodesYear = num_swarm/10;
//console.log("twenties j " + current[0].object);
var new_nodes = d3.range(1).map(function() {  // sets the # of circles to create > pull data for #
 //console.log("current  + j " + current[j].id + j);
  //var imageUrl = "";
  var x_offset = ((current[j].value - 1900) * 18); // x offset for decade sort
  //var x_offset = (current[j].value - 1920) * 100;  //offset for years - set variable for decade call
  //console.log("offset" + x_offset);
  var true_y = (norm()* 30)+ 300; // *num set distribution on y-axis+ num sets vertical axis from top > can set to variable with css
  return {
    year: current[j].value,
    type: current[j].id,
    object: current[j].object,
    title: current[j].title,
    radius: 2, 
    y: true_y,
    true_x: x_offset - 100, 
    true_y: true_y
    }
  });
   nodes = nodes.concat(new_nodes);
 }


var force = d3.layout.force()
    //.gravity(-0.05)
    //.charge(-0.05) // -2 good
    .gravity(0)
    .charge(0)
    .friction(.7) //intensity on  load < is better / 0.9 is default
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
    .enter().append("a")
    .attr("xlink:href", function(d){ 
      return "https://www.metmuseum.org/art/collection/search/" + d.object;
    })
    .append("svg:circle")    
    .attr("r", function(d) { return d.radius; })
    .style("fill", "#cdcdcd")
    .style("stroke", "#212121")
    .attr("class", function(d) {
      if (d.title.match(/(New York)\b/g)) {
           return "newyork" ;
        } else if (d.title.match(/(Alabama)\b/g)) {
           return "alabama" ;
        }  else if (d.title.match(/(Havana)\b/g) || d.title.match(/(Cuba)\b/g) ) {
           return "cuba" ;
        }  else if (d.title.match(/(New Orleans)\b/g) || d.title.match(/(Louisiana)\b/g)) {
           return "louisiana" ;
        }  else if (d.title.match(/(Florida)\b/g)) {
           return "florida" ;
        }  else if (d.title.match(/(Mississippi)\b/g)) {
           return "mississippi" ;
        }  else if (d.title.match(/(Connecticut)\b/g)) {
           return "connecticut" ;
        }  else if (d.title.match(/(Pennsylvania)\b/g) || d.title.match(/(West Virginia)\b/g)) {
           return "fsa" ;
         } else if (d.title.match(/(Brooklyn)\b/g)) {
           return "brooklyn" ;
        } else if (d.title.match(/(Yale)\b/g)) {
            return "yale" ;
         }  else if (d.title.match(/(Fortune)\b/g) || d.title.match(/(Fortune Magazine)\b/g) || d.title.match(/(Times)\b/g) || d.title.match(/(Times Magazine)\b/g)) {
           return "staff" ;
         }
      })

      /*
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
      */
    .on("mouseover", function(d) {
            var left = d3.event.pageX;
            var top = d3. event.pageY;
            var imgurl = "";
            var url = 'https://collectionapi.metmuseum.org/api/collection/v1/object/' + d.object;
            var load = d3.xhr(url)
            .mimeType("application/json")
            .header("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWNjYWMyOTBAbmV3c2Nob29sLmVkdSIsInBlcm1pc3Npb25zIjp7InByb3ZlbmFuY2UiOmZhbHNlLCJ3ZWJMYWJlbCI6ZmFsc2V9LCJleHAiOjQ2NzgxNzgzODV9.HhOOmPn9LVY5C8A0HYKIHqTKIt9RV0ScrwnGfn8P0ag")
            .get(function(error, data){
                if (error) throw error;
               // console.log("data " + data);           
               var payload = JSON.parse(data.response); 
               var imgurl = payload.media.images.primaryImage.imageUrl; 
              div.transition()    
                .duration(500)    
                .style("opacity", .9)
               div.html('<img class="image-tooltip" src="'+ imgurl + '"/>' + "</br>" +  d.title + "</br>" + d.year + " | " + d.type)
                .transition()
                .duration(200)    
                .style("left", (left + 5) + "px")   
                .style("top", (top - 28) + "px")
                .style("opacity", .9);
              })
            })     
        .on("mouseout", function(d) {   
            div.transition()    
                .duration(100)    
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
    //q.visit(collide(node));
    q.node;

   xerr = node.x - node.true_x;


    yerr = node.y - node.true_y;
    node.x -= xerr;
    node.y -= yerr;
    //node.x -= xerr*.09; //distribution distance x  .03 good / .09 good for all
    //node.y -= yerr*0.05; //distribution distance y
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
          //l = Math.sqrt(x * x + y * y),
          l = node.radius + quad.point.radius
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
