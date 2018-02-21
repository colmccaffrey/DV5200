
var slider;
var selectedYear;
var count;
var objectDate;
var dept;
var year;
var table;
var objectYear;
var yearAcquired;
var totalArray = [];

function preload() {
 table = loadTable('data/csvCut_MetObjects_5000.csv', 'csv', 'header');
}

function setup() {
 createCanvas(1000, 600);
 slider = createSlider(1871, 2018, 1871);
 slider.position(512, 700); 
  text('< 1500',300,560);
  text('1600',500,560);
  text('1700',600,560); 
  text('1800',700,560);
  text('1900',800,560);
  text('2000',900,560);

}

function draw() {
  //background(127);
  selectedYear = slider.value();
  //console.log("slider year: " + selectedYear);
  drawArcs();
 	//drawAll();
}

function drawArcs() {
 console.log("selected year " + selectedYear);
 count = table.getRowCount();
 var yearArray = [];
 for (var i = 0; i < count; i ++) {
 	//console.log(count);
		objectDate = Number(table.getString(i, 2));
		dept = table.getString(i, 1);
		year = table.getString(i, 0);
 	 var acquiredYearString = checkYear(year);
 	 var acquiredYear = Number(acquiredYearString);
	 if (selectedYear == acquiredYear){ 
	 	yearArray.push([objectDate, dept, acquiredYear],);
	 	//console.log("year Array : " + yearArray);
	 	}
	 totalArray.push([objectDate, dept, acquiredYear]);
	}

	for (var j=0; j < yearArray.length; j++) {
		console.log("array lentghth " + yearArray.length);
	  		stroke(Math.floor(Math.random()* 120), Math.floor(Math.random()*255), Math.floor(Math.random()*255)); //this needs a new variable to check for all objects acquired, what dept they were acquired by in that year, and the stroke of each object is defined by that variable- write function to itertate through
	  		noFill();
	  		var x;
	  		 if (yearArray[j][0] <= 1500 ) {
	  		 	x = 300;
	  		 } else if (yearArray[j][0] <= 1600 ) {
	  		 	x = 500;
	  		 } else if (yearArray[j][0] <= 1700 ) {
	  		 	x = 600;
	  		 } else if (yearArray[j][0] <= 1800 ) {
	  		 	x = 700; 
	  		 } else if (yearArray[j][0] <= 1900 ) {
	  		 	x = 800; 
	  		 }else if (yearArray[j][0] <= 2018 ) {
	  		 	x = 900; 
	  		 } 

	  		 x = yearArray[j][0] * .01 + x;
	  		 console.log(" x = " + x);
	  		 var h = yearArray[j][2] - yearArray[j][0];
	  		 var w = yearArray[j][2] - yearArray[j][0];
			 arc(x , 550, w, h, PI, TWO_PI);

			//console.log(" h/w : acquired: " + yearArray[j][2] + " created: " + yearArray[j][0] + " h/w: " + h + " , x = " + x);
			//arc(created[i] * 10, 250, acquiredYear - created[i] * 10, acquiredYear - created[i] * 10, PI, TWO_PI);
	  		 //line(created[i] * 10, 250, acquiredYear[j] + 100, 150);

			}

		}

function checkDept(dept) {
		
		//assign fill color;

	}


function drawAll() { // option to have all arcs on the page

	for (var j=0; j < totalArray.length; j++) {
	  		stroke('yellow');//checkDept(dept)); //this needs a new variable to check for all objects acquired, what dept they were acquored by in that year, and the stroke of each object is defined by that variable- write function to itertate through
	  		 noFill();
	  		 var x;
	  		
	  		 if (totalArray[j][0] <= 1500 ) {
	  		 	x = 50;
	  		 } else if (totalArray[j][0] <= 1600 ) {
	  		 	x = 100;
	  		 } else if (totalArray[j][0]<= 1700 ) {
	  		 	x = 200;
	  		 } else if (totalArray[j][0] <= 1800 ) {
	  		 	x = 300; 
	  		 } else if (totalArray[j][0] <= 1900 ) {
	  		 	x = 400; 
	  		 } else if (totalArray[j][0] <= 2000 ) {
	  		 	x = 500; 
	  		 } else if (totalArray[j][0] > 2000 ) {
	  		 	x = 600; 
	  		 }

	  		 //console.log(x);
	  		 x = x + totalArray[j][0] * .01;
	  		 console.log(" x " + x);
	  		 var h = totalArray[j][2] - totalArray[j][0];
	  		 var w = totalArray[j][2] - totalArray[j][0];
			 arc(x , 350, w, h, PI, TWO_PI);
	}
}

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
	//return yearAcquired; 
}


/* KEEP
 //line(created[i] * 10, 250, acquiredYear[j] + 100, 150);
 //arc(selectedYear + 50, 200, dept[i] - selectedYear PI, dept[i] + selectedYear, PI, TWO_PI);
//arc(x,y,w,h,start,stop,[mode])

// variables 

//objects
 x = year made
 y= y -1 (increment for each  item, sort on y axis lphabetically, on x axis by time)


 //arc
 arc = PI + TWO_PI

 x = year made
 y  = constant
 x start= year made
 x stop = year acquired
 height = x/2  (based on x)
 width = xstop - xstart
 stroke = dept cat
	
 

********************************** KEEP ****************************** */


	//how many depts are there? 20
	//department, year created, year acquired- culture or country seem to be more where the work was created, doesn't necessarily match with artist nationality, either way these fields are only available in about 50% of object records
   


/*
function checkYear(x){
    var objectYear = x.split(".", 1 );
	var yearAcquired = Number(objectYear);
	//console.log("year acquired: " + objectYear);
	if (yearAcquired >= 1900) {
		//return yearAcquired;
		yearAcquired = yearAcquired;
		console.log("year acquired: " + yearAcquired );
		allYears.push(yearAcquired);
	} else if (yearAcquired <= 71) {
		yearAcquired  = 1900 + yearAcquired;
		//return yearAcquired;
		console.log("year acquired: " + yearAcquired );
				allYears.push(yearAcquired);


	} else if (yearAcquired  > 71 && yearAcquired  < 1900) {
		yearAcquired  = 1800 + yearAcquired ;
		//return yearAcquired;
		console.log("year acquired: " + yearAcquired );

				allYears.push(yearAcquired);


	} else {
		//return yearAcquired;
		yearAcquired = -1;
		console.log("year acquired: " + yearAcquired );
	}



}
*/

