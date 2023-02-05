//function affichage () {
   // return "bonjour"
//}



//function affichage(nom) {
   // return "bonjour "+nom
//}

//function affichage(nom) {
  //  return "bonjour "+nom
//}

//var nom=prompt("entrer votyre nom")
//console.log(qffichage(nom))




//function max(m,n) {
  //  if (m<n) {
    //    return "le plus grand est "+m
    //} else {
      //  return "le plus grand est "+n
    //}
//}



// function affichage(a) {
//     return "bonjour "+a
// }

// var nom=prompt("entrer votre nom")

// console.log(affichage(nom))

// console.log(max(5,7))




var tab=[1,2,3,4,5,6,7,8,9]

var p=" "


for (let i=0; i<=8; i++) {
    if (tab[i]==5) {
        continue
    }
    p=p+tab[i]+" "
}


for (let i=0; i<=8; i++) {
    if (tab[i]==7) {
        break
    }
    p=p+tab[i]+" "
}
console.log(p);








// setTimeout(() => {
//     console.log("bonjour");
// }, 3000);

// var n=10

// setInterval(() => {
//     n--
//     console.log(n);

// },1000);

