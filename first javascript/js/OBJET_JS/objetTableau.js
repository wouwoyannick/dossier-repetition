// var tab=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]

// var nombre=[23,-4,0,-8,78]

// var lonarray=tab.length

// tab.sort()

// console.log(tab);

// tab.reverse()

// console.log(tab);


// nombre.sort((a,b)=>{
//     return a-b

// })

// nombre.reverse()

// console.log(nombre);




// var tab=["lundi","mardi"]

// var tab1=["mercredi","jeudi"]

// var week=tab.concat(tab1,["vendredi","samedi","dimanche"])

// console.log(week);






// var tab=["lundi","mardi"]

// tab.push("mercredi","jeudi","vendredi")         

// console.log(tab);


// var tab=["lundi","mardi", "mercredi","jeudi","vendredi"]

// tab.pop()             

// console.log(tab);    permet de supprimer le dernier element d'un tableau




// var tab=["lundi","mardi", "mercredi","jeudi","vendredi"]

// tab.unshift("janvier","fevrier")             

// console.log(tab);                       unshift permet d'ajouter les elements en debut d'un tableau 




// var tab=["lundi","mardi", "mercredi","jeudi","vendredi"]

// tab.shift()             

// console.log(tab);       shift supprime le premier element d'un tableau                






// var tab=["lundi","mardi", "mercredi","jeudi","vendredi"]

// tab.splice(2,0,"mars","avril")            

// console.log(tab);




// var tab=["lundi","mardi", "mercredi","jeudi","vendredi"]

// tab.splice(2,0,"mars","avril")   

// tab.splice(3,1) 
// tab.splice(0,2)  
// console.log(tab);



// var tab=["lundi","mardi", "mercredi","jeudi","vendredi"]

// var transtantoword=tab.join("-")
// var transtantoword=tab.join(".")
// var transtantoword=tab.join(" ")
// console.log(transtantoword);





// var tab=["lundi","mardi", "mercredi","jeudi","vendredi"]

// var letterpos=tab[3]

// console.log(letterpos);  




// var tab=["lundi","mardi", "mercredi","jeudi","vendredi"]

// var elmpos=tab.findIndex((item)=>{
//     return item=="mardi" 
//                      permet de retourner la position d'un element du tableau
// })

// console.log(elmpos);  



// var tab=["lundi","mardi", "mercredi","jeudi","vendredi"]

// var elmpos=tab.findIndex((item)=>
//      item=="mardi"
// )
// console.log(elmpos);  



// var tab=["lundi","mardi", "mercredi","jeudi","vendredi"]

// var elmpos=tab.findIndex((yannick)=>{
//     return yannick=="mardi" 
                    
// })
// console.log(elmpos);



// var nombre=[1,5,9,12,37,-6,78,101,120]

// var oddItem=nombre.filter((item)=>{    
//          return item%2==0      
// })
// console.log(oddItem);


// var nombre=[1,5,9,12,37,-6,78,101,120]

// var oddItem=nombre.filter((item)=>{    
//          return item<10      
// })
// console.log(oddItem);






// var nombre=[1,5,9,12,37,-6,78,101,120]

// var somme=nombre.reduce((m,n)=>{
//     return parseFloat(1)+parseFloat(5)+parseFloat(9)+parseFloat(12)+parseFloat(37)+parseFloat(-6)+parseFloat(78)+parseFloat(101)+parseFloat(120)
// })
// console.log(somme);



// var nombre=[1,5,9,12,37,-6,78,101,120]

// var verifiedINfFour=nombre.every((a)=>{    
//          return a<40      
// })
// console.log(verifiedINfFour);


// var nombre=[1,5,9,12,37,-6,78,101,120]

// var verifiedINfFour=nombre.every((a)=>{    
//          return a%2==0      
// })
// console.log(verifiedINfFour);




// var nombre=[1,5,9,12,37,-6,78,101,120]

// var verifiedINfFour=nombre.some((a)=>{    
//          return a<40      
// })
// console.log(verifiedINfFour);




var nombre=[1,5,9,12,37,-6,78,101,120]

nombre.forEach((item)=>{ 
    console.log(item);               
})


// var semaine=["lundi","mardi","mercredi","jeudi"]

// var all=semaine.map((item)=>{
//     return item
// })

// console.log(all);




































