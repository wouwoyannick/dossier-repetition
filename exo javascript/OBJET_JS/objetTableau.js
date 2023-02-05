const personnes = [
    {type : 'user ', nom: 'Max Mustermann ', age : 25, villes : ['Marseille', 'Lyon', 'Paris']},
    {type : 'admin', nom: 'John Wick', age : 45, villes : ['Paris']},
    {type : 'user', nom: 'Kate Muller', age : 23, villes : ['Nantes', 'Lyon', 'Lille', 'Nice']},
    {type : 'admin', nom: 'Bruce Willis', age : 64, villes : ['Paris', 'Nantes']},
    {type : 'user', nom: 'Jack Wilson', age : 35, villes : ['Marseille', 'Lyon', 'Montpellier']},
    {type : 'admin', nom: 'Carol Smith', age : 23, villes : ['Marseille', 'Nice', 'Montpellier']}
    ];

    Q1: une fonction qui retourne la liste des personnes selon le type passée en paramètre.
function getByType(type: string): Array<Object> 

    var type=prompt("entrer le type de personne")

    const getBytype=(a)=>{
        return(
            personnes.filter((item)=>{
            return(
                item.type==a
            )
        })
        )
    }
    console.log(getBytype(type));

/Q2: Une fonction qui retourne la liste des personnes ayant dans villes, la ville passée en parametre.
function getByVille(ville: string): Array<Object>{


    var ville=prompt("entre une ville")

    const getByVille=(a)=>{
        return(
            personnes.filter((item)=>{
                return(
                    item.villes.some((element)=>{
                        return(
                            element==a
                        )
                    })===true
                      
                )
            })
        )
    }
    console.log(getByVille(ville));


Q3: Une fonction qui retourne la liste des personnes n'ayant pas dans villes, la ville passée en paramètre.
function getOtherVilleThan(ville: string): Array<Object>{

var ville=prompt("entrer une ville")

const  getOtherVilleThan=(a)=>{
    return(
        personnes.filter((item)=>{
            return(
                item.villes.every((element)=>{
                    return(
                        element==a
                    )
                })===false
               
            )
        })
       
    )
}
console.log(getOtherVilleThan(ville));



// /* Q4: Une fonction qui retourne un tableau d'objets : chaque objet contient le nom d'une personne ainsi que
// son nombre de villes (voir ci-dessous).


    const countvilles=()=>{
        return(
            personnes.map((item)=>{
                return(
                    {
                        nom:item.nom,
                        nbreVille:item.villes.length
                    }
                )
            })
        
        )
        
    }
    console.log(countvilles());


   



// // Q5: Une fonction qui retourne les personnes dont le nombre de villes d'intervention correspond au paramèt
// re nbr.

    var nbreVille=prompt("entrer le nombre de ville")

    const getByVillesNumber=(a)=>{
        return(
            personnes.filter((item)=>{
                return(
                    item.villes.length==a       
                )
           })   
        )
    }

    console.log(getByVillesNumber(nbreVille));



// /*Q6: Une fonction qui retourne un tableau d'objets : chaque objet contient le nom d'une personne ainsi que l
// e nombre total de

    var countCharacterInVilles=()=>{
        return(
            personnes.map((item)=>{
                return(
                    {
                        nom:item.nom,
                        total:item.villes.map((ville)=>{
                            return(
                                ville.length
                            )
                        }).reduce((a,b)=>{
                            return a+b
                        })
                         
                    }
                )
            })   
        )
    }
    console.log(countCharacterInVilles());



    const countCharacterInVilles=()=>{
        return(
            personnes.map((item)=>{
                return(
                    {
                        nom:item.nom,
                        total:item.villes.map((ville)=>{
                            return(
                                ville.length
                            )
                        }).reduce((a,b)=>{
                            return a+b
                        })
                    }
                )
            })
        )
    }
       






//     /* Q7: Une fonction qui retourne le nombre de personnes qui interviennent dans la ville passée
// en parametre (ici c'est 3 pour Marseille par exemple).*/

//     //  var ville=prompt("entrer la ville")
//     //  const countByVille=(a)=>{
//     //     return(
//     //         {
//     //          nbreDepersonne: personnes.filter((item)=>{
//     //             return(
//     //                 item.villes.some((ville)=>{
//     //                     return(
//     //                         ville==a
//     //                     )
//     //                 })===true  
//     //             )
//     //          }).length
//     //         }
//     //     )    
//     //     } 
        
//     //     console.log(countByVille(ville));
   
   

    


        



    
        
          


   



// // var oddItem=personne.filter((item)=>{    
// //          return item      
// // })
// // console.log(oddItem);




// // var somme=personne.reduce((m,n)=>{
// //     return 
// // })
// // console.log(somme);





// // var verifiedINfFour=personne.every((a)=>{    
// //          return a<40      
// // })
// // console.log(verifiedINfFour);



// // var personne=[marseille,lyon,paris,nante,lille,nice,Montpellier]






