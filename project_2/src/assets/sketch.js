var images;
var gviews;
var res;
var views;
var backgroundImg;
var panorama;
var panoid;
var lat;
var lng;
var heading;
var zoom;
var pitch;
var meta;
var mymap;
var mapBox;
var markerLat;
var markerLng;
var activeCircle;
      var panorama;


 
function preload() {
  var data = "/src/data/collectionlisting-thirty-six-views.json";
  //var data = 'https://colmccaffrey.github.io/DV5200/project_2/src/data/collectionlisting-thirty-six-views.json';
  images = loadJSON(data);
  //console.log(images);
  var gdata = "/src/data/street-view-gallery.json"
  gviews = loadJSON(gdata);
  console.log(gviews);

}

function setup(){
	noCanvas();
	res = images.results;
	//console.log("results " + res[0].title);
	showPics(res);
	views = gviews.results;
	createMap(res);



}

function showPics(images){
	for (var i=0; i < images.length; i++){
		//console.log("url " + images[i].image);
		var imageUrl = images[i].image;
		var div = createDiv('');
		div.addClass('image-wrapper');
		div.parent('container');


		var img = createImg(images[i].image, images[i].title);
		img.addClass('masonry');
		img.parent(div); // use p5.Element
		//div.mouseOver(initialize).preventDefault;
		//div.mouseOut(swapBack);
		div.mousePressed(swapImage);
		//img.mouseOut(clearMeta);
		img.mousePressed(showDetails);
	}
}

 function swapImage() {
 	this.addClass('active');
 	i =  Math.floor(Math.random() * 31) + 1;
 	lat = Number(views[i].lat);
	console.log("lat " + lat);
	lng = Number(views[i].lng);
	console.log(lng);
	heading = Number(views[i].heading);
	console.log(heading);
	pitch = Number(views[i].pitch);
	console.log(pitch);
 	document.getElementById('background-gpan-cover').style.display = "block";
 	console.log("div pressed image ")
 	      	    //this.addClass('active');

        panorama = new google.maps.StreetViewPanorama(
            document.getElementById('background-gpan-cover'),
            {
             position: {lat: lat, lng: lng},
        	 pov: {heading: heading, pitch: pitch},
        	 zoom: 0,
        	 disableDefaultUI: true

            });	

      }

/*
function initialize() {
  panorama = new google.maps.StreetViewPanorama(
      document.getElementById('background-cover'),
      {
       position: {lat: 35.44755092461781, lng: 139.5682884352498},
        pov: {heading: 165, pitch: 0},
                pov: {heading: 21.08, pitch: 5.89},

        zoom: 1
      });
}
*/
/*
function swapImage () {
	i =  Math.floor(Math.random() * 31) + 1;
	//console.log(" i " + i);
	lat = views[i].lat;
	//console.log("lat" + lat);
	lng = views[i].lng;
	heading = views[i].heading;
	pitch = views[i].pitch;
	pano = views[i].panoid;
    this.addClass('active');
	 var parentDiv = document.getElementById("background-cover");
	 var h = window.innerHeight;
	 var w = window.innerWidth;
	 backgroundImg = createImg("https://maps.googleapis.com/maps/api/streetview?size=" + w + "x" + h + "&location=" + lat + "," + lng + "&fov=90" + "&heading=" + heading + "&pitch=" + pitch + "&pano=" + pano + "&key=AIzaSyDPeOdeHpZtKOPFWcSFMEOANpcD-BJg92g");
	 //console.log("background image" + backgroundImg);
	 backgroundImg.addClass('fade');
	 backgroundImg.parent("background-cover");	 
}
*/
function swapBack () {
 	document.getElementById('background-gpan-cover').style.display = "none";
	var x = document.getElementsByClassName('active')[0];
	x.classList.remove('active');
	document.getElementById('mapid').style.zIndex = "-2";
	meta.remove();
	mymap.removeLayer(activeCircle);
	i = "";
}

function showDetails() {
	console.log("img pressed details ")
	var p = createP('X');
	var metadata = this.elt.alt;
	var div = createDiv(metadata);
	var ww = window.innerWidth;
	meta = div;
	meta.addClass('details-box');
	p.parent(meta);
	if (this.elt.offsetLeft < 300) {
		meta.addClass('alt-pos');
		document.getElementById('mapid').setAttribute("style", "left : auto; right: 25px; z-index : 1002;");
	} else {
		document.getElementById('mapid').setAttribute("style", "left : 25px; right : auto; z-index : 1002;");
	}
	if (ww < 800) {
		meta.addClass('mobile');
	}
	var imageData = this.elt.alt;
	var i = res.length,
    imageData;

	while(i--) {
	  if(imageData == res[i].title) {
	        imageData = res[i];
	        break;
	    	}
	  }
	  console.log(i);

	var imageIcon = L.icon({
    iconUrl: 'assets/ping.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [24, 24], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [16, 23], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
	});
	activeCircle = L.marker([res[i].lat, res[i].long], {icon: imageIcon}).addTo(mymap);
	meta.mousePressed(swapBack);
}

/*
function addMarker(){
	var name = this.elt.alt;
	console.log("name " + name);


}
*/

function clearMeta(){

}



function createMap(res){
	mymap = L.map('mapid').setView([35.1, 138.7278], 7);

	L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png', {

	//L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18,
	    //id: 'mapbox.satellite',
	    //accessToken: 'pk.eyJ1IjoiZHZpYTIwMTciLCJhIjoiY2o5NmsxNXIxMDU3eTMxbnN4bW03M3RsZyJ9.VN5cq0zpf-oep1n1OjRSEA'
	}).addTo(mymap);

	var mountainIcon = L.icon({
    iconUrl: 'https://cdn1.iconfinder.com/data/icons/famous-places/512/travel_Mount_Fuji-512.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [36, 36], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 35], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([35.3606, 138.7278], {icon: mountainIcon}).addTo(mymap);
console.log(res);

for (var j=0; j<res.length; j++){

	var circle = L.circle([res[j].lat, res[j].long], {
	    color: 'navy',
	    fillColor: 'navy',
	    fillOpacity: 1,
	    radius: 5
	}).addTo(mymap);
	}
}

function keyTyped() {
  if (key === 'a') {
	window.location.href = "http://colmac.maps.arcgis.com/home/webscene/viewer.html?webscene=5fb5f0bc93fb4f21a4ef9061d2e837d8&ui=min";
	}
}
   
/*


<!--categories
sea 
plain
forest
field
village
lake
river
beach
//additional//
road
bridge

-->

 
*/
