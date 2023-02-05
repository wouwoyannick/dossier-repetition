var nom=document.getElementById("nom")
var nbre=document.getElementById("nber")
var bouton=document.querySelector("button")






var mot=document.getElementById("nom")
var bouton=document.querySelector("button")
var aff=document.querySelector(".affiche")


bouton.addEventListener("click",function() {


  var wordToTab=mot.value.split("")

  var reverseWord=wordToTab.reverse()


  var tabToword=reverseWord.join("")


  aff.textContent=tabToword

})


// var tache=document.querySelector("input")
// var liste=document.querySelector("ol")
// var bouton=document.querySelector("button")



// bouton.addEventListener("click",function () {
//   liste.innerHTML=liste.innerHTML+'<li class="list-group-item">'+tache.value+'</li>'
// })




