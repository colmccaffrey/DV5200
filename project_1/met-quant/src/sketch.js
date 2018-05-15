var selectionYear = 0;

d3.csv("data/csvCut_MetObjects_5000.csv", function(d) {
  return {
    acquired : checkYear(d.Acquired), 
    created : +d.Created,
    dept : checkDept(d.Department)
  };
}, function(data) {

	var slider2 = d3.sliderHorizontal()
    .min(1871)
    .max(2017)
    .step(1)
    .width(800)
    .on('onchange', val => {
    	d3.select("p#value2").text(val);
    	selectionYear = val;
    	//selectionYearSlider(val);
    	//console.log("data[0].acquired" + data[0].acquired +  " selectionYear " + selectionYearSlider());


});

  
  console.log("slider value " + slider2.value());

  var g = d3.select("div#slider2").append("svg")
    .attr("width", 500)
    .attr("height", 100)
    .append("g")
    .attr("transform", "translate(30,30)");

  g.call(slider2);

  d3.select("p#value2").text((slider2.value()));
  d3.select("a#setValue2").on("click", () => slider2.value());



for (var i = 0; i < data.length; i++ ) {
if (!null) {
var x1 = (data[i].created - 1000);
var x2 = (data[i].acquired - 1000);
var x = x2 - x1;
var ySet = 575;
var xTest =10 * i;

var svg = d3.select("svg")
    .append("g")


var arc = d3.arc()
  
  .innerRadius(x/2)
  .outerRadius(x/2);

/*

svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", 50 + j)
    .attr("y", 600 - 6)
    .text("j");
}
*/

var sector = svg.append("path")
  .attr("fill", "none")
  .attr("stroke-width", .2)
  .attr("stroke", data[i].dept)
  .on("mouseover", function(d, i){
  	  		d3.select(this).style("stroke", "navy").attr("stroke-width", 5).attr("z-index", 5000);
			d3.select("span#details").text(data[this].created);
             })	
  .on("mouseout", function(d,i) {
  		d3.select(this).style("stroke", data[i].dept).attr("stroke-width", .2);
  		d3.select("span#details").text("  "); 

  	})

  .attr("transform", function(d, i) {
            // arc will always be drawn around (0, 0)
            // shift so (0, 0) will be between created and acquired
            if (x1 > 0) {
	            var xshift = x1 + (x2 - x1) / 2;
	            var yshift = ySet;
	            return "translate(" + xshift + ", " + yshift + ")";
	        } else {
	        	xhift = (x1 * .001) / 2;
	        	var yshift = ySet - 100;
	            return "translate(" + xshift + ", " + yshift + ")";
	        }
        })
  .attr("d", arc({startAngle:(-0.5 * Math.PI), endAngle:(0.5 * Math.PI)}))
		}
	}

});


function checkYear(x){
    objectYear = x.split(".", 1 );
	yearAcquired = Number(objectYear);
	if (yearAcquired >= 1900) {
		yearAcquired = yearAcquired;
		return yearAcquired;
	} else if (yearAcquired <= 71 ) {
		yearAcquired  = 1900 + yearAcquired;
		return yearAcquired;
	} else if (yearAcquired  > 71 && yearAcquired  < 1900) {
		yearAcquired  = 1800 + yearAcquired ;
		return yearAcquired;
	} else {
		yearAcquired = null;
		return yearAcquired;
	}

}

/*
function selectionYearSlider(){
		return selectionYear;	
}

function checkYearAcquired(d, selYear){	
	d3.selectAll("path")
		.styles("stroke-width", function (d, i){
				console.log("selYear, d.acquired" + d.acquired);
				if (selYear == d.acquired) {
					return 2;
				}else {
					return 0.2;
				}
	})

}
*/



function checkDept(e) {
	if (e === "American Decorative Arts") {
		return "#a6cee3";
	} else if (e === "American Paintings and Sculpture") {
		return "#1f78b4";
	} else if (e === "Ancient Near Eastern Art") {
		return "#b2df8a";

	} else if (e === "Arms and Armor") {
		return "#33a02c";

	} else if (e === "Asian Art") {
		return "#fb9a99";

	} else if (e === "Costume Institute") {
		return "#e31a1c";

	} else if (e === "Drawings and Prints") {
		return "#fdbf6f";

	} else if (e === "Egyptian Art") {
		return "#ff7f00";

	} else if (e === "European Paintings") {
		return "#cab2d6";

	} else if (e === "European Sculpture and Decorative Arts") {
		return "#6a3d9a";

	} else if (e === "Greek and Roman Art") {
		return "#ffff99";

	} else if (e === "Islamic Art") {
		return "#b15928";

	} else if (e === "Medieval Art") {
		return "#1b9e77";

	} else if (e === "Modern and Contemporary Art") {
		return "#d95f02";

	} else if (e === "Musical Instruments") {
		return "#7570b3";

	} else if (e === "Photographs") {
		return "#e7298a";

	} else if (e === "Robert Lehman Collection") {
		return "#66a61e";

	} else if (e === "The Cloisters") {
		return "#e6ab02";

	} else if (e === "The Libraries") {
		return "#a6761d";

	} else {
		return "#626262";

	}
}


/* departments
American Decorative Arts
American Paintings and Sculpture
Ancient Near Eastern Art
Arms and Armor
Asian Art
Costume Institute
Drawings and Prints
Egyptian Art
European Paintings
European Sculpture and Decorative Arts
Greek and Roman Art
Islamic Art
Medieval Art
Modern and Contemporary Art
Musical Instruments
Photographs
Robert Lehman Collection
The Cloisters
The Libraries
Arts of Africa, Oceania, and the Americas
*/
/*color brewer generator
#a6cee3
#1f78b4
#b2df8a
#33a02c
#fb9a99
#e31a1c
#fdbf6f
#ff7f00
#cab2d6
#6a3d9a
#ffff99
#b15928
#1b9e77
#d95f02
#7570b3
#e7298a
#66a61e
#e6ab02
#a6761d
#626262
*/

