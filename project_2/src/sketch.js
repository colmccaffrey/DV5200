
var images;
function preload() {
  //var url = 'data/collectionlisting-thirty-six-views.json';
   var data = 'data/collectionlisting-thirty-six-views.json';
    images = loadJSON(data);
  
  //A p5 method to make a GET request 
  //(https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
  
    console.log(images);
	
}

function draw() {
  background(255);
}

function showHousaki(images) {
  // Get the magnitude and name of the earthquake out of the loaded JSON
  var imageTitle = images.results[0].title;
  console.log(imageTitle);
}



/* save to show mouseover effect

function showData(){
	var count= table.getRowCount();


for (var i = 0; i < 5000; i ++) {
	var objectName = table.getString(i, 5);
	//console.log(objectName);
	var objectDate = table.getString(i, 22);
	var culture = table.getString(i, 7);
	var nationality = table.getString(i, 18);
	var dept = table.getString(i, 4);
	var country = table.getString(i, 31);
	var year = table.getString(i, 0);
	console.log("year acquired: " + year + ", artist nationality: " + nationality + ", dept: " + dept + ", country: " + country + ", culture: " + culture + ", year created: " + objectDate);

	var span = createSpan(objectName + ' | ');
	span.style('font-size', '16px');

	if (objectName === "Beaker" || objectName === "Painting" || objectName === "Bottle" || objectName === "Armchair") {
		span.mouseOver(makeBig).preventDefault;
		span.mouseOut(makeSmall);

 	}
	if (objectName === "Coin") {
		span.addClass('highlight');

		//background(255, 204, 0);
	} 
 }
}




function makeBig () {
	 this.addClass('magnify');
	 this.style('font-size', '26px');

	 	//addClass('highlight');
	console.log('figure hovered');
}

function makeSmall () {
	this.removeClass('magnify');
	this.style('font-size', '16px');

}
 
*/
