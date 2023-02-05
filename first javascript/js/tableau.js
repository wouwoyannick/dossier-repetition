//  var tab=['wabo',67,5,6,true]

//  console.log(tab[2]);

//  tab[3]="yann ivan"





// TABLEAU A UNE DIMENSION

//  var tab=["lundi","mardi",5,-8,4.8,false]

//  console.log(tab)

//  console.log(tab[4])

//  tab[2]='jeudi'


//  console.log(tab)



//   TABLEAU A DEUX DIMENSION



//  var tab2=[["lundi","jeudi","samedi"],5,true,[4,6,-9,0.9]]

//  console.log(tab2)
//  tab[3][3]=18







//  var nombre=prompt("entrer un nombre")
//  var p=""

//  for (let i=1;i<=nombre; i++) {

//  }if (i%2!=0) {
//    p=p+i+' '
//  }



// console.log('les nombres impairs compris entre 1 et '+nombre+' est\n'+p)


// var nombre=prompt("entrer un nombre")

// var p=""

// for (let i=1;i<=nombre; i++) {
//    p=p+(parseFloat(nombre))+" "
// }
// console.log("les nombres qui suivent "+nombre+" sont:"+p)   



//var nombre=prompt("entrer un nombre")

//var p=""

//for (let i=1; i<=12 i++) {
  //  p=p+nombre+"  *  "+" = "+(nombre*i)+"\n"

//}

//consol.log("la table de multiplication de "+nombre+" est:\n"+p)



var nombre=prompt("entrer un nombre")

var p=1

for (let i=1 <=)














var effectif=prompt("entrer le nombre de la classe");

var tab=[]
var somme=0
var j=0


for (let i=0; i<=(effectif-1); i++) {
    tab[i]=prompt("entrer la note numero"+(i+))
}

for (let i=0; i<= (effectif-1); i++) {
    somme=somme+parseFloat(tab[i])
}
var moy=somme/effectif


for (let i=0; i<= (effectif-1); i++) {
    if (tab[i]>moy) {
        j++
    }
}

console.log("la moyenne de la classe est:"+moy+"\net le nombre est:"+j)




