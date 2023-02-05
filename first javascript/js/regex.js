var mot="je suis en cours à Ange raphael"

let m=mot.search("cours")
let m=mot.search("/cours/i")

console.log(m);

var mot="je suis en cours à Ange raphael"

let remplace=mot.replace("cours","matiere")

console.log(remplace);

var mot=mot.replace("/Cours/i","matiere")
console/log(remplace);


var mot="je suis en cours à ange raphael"

var trouve=mot.match(/[a-zA-Z]/g)

console.log(trouve);


