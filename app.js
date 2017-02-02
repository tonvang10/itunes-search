function getUrl(song, url){
  song = song.replace(" ");
  url = url+"term="+song;
  return url;
}