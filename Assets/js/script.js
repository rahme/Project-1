$("#search").click(function () {
    let artistSearch = $("#artist").val();
    //console.log(artistSearch)
    fmSearch(artistSearch);
    ticketSearch(artistSearch);
});

function fmSearch(artistSearch){
    console.log(artistSearch)
    artistSearch = encodeURIComponent(artistSearch.trim())
    console.log(artistSearch)

    //Searching for Top Songs
    var queryURL1 = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + artistSearch + "&api_key=c480f7f0a05a2b8e0d17968d01265fbe&format=json"

    $.ajax({
        url: queryURL1,
        method: "GET",
      }).then(function(response) {
  
        console.log(response);

        for(i = 0; i < 3; i++){
          console.log(response.toptracks.track[i].name)
          //$("ID").val(response.toptracks.track[i].name)
        }
      });

//ticketmaster info will be displayed below spotify info

$("#search").click(function () {
    let artistSearch = $("#artist").val();
    //console.log(artistSearch)
    fmSearch(artistSearch);
    ticketSearch(artistSearch);
});

function fmSearch(artistSearch){
    console.log(artistSearch)
    artistSearch = encodeURIComponent(artistSearch.trim())
    console.log(artistSearch)


    //Searching for Top Songs
    var queryURL1 = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + artistSearch + "&api_key=c480f7f0a05a2b8e0d17968d01265fbe&format=json"

    $.ajax({
        url: queryURL1,
        method: "GET",
      }).then(function(response) {
  
        console.log(response);

        console.log(response.toptracks.track[0].name)
        console.log(response.toptracks.track[1].name)
        console.log(response.toptracks.track[2].name)

        $("#songTitle1").val(response.toptracks[0].name)
        $("#songTitle1").val(response.toptracks[1].name)
        $("#songTitle2").val(response.toptracks[2].name)

      });

    //Searching for Artist Info
    var queryURL2 = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artistSearch + "&api_key=c480f7f0a05a2b8e0d17968d01265fbe&format=json"

    $.ajax({
      url: queryURL2,
      method: "GET",
    }).then(function(response) {

      console.log(response);

    });
}

function ticketSearch(artistSearch){
  var queryURL1 = "https://rest.bandsintown.com/artists/" + artistSearch + "/?app_id=45255e6cc480b6c589613047fb0d5749"
  $.ajax({
    url: queryURL1,
    method: "GET",
  }).then(function(response){
    //Response from API
    console.log(response)

    //Number of Events Coming Up
    console.log(response.upcoming_event_count)

    //Artist Image
    console.log()

  })

  var queryURL2 = "https://rest.bandsintown.com/artists/" + artistSearch + "/events/?app_id=45255e6cc480b6c589613047fb0d5749"

  $.ajax({
    url: queryURL2,
    method: "GET",
  }).then(function(response){
    //Response from API
    console.log(response)

    //Number of Events Coming Up
    console.log(response[0].datetime)
    console.log(response[0].venue.location)

    console.log(response[1].datetime)
    console.log(response[1].venue.location)

    console.log(response[2].datetime)
    console.log(response[2].venue.location)
  })
}