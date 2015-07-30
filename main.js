var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

var reRemove = /[*@(!]/g;
var afterRemove ;

for (var i = 0; i < songs.length; i++) {
  document.write("BEFORE: " + songs[i] + "<br>");
  afterRemove = songs[i].replace(reRemove, "") ;
  afterRemove = afterRemove.replace(">", "-");
  document.write("AFTER: " + afterRemove + "<br><br>");
}
