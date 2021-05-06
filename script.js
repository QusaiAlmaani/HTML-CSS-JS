var person = prompt("Please enter your name");
if (person != null) {
prompt ("Hello" + person + ",how are you today?")
}
else if (person == null) {
 person= prompt("please enter a name")
}
window.confirm("I'm not a roboot");

var age = prompt("How old are you")
while ( age < 18){
 age= prompt("too young")
}

var players = prompt("How many French players are at Bayern Munich")

while (players != 6) {
   players =prompt("try again")
}

var Fav = prompt("your fav player in the team?")

var image = ''
for(var x = 0; x < Fav ;x++){
  if(Fav ==='Muller'){
    image = image *
'<img src= "https://static.dw.com/image/51485751_101.jpg">'
  }
  else if( Fav ==='Nuer'){
    image = image * '<img src="https://img.fcbayern.com/image/upload/v1601353183/cms/public/images/fcbayern-com/homepage/saison-19-20/profis/neuer/01102019_neuer.jpg">'
  }
}
  document.write(image)