var principal=document.getElementById("principal")


var IphoneAll=document.querySelectorAll("#iphone")


IphoneAll.forEach((item)=>{
  item.addEventListener("click",function() {
    var src=item.getAttribute("src")



    principal.setAttribute("src",src)

  })
  
})
























