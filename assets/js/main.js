/// survey part
function displayMovieInfo(movieName, movieName2, movieName3) {

  var queryURL = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      var movieDiv = $("<div class='movie'>");

      // var for title and append title to div
      var title = response.Title;
      var pOne = $("<p>").text("Title: " + title);
      movieDiv.append(pOne);

      // var for release and response
      var released = response.Released;
      var pTwo = $("<p>").text("Released: " + released);
      movieDiv.append(pTwo);

      // var for rating
      var rating = response.Rated;
      var pThree = $("<p>").text("Rating: " + rating);
      movieDiv.append(pThree);

      // var for plot
      var plot = response.Plot;
      var pFour = $("<p>").text("Plot: " + plot);
      movieDiv.append(pFour);

      // var for metascore
      var metascore = response.Metascore;
      var pFive = $("<p>").text("Metascore: " + metascore);
      movieDiv.append(pFive);

      // Var for poster
      var imgURL = response.Poster;
      var image = $("<img>").attr("src", imgURL);
      movieDiv.append(image);

      // Putting items into the div
      $("#omdbAPI").append(movieDiv);
    });


  var queryURL = "https://www.omdbapi.com/?t=" + movieName2 + "&y=&plot=short&apikey=trilogy";
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      var movieDiv = $("<div class='movie'>");

      // var for title and append title to div
      var title = response.Title;
      var pOne = $("<p>").text("Title: " + title);
      movieDiv.append(pOne);

      // var for release and response
      var released = response.Released;
      var pTwo = $("<p>").text("Released: " + released);
      movieDiv.append(pTwo);

      // var for rating
      var rating = response.Rated;
      var pThree = $("<p>").text("Rating: " + rating);
      movieDiv.append(pThree);

      // var for plot
      var plot = response.Plot;
      var pFour = $("<p>").text("Plot: " + plot);
      movieDiv.append(pFour);

      // var for metascore
      var metascore = response.Metascore;
      var pFive = $("<p>").text("Metascore: " + metascore);
      movieDiv.append(pFive);

      // Var for poster
      var imgURL = response.Poster;
      var image = $("<img>").attr("src", imgURL);
      movieDiv.append(image);

      // Putting items into the div
      $("#omdbAPI2").append(movieDiv);
    });

  var queryURL = "https://www.omdbapi.com/?t=" + movieName3 + "&y=&plot=short&apikey=trilogy";
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      var movieDiv = $("<div class='movie'>");

      // var for title and append title to div
      var title = response.Title;
      var pOne = $("<p>").text("Title: " + title);
      movieDiv.append(pOne);

      // var for release and response
      var released = response.Released;
      var pTwo = $("<p>").text("Released: " + released);
      movieDiv.append(pTwo);

      // var for rating
      var rating = response.Rated;
      var pThree = $("<p>").text("Rating: " + rating);
      movieDiv.append(pThree);

      // var for plot
      var plot = response.Plot;
      var pFour = $("<p>").text("Plot: " + plot);
      movieDiv.append(pFour);

      // var for metascore
      var metascore = response.Metascore;
      var pFive = $("<p>").text("Metascore: " + metascore);
      movieDiv.append(pFive);

      // Var for poster
      var imgURL = response.Poster;
      var image = $("<img>").attr("src", imgURL);
      movieDiv.append(image);

      // Putting items into the div
      $("#omdbAPI3").append(movieDiv);
    });
};

function convertUserZiptoLatLng(zipcode, endLatLong) {
  var clientKey = "QmickmMnvv1kDXEi9xhlBS4tq6HtlE3AhtRwW5k5EOFBoJi2SaYAbD9AOw2eQNqL";
  var zipAPIUrl = "https://www.zipcodeapi.com/rest/" + clientKey + "/info.json/" + zipcode + "/degrees";
  var startLatLong;
  // https://www.zipcodeapi.com/rest/<api_key>/info.<format>/<zip_code>/<units>
  // https://www.zipcodeapi.com/rest/ N/info.json/55426/degrees
  $.ajax({
    "url": zipAPIUrl,
    method: "GET"
  })

    .then(function (response) {
      startLatLong = { lat: response.lat, lng: response.lng };
    })

    .then(function () {
      var directionsService = new google.maps.DirectionsService();
      var directionsDisplay = new google.maps.DirectionsRenderer();
      var start = startLatLong;
      var end = endLatLong;
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      directionsDisplay.setMap(map);
      directionsDisplay.setPanel(document.getElementById('panel'));
      var request = {
        origin: startLatLong,
        destination: endLatLong,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
      };
      directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        } else {
          directionsDisplay.setDirections(response);
        }
      });
    }).then(function () {
    });
};

function printArray(array) {
  for (var i = 0; i < array.length; i++) {
  }
};

$(document).ready(function () {
  var infoArray = [];
  var infoArrayTwo = [];
  $("#movieSurvey_container").hide();
  $("#omdbAPI").hide();
  $("#googleMapAPI").hide();
  $("#start_button").on("click", function () {
    // Hide the start Div from the user
    $("#startContainer").hide();
    $("#survey").hide();
    $("#start_button").hide();
    // Show the Game Div
    $("#movieSurvey_container").show();
    $("#errorMessage").hide();
    $("#errorMessage2").hide();
    ;
  });

  $("#done_button").on("click", function () {
    $("#backButton").hide();
    var userZipcode = $("#userZipcode").val();
    var userID = $("#userID").val();
    var genreVar = $('input:radio[name="genreVar"]:checked').val();
    var lengthVar = $('input:radio[name="lengthVar"]:checked').val();
    var ratingVar = $('input:radio[name="ratingVar"]:checked').val();
    if (userZipcode.length != 5 || isNaN(userZipcode) === true || userID === '') {
      $("#errorMessage").show();
    }

    if (userZipcode.length === 5 && isNaN(userZipcode) === false && userID != '') {
      $("#errorMessage").hide();
    }

    if (genreVar != "Action" && genreVar != "Documentery" && genreVar != 'Romance'
      && lengthVar != 'Shorter' && lengthVar != 'Longer'
      && ratingVar != 'PG' && ratingVar != 'PG13' && ratingVar != 'R') {
      $("#errorMessage2").show();
    }

    else {
      $("#movieSurvey_container").hide();
      $("#omdbAPI").show();
      $("#omdbAPI2").show();
      $("#omdbAPI3").show();
      $("#googleMapAPI").show();
      var userID = $("#userID").val();
      console.log(userID);
      var userZipcode = $("#userZipcode").val();
      console.log(userZipcode);
      var genreVar = $('input:radio[name="genreVar"]:checked').val();
      console.log(genreVar);
      var lengthVar = $('input:radio[name="lengthVar"]:checked').val();
      console.log(lengthVar);
      var ratingVar = $('input:radio[name="ratingVar"]:checked').val();
      console.log(ratingVar);
      infoArray.push(userID);
      infoArray.push(userZipcode);
      $("#title").html(userID + "! here are your movie and destination suggestions");
      var movieObject = [
        {
          name: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
          genre: "Action",
          length: "Longer",
          rating: "PG",
          latLong: { lat: 44.953, lng: -93.090 },
        },
        {
          name: 'Night at the Museum',
          genre: "Action",
          length: 'Shorter',
          rating: "PG",
          latLong: { lat: 40.781, lng: -73.974 },
        },
        {
          name: 'Avengers',
          genre: "Action",
          length: "Longer",
          rating: "PG13",
          latLong: { lat: 35.073, lng: -106.617 },
        },
        {
          name: 'Thor',
          genre: "Action",
          length: 'Shorter',
          rating: "PG13",
          latLong: { lat: 35.407, lng: -105.94 },
        },
        {
          name: 'Zombieland',
          genre: "Action",
          length: 'Shorter',
          rating: "R",
          latLong: { lat: 44.974, lng: -93.267 },
        },
        {
          name: 'The Matrix',
          genre: "Action",
          length: "Longer",
          rating: "R",
          latLong: { lat: 37.774, lng: -122.419 },
        },
        {
          name: 'Vertigo',
          genre: 'Romance',
          length: "Longer",
          rating: "PG",
          latLong: { lat: 37.774, lng: -122.419 },
        },
        {
          name: 'Casablanca',
          genre: 'Romance',
          length: "Shorter",
          rating: "PG",
          latLong: { lat: 35.198, lng: -111.651 },
        },
        {
          name: 'Romeo + Juliet',
          genre: 'Romance',
          length: "Longer",
          rating: "PG13",
          latLong: { lat: 19.419, lng: -99.189 },
        },
        {
          name: "Isn't It Romantic",
          genre: 'Romance',
          length: 'Shorter',
          rating: "PG13",
          latLong: { lat: 40.712, lng: -74.005 },
        },
        {
          name: 'If Beale Street Could Talk',
          genre: 'Romance',
          length: 'Shorter',
          rating: "R",
          latLong: { lat: 40.936, lng: -73.989 },
        },
        {
          name: 'The Ballad of Buster Scruggs',
          genre: 'Romance',
          length: "Longer",
          rating: "R",
          latLong: { lat: 41.938, lng: -103.809 },
        },
        {
          name: 'Meet the Patels',
          genre: 'Documentery',
          length: 'Shorter',
          rating: "PG",
          latLong: { lat: 34.052, lng: -118.243 },
        },
        {
          name: 'The Memory of Justice',
          genre: 'Documentery',
          length: "Longer",
          rating: "PG",
          latLong: { lat: 40.357, lng: -74.667 },
        },
        {
          name: 'Hoop Dreams',
          genre: 'Documentery',
          length: "Longer",
          rating: "PG13",
          latLong: { lat: 41.878, lng: -87.629 },
        },
        {
          name: 'Freeheld',
          genre: 'Documentery',
          length: 'Shorter',
          rating: "PG13",
          latLong: { lat: 40.796, lng: -73.699 },
        },
        {
          name: 'Keep the River on Your Right: A modern Cannibal Tale',
          genre: 'Documentery',
          length: 'Shorter',
          rating: "R",
          latLong: { lat: 40.783, lng: -73.971 },
        },
        {
          name: 'Woodstock',
          genre: 'Documentery',
          length: "Longer",
          rating: "R",
          latLong: { lat: 41.654, lng: -74.915 },
        },
      ];
      for (var i = 0; i < movieObject.length; i++) {
        if (movieObject[i].genre === genreVar &&
          movieObject[i].length === lengthVar &&
          movieObject[i].rating === ratingVar) {
          //infoArray[2]
          infoArray.push(movieObject[i].name);
          //infoArray[3] is movie location
          infoArray.push(movieObject[i].latLong);
        }
        //this if function grabs the other 2 movies to use as a recommendation for repeating elements
        if (movieObject[i].genre === genreVar &&
          movieObject[i].length === lengthVar &&
          movieObject[i].rating != ratingVar) {
          infoArrayTwo.push(movieObject[i].name);
          infoArrayTwo.push(movieObject[i].latLong);
        }
      };
      //code the api thingy that will push the movie to the omdbAPI
      displayMovieInfo(infoArray[2], infoArrayTwo[0], infoArrayTwo[2]);
      convertUserZiptoLatLng(infoArray[1], infoArray[3]);
      printArray(infoArray);
      $("#panel").hide();
    };
  });
});

$("#directions").on("click", function () {
  $("#movieSurvey_container").hide();
  $("#omdbAPI").hide();
  $("#startContainer").hide();
  $("#survey").hide();
  $("#start_button").hide();
  $("#omdbAPI").hide();
  $("#omdbAPI2").hide();
  $("#omdbAPI3").hide();
  $("#backButton").show();
  $("#directions").hide();
  $("#googleMapAPI").show();
  $("#panel").show();
  $("#title").html("Directions!");
})

$("#backButton").on("click", function () {
  $("#backButton").hide();
  $("#movieSurvey_container").hide();
  $("#omdbAPI").show();
  $("#omdbAPI2").show();
  $("#omdbAPI3").show();
  $("#googleMapAPI").show();
  $("#panel").hide();
  $("#directions").show();
  $("#title").html(userID + "! here are your movie and destination suggestions");
})