$("#searchSubmit").on("click", function(){
  var search = $("#searchInput").val();
  var url = "https://itunes.apple.com/search?limit=10&";
  var searchUrl = getUrl(search, url);
  $.ajax({
    type: 'GET',
    url: searchUrl,
    dataType: 'jsonp',
    success: function(songs){
      displayResults(songs);
    }
  });
});
function displayResults(songs){
  var result = $('#results');
  var song = songs.results;
  for(var i = 0; i <song.length;i++){
    result.append('<tr><td>'+ song[i].artistName +'</td>'
    +'<td>'+ song[i].trackName +' </td>'
    +'<td>'+'<audio controls>'+"<source src="+song[i].previewUrl+"></audio>"+'</td></tr>');
  }
}