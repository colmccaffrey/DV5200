 var imgUrls = [];

 d3.csv("data/evans-objects-title.csv", function(data){
     for (var i=0; i < data.length; i ++){
      console.log("records " + data.length);
      setImgUrl(data[i].object);
 }

});

function setImgUrl(id) {
  var url = 'https://collectionapi.metmuseum.org/api/collection/v1/object/' + id;
  var load = d3.xhr(url)
  .mimeType("application/json")
  .header("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWNjYWMyOTBAbmV3c2Nob29sLmVkdSIsInBlcm1pc3Npb25zIjp7InByb3ZlbmFuY2UiOmZhbHNlLCJ3ZWJMYWJlbCI6ZmFsc2V9LCJleHAiOjQ2NzgxNzgzODV9.HhOOmPn9LVY5C8A0HYKIHqTKIt9RV0ScrwnGfn8P0ag")
  .get(function(error, data){
      if (error) throw error;
     // console.log("data " + data); 
      
      var payload = JSON.parse(data.response); 
      var imgurl = payload.media.images.primaryImage.imageUrl;
      if (imgurl == "" || imgurl == "" || (typeof imgurl == "undefined")) {
        imgurl = "https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG";
        imgUrls.push(imgurl);
      } else {
        imgUrls.push(imgurl);
      }
      console.log("url image " + imgurl);

     })
    
   }

function downloadableCSV(rows) {
  var content = "data:text/csv;charset=utf-8,";

  rows.forEach(function(row, index) {
    //content += row.join(",") + "\n";        
    content += row;

  });

  return encodeURI(content);
}





function downloadImg() {
  var rows = imgUrls;
  console.log("rows " + rows);
  window.open(downloadableCSV(rows));
}
