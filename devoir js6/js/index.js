var qte=document.getElementById("qte")
var prix=document.querySelector("span")
var bouton=document.querySelector("button")
var paie=document.querySelectorAll("input[type=radio]")








var mode=""
if (mode==="") {
  mode="NON CHOISI"
}






qte.addEventListener("change",function(){
  prix.textContent=(2000*this.value)
})

paie.forEach((item)=>{
  item.addEventListener("click",function() {
    mode=this.value
  })
})


bouton.addEventListener("click",function() {
  var text="vous avez choisi "+qte.value+" telephone"+
          "\nEt cela vous coute "+prix.textContent+
          "\nEt votre mode de paiement est "+mode


  alert(text)
})



