// alert("glädjens dag, det är fredag!");
// var namn = prompt("Vad heter du?");
// var ålder = prompt("hur gammal är du?");
// alert("hej, " + namn+ " du är " + ålder + " gammal");
// console.log("Det verkar funka det här")

// be användaren mat in 2 tal och skriv suman

// var tal1string = prompt("ange tal 1?");
// var tal2string = prompt("ange tal 2 ?");
// var summan = parseInt(tal1string) + parseInt(tal2string);
// alert("hej, din summa är " + summan ); 

// be användaren mata in sin ålder 
// och skriv ut ålder studenten

// var tal1string = prompt("ange tal 1?");
// var tal2string = 19
// var antal = parseInt(tal2string) - parseInt(tal1string);
// // alert("hej, din studenten är i " + antal + " år"); 
// document.writeln("<h2>hej, din studenten är i " + antal + " år</h2>")

// spamcheck
// fråga användaren vad slumpad "summa"
var slumptal1 = Math.floor(Math.random() * 100);
var slumptal2 = Math.floor(Math.random() * 100);
var summa = slumptal1 + slumptal2
console.log(slumptal1, slumptal2);
var gissning = prompt("vad är summan av " + slumptal1 + " + " + slumptal2 + " ? ");
if (gissning == summa) {
    document.writeln("<h2>Good Boy<h2>");
} else {
    document.writeln("<h2>Bad Boy<h2>");
}