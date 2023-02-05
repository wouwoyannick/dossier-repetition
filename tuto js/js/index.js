var nom=document.getElementById("nom")
var pass=document.getElementById("pass")
var check=document.getElementById("check")
var range=document.getElementById("range")
var bouton=document.querySelector("button")
var formulaire=document.querySelector("form")
var icon=document.querySelector("i")




var nomF=document.querySelector(".nom")
var passF=document.querySelector(".pass")
var poidsF=document.querySelector(".poids")




check.addEventListener("click",function() {
  var attr=pass.getAttribute("type")


  if (attr==="password") {
    pass.setAttribute("type","text")
  } else {
    pass.setAttribute("type","password")
  }
})

formulaire.addEventListener("submit",function(e) {
 e.preventDefault()
 
 
 document.querySelector("table").classList.remove("cacher")

 nomF.textContent=nom.value
 passF.textContent=pass.value
 poidsF.textContent=range.value
})



