var images;
function preload() {
  //var url = 'data/collectionlisting-thirty-six-views.json';
  var data = 'https://colmccaffrey.github.io/DV5200/project_2/src/data/collectionlisting-thirty-six-views.json';
  images = loadJSON(data);
  console.log(images);

}

function setup(){
	noCanvas();
	var res = images.results;
	console.log("results " + res[0].title);
	showPics(res);


}

function showPics(images){
	//console.log("images " + images[0].title);

	console.log("length " + images.length);
	for (var i=0; i < images.length; i++){
		console.log("url " + images[i].image);
		var imageUrl = images[i].image;
		var div = createDiv('');
		div.addClass('image-wrapper');
		div.parent('container');


		var img = createImg(images[i].image, images[i].title);
		img.addClass('masonry');

		img.parent(div); // use p5.Element
		//div.addClass('image-wrapper');
		//var img = createImg(images[i].image, images[i].title);
		//img.addClass('masonry');
		//img.child(div); // use element from page

		img.mouseOver(swapImage).preventDefault;
		img.mouseOut(swapBack);

	}
}



function swapImage () {
	 this.addClass('magnify');

	 // this.addClass('magnify').attr('src', 'https://thumb2.holidaypirates.com/PG1mCx6mPvh5wfO8vv2fxw_F544=/657x300/https://media.mv.urlaubspiraten.de/images/2016/07/5786bec831e8f95561573251x58zst.jpg');
	 

	 //this.style('font-size', '26px');

	 	//addClass('highlight');
	console.log('figure hovered');
}

function swapBack () {
	this.removeClass('magnify');

	//this.removeClass('magnify').attr('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1200px-Tsunami_by_hokusai_19th_century.jpg');

	//this.style('font-size', '16px');

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





 
*/
