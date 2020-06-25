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
  var events = 0;
  
  $.ajax({
    url: queryURL1,
    method: "GET",
  }).then(function(response){
    //Response from API
    console.log(response)

    //Number of Events Coming Up
    console.log(response.upcoming_event_count)
    events = response.upcoming_event_count

    //Artist Image
    console.log(response.image_url)

  })

  var queryURL2 = "https://rest.bandsintown.com/artists/" + artistSearch + "/events/?app_id=45255e6cc480b6c589613047fb0d5749"

  $.ajax({
    url: queryURL2,
    method: "GET",
  }).then(function(response){
    //Response from API
    console.log(response)
    console.log(events)

    if(events > 0){
          //Number of Events Coming Up
    let date0 = new Date( Date.parse(response[0].datetime))
    console.log(date0)
    console.log(response[0].venue.location)

    let date1 = new Date( Date.parse(response[1].datetime))
    console.log(date1)
    console.log(response[1].venue.location)

    let date2 = new Date( Date.parse(response[2].datetime))
    console.log(date2)
    console.log(response[2].venue.location)
    }
    else{
      
    }


  })
}