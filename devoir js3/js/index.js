var continent=document.getElementById("continent")
var pays=document.getElementById("pays")




var paysAfrique=["cameroun","tchad","congo","nigeria"]
var paysAsie=["chine","japon","inde"]
var paysEurope=["france","belgique","italie"]


continent.addEventListener("change",function() {
  if (this.value==="afrique"){
    var options=paysAfrique.map((item)=> {
      return(
        "<option>"+item+"</option>"
      )
    })
    pays.innerHTML=options
  } else if(this.value==="asie"){
    var options=paysAsie.map((item)=> {
      return(
        "<option>"+item+"</option>"
      )
    })
    pays.innerHTML=options
  }else if(this.value==="europe") {
    var options=paysEurope.map((item)=>{
      return(
        "<option>"+item+"</option>"
      )
    })
    pays.innerHTML=options
  } else{
    pays.innerHTML="<option>choose</option>"
  }
})















