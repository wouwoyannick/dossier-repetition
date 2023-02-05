var allcard=document.querySelectorAll(".card")
var nbrelike=document.querySelector(".like")
var favor=document.querySelector("#liveToastBtn")



allcard.forEach(element => {
  var bouton=element.children[1].children[2]
  var span=bouton.children[0]

  bouton.addEventListener("click",function() {
    var like=span.textContent
    var b=parseInt(like)+1
    span.textContent=b

  })
  
});


favor.addEventListener("click",function(){
  var somme=0
  
allcard.forEach(element => {
  var contenu=element.children[1].children[2].children[0].textContent
  somme=somme+parseInt(contenu)
});
nbrelike.textContent=somme+" "

})
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
