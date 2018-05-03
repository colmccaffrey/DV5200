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
///////////////////
/*
cuba
west virginia/pennsylvania
alabama
new york

resettlement/ fsa
fortune and times magazine
yale professor

Negative,6037
Polaroid,2556
Photograph,594
Glass Negative,92----
Manuscript Materials,117
Transparency,91 -----
Diary & Appointment Book,39
Album,36
Letters & Correspondence,35
Postcard,18
Ephemera,16
//
Painting,16
Drawing,15
Contact Sheet,14
Books,9
Address Book,7
Periodical,6
Photobooth Strip,6
Notebook,4
*/
/*

var content = ["1930, he published three photographs (Brooklyn Bridge) in the poetry book The Bridge by Hart Crane. In 1931, he made a photo series of Victorian houses in the Boston vicinity sponsored by Lincoln Kirstein.",
"In 1935, Evans spent two months at first on a fixed-term photographic campaign for the Resettlement Administration (RA) in West Virginia and Pennsylvania. From October on, he continued to do photographic work for the RA and later the Farm Security Administration (FSA), primarily in the Southern United States. <a href='https://www.youtube.com/watch?v=DlXfbixbGG8' target='_blank'>Evans in his own words</a>",
"In the summer of 1936, while on leave from the FSA, he and writer James Agee were sent by Fortune magazine on assignment to Hale County, Alabama, for a story the magazine subsequently opted not to run. The photographs later became a book ***","1938 In 1938, Evans also took his first photographs in the New York subway with a camera hidden in his coat. These would be collected in book form in 1966 under the title Many are Called. Exhibition Walker Evans: American Photographs, was held at The Museum of Modern Art, New York. This was the first exhibition in the museum devoted to the work of a single photographer. The catalogue included an accompanying essay by Lincoln Kirstein, whom Evans had befriended in his early days in New York.", 
"Evans was a passionate reader and writer, and in 1945 became a staff writer at Time magazine. Shortly afterward he became an editor at Fortune magazine through 1965. That year, he became a professor of photography on the faculty for Graphic Design at the Yale University School of Art.",
"1965 Evans was a passionate reader and writer, and in 1945 became a staff writer at Time magazine. Shortly afterward he became an editor at Fortune magazine through 1965. That year, he became a professor of photography on the faculty for Graphic Design at the Yale University School of Art.",
"1936 The three families headed by Bud Fields, Floyd Burroughs and Frank Tingle, lived in the Hale County town of Akron, Alabama, and the owners of the land on which the families worked told them that Evans and Agee were 'Soviet agents,'although Allie Mae Burroughs, Floyds wife, recalled during later interviews her discounting that information. Evanss photographs of the families made them icons of Depression-Era misery and poverty. In September 2005, Fortune revisited Hale County and the descendants of the three families for its 75th anniversary issue.",
"1971 The first definitive retrospective of his photographs, which 'individually evoke an incontrovertible sense of specific places, and collectively a sense of America,'' according to a press release, was on view at New York's Museum of Modern Art in early 1971. Selected by John Szarkowski, the exhibit was titled simply Walker Evans. - cincinnati art musem's exhibit with photgraphs from 30's. 40's. 50's, 60's","1973 In 1973 and 1974, he also shot a long series with the then-new Polaroid SX-70 camera, after age and poor health had made it difficult for him to work with elaborate equipment.",
"In 1941, Evans's photographs and Agee's text detailing the duo's stay with three white tenant families in southern Alabama during the Great Depression were published as the groundbreaking book Let Us Now Praise Famous Men. Its detailed account of three farming families paints a deeply moving portrait of rural poverty. The critic Janet Malcolm notes that as in the earlier Beals' book there was a contradiction between a kind of anguished dissonance in Agee's prose and the quiet, magisterial beauty of Evans's photographs of sharecroppers. ",
"In 1994, The Estate of Walker Evans handed over its holdings to New York City's The Metropolitan Museum of Art.[15] The Metropolitan Museum of Art is the sole copyright holder for all works of art in all media by Walker Evans. The only exception is a group of approximately 1,000 negatives in collection of the Library of Congress which were produced for the Resettlement Administration (RA) / Farm Security Administration (FSA). Evans's RA / FSA works are in the public domain.[16]","In 2000, Evans was inducted into the St. Louis Walk of Fame",
"1937- Cuba  His photographs documented street life, the presence of police, beggars and dockworkers in rags, and other waterfront scenes. He also helped Hemingway acquire photos from newspaper archives that documented some of the political violence Hemingway described in To Have and Have Not (1937). Fearing that his photographs might be deemed critical of the government and confiscated by Cuban authorities, he left 46 prints with Hemingway. He had no difficulties when returning to the United States, and 31 of his photos appeared in Beals' book. The cache of prints left with Hemingway was discovered in Havana in 2002 and exhibited at an exhibition in Key West. 2) Evans rarely spent time in the darkroom making prints from his own negatives. He only very loosely supervised the making of prints of most of his photographs, sometimes only attaching handwritten notes to negatives with instructions on some aspect of the printing procedure."];
*/

var content = ["The Walker Evans Collection at the Metropolitan Museum of Art has 9726 pieces of work spanning 5 decades.",
"Evans published three photographs (Brooklyn Bridge) in the poetry book The Bridge by Hart Crane. In 1931, he made a photo series of Victorian houses in the Boston vicinity sponsored by Lincoln Kirstein.",
"In 1935, Evans spent two months at first on a fixed-term photographic campaign for the Resettlement Administration (RA) in West Virginia and Pennsylvania. From October on, he continued to do photographic work for the RA and later the Farm Security Administration (FSA), primarily in the Southern United States. The photos were later published",
"In the summer of 1936, while on leave from the FSA, he and writer James Agee were sent by Fortune magazine on assignment to Hale County, Alabama, for a story the magazine subsequently opted not to run. The photographs later became a groundbreaking book, 'Let Us Now Praise Famous Men' (1941). Its detailed account of three farming families paints a deeply moving portrait of rural poverty.",
"In 1938, Evans took his first photographs in the New York subway with a camera hidden in his coat. These would be collected in book form in 1966 under the title 'Many are Called'. Exhibition Walker Evans: American Photographs, was held at The Museum of Modern Art, New York. This was the first exhibition in the museum devoted to the work of a single photographer. The catalogue included an accompanying essay by Lincoln Kirstein, whom Evans had befriended in his early days in New York.", 
"Evans was a passionate reader and writer, and in 1945 became a staff writer at Time magazine. Shortly afterward he became an editor at Fortune magazine through 1965. That year, he became a professor of photography on the faculty for Graphic Design at the Yale University School of Art.",
"1936 The three families headed by Bud Fields, Floyd Burroughs and Frank Tingle, lived in the Hale County town of Akron, Alabama, and the owners of the land on which the families worked told them that Evans and Agee were 'Soviet agents,'although Allie Mae Burroughs, Floyds wife, recalled during later interviews her discounting that information. Evans photographs of the families made them icons of Depression-Era misery and poverty. In September 2005, Fortune revisited Hale County and the descendants of the three families for its 75th anniversary issue",
"The first definitive retrospective of his photographs, which 'individually evoke an incontrovertible sense of specific places, and collectively a sense of America,'' according to a press release, was on view at New York's Museum of Modern Art in early 1971. Selected by John Szarkowski, the exhibit was titled simply Walker Evans. - cincinnati art musem's exhibit with photgraphs from 30's. 40's. 50's, 60's. In 1973 and 1974, he also shot a long series with the then-new Polaroid SX-70 camera, after age and poor health had made it difficult for him to work with elaborate equipment.",
"Evans photographs documented street life, the presence of police, beggars and dockworkers in rags, and other waterfront scenes. He also helped Hemingway acquire photos from newspaper archives that documented some of the political violence Hemingway described in To Have and Have Not (1937). Fearing that his photographs might be deemed critical of the government and confiscated by Cuban authorities, he left 46 prints with Hemingway. He had no difficulties when returning to the United States, and 31 of his photos appeared in Beals' book. The cache of prints left with Hemingway was discovered in Havana in 2002 and exhibited at an exhibition in Key West. 2) Evans rarely spent time in the darkroom making prints from his own negatives. He only very loosely supervised the making of prints of most of his photographs, sometimes only attaching handwritten notes to negatives with instructions on some aspect of the printing procedure.",
"In one of his last photographic projects, Evans completed a black and white portfolio of Brown Brothers Harriman & Co.'s offices and partners for publication in 'Partners in Banking,' published in 1968 to celebrate the private bank's 150th anniversary."]


function reset() {
  d3.selectAll("circle")
    .style("fill", "#cdcdcd")
    .attr("visibility", "visible")
    .attr("r", function(d){ return d.radius; });
  d3.selectAll('p').remove();
  d3.select('#bc-type')
    .html("");
  d3.select('#bc-loc')
    .html("");
  d3.selectAll('.tooltip').remove();
  setNodes(allYears);


}
function showType(type) {
  var name = type;
  var newradius = 0;
  d3.select('#bc-type')
    .html(name);
  d3.selectAll('circle')
      .attr("r", function(d){ return newradius; })
      .style('fill', '#fff')
      .transition()
      .attr("delay", 1000)
      .attr("duration", 1000)
      //.attr("cy", 400)
      .attr("r", function(d){
    //console.log(" clciked- obejcet " + d[i].type + " name: " + name);
    //console.log( "i = " + i + " d = "+d.type);
      if (name == d.type) { 
        console.log("type" + d.type);
        //console.log(" clciked- obejcet " + d.type + " name: " + name);
        return d.radius;
      }
    })
}

function showLocation(loc, index) { //run function on current svg loaded
  console.log("clicked loc " + loc);
  var newRadius = 3.2;
  var radius = 0;
  d3.select('#bc-loc')
    .html(loc);
    d3.selectAll('p').remove();
    d3.select('#info')
    .append('p')
    .html(content[index]);
    //.html(content.join('<br/>'));

    d3.selectAll("circle")
        .attr("visibility", "hidden")

    d3.selectAll(loc)
        .transition()
        .delay(200)
        .duration(500) 
        .style("fill", "#cdcdcd")
        .style("z-index", "10000")
        .attr("visibility", "visible")
        .attr("r", function(d) { return newRadius; })

        //showWork(loc);
    }
/*
  function showWork(loc) {
    console.log("show work from " + loc);
  }
  */

//console.log("other decades " + years);
var num_swarm = 10;
var decade = 1900;
var content;

function swarmCount(num, year) {
  d3.select('#bc-type')
    .html("");
  d3.select('#bc-loc')
    .html("");
  d3.selectAll('svg').remove();
  num_swarm = num;
  decade = +year;
  //console.log("twenties.length" + twenties.length);
  //console.log("clicked " + num);
  resetNodes(num_swarm, decade);
  createSubNav(decade);
  //console.log("20s " + twenties.length);

}


function createSubNav(year) {
    d3.selectAll('.subnav').remove();
     var i;
     for (i=0; i < 10; i++){
     // content = year + 1
     // console.log("decade " + year + 1)
      d3.select('#year-nav')
      .append("li")
      .html(year + i)
      .attr("class", "subnav");
    }

   // }
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
    radius: 2.2, 
    y: true_y,
    true_x: 350 + x_offset,
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

/*let div = d3.select("body").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);
*/
let div = d3.select(".tooltip");

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
    .style("stroke", "black")
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
/*
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

/*

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
        nudge_factor = (l - r) / l * .04;
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
*/

