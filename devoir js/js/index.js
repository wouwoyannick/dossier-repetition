var image=document.querySelector("img")
var image=document.querySelector("img")





image.addEventListener("click",function(e){
  e.preventDefault()


  var src=image.getAttribute("src")


  if (src==="image/emoji souris.jpg") {
    image.setAttribute("src","image/emoji triste.jpg")
  } else {
    image.setAttribute("src","image/emoji souris.jpg")
  }
})
































































// image.addEventListener("click",function(e){
//   e.preventDefault()

// var src=image.getAttribute("src")

// if (src==="image/iphone1.jpg") {
//   image.setAttribute("src","image/iphone2.jpg")
// } else {
//   image.setAttribute("src","image/iphone1.jpg")
// }
// })


