
// var ol=document.querySelector("ol")

// var span=document.querySelector("span")



// var enfol=ol.children



// for (let index = 0; index < enfol.length; index++) {
//   var li=enfol[index]

//   li.addEventListener("click",function() {
//     span.textContent=this.textContent
//   }) 
// }


var ol=document.querySelector("ol")
var span=document.querySelector("span")


var enfol=ol.children


for (let index = 0; index < enfol.length; index++) {
  var li = enfol[index]


  li.addEventListener("click",function(){
    span.textContent=this.textContent
  }) 
}



