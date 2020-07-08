 var links = document.getElementsByClassName("nav-link");
 var data;
 var category = "general";


 for (var k = 0; k < links.length; k++) {
     links[k].addEventListener("click", function(e) {
         category = e.target.innerHTML;
         category = category.toLowerCase();
         //console.log(e.target.innerHTML)
         getApi();
     })
 }
 /*
 https://newsapi.org/v2/top-headlines?country=us&apiKey=6d7353b76b194624905f0def2e45ae6e */
 function getApi() {
     var url = "https://newsapi.org/v2/top-headlines?country=eg&category=" + category + "apiKey=6d7353b76b194624905f0def2e45ae6e"

     var myreq = new XMLHttpRequest();
     myreq.open("GET", url);
     myreq.onreadystatechange = function() {
         if (myreq.readyState == 4 && myreq.status == 200) {
             data = myreq.response;
             data = JSON.parse(data);
             data = data.articles;
             showData();

         }
     }
     myreq.send();
 }

 getApi();

 function showData() {
     var row = "";
     for (var i = 0; i < data.length; i++) {
         row += `
              <div class="col-md-4 test mb-5">
              <img src="` + data[i].urlToImage + `"alt="#"class="img-fluid">
              <h1>` + data[i].title + `</h1>
              <p>` + data[i].description + `</p>
              </div>
              `
     }
     document.getElementById("show").innerHTML = row;
 }