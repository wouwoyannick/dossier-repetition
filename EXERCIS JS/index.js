//exo1
// const personnes = [
//     {type : 'user', nom: 'Max Mustermann ', age : 25, villes : ['Marseille', 'Lyon', 'Paris']},
//     {type : 'admin', nom: 'John Wick', age : 45, villes : ['Paris']},
//     {type : 'user', nom: 'Kate Muller', age : 23, villes : ['Nantes', 'Lyon', 'Lille', 'Nice']},
//     {type : 'admin', nom: 'Bruce Willis', age : 64, villes : ['Paris', 'Nantes']},
//     {type : 'user', nom: 'Jack Wilson', age : 35, villes : ['Marseille', 'Lyon', 'Montpellier']},
//     {type : 'admin', nom: 'Carol Smith', age : 23, villes : ['Marseille', 'Nice', 'Montpellier']}
//     ]
//     var type=prompt('entre le type de personnes')

//     const getByType=(a)=>{
//         return(
//             personnes.filter((item)=>item.type==a)
//         )
//     }
//     console.log(getByType(type));

// exo2 la fonction true permen d'afiche tout ceu qui son pase par la ville
// const personnes=[
//     {type : 'user', nom: 'Max Mustermann ', age : 25, villes : ['Marseille', 'Lyon', 'Paris']},
//     {type : 'admin', nom: 'John Wick', age : 45, villes : ['Paris']},
//     {type : 'user', nom: 'Kate Muller', age : 23, villes : ['Nantes', 'Lyon', 'Lille', 'Nice']},
//     {type : 'admin', nom: 'Bruce Willis', age : 64, villes : ['Paris', 'Nantes']},
//     {type : 'user', nom: 'Jack Wilson', age : 35, villes : ['Marseille', 'Lyon', 'Montpellier']},
//     {type : 'admin', nom: 'Carol Smith', age : 23, villes : ['Marseille', 'Nice', 'Montpellier']}
//     ]


//     var ville=prompt('entre votre ville')

//     const getByville=(a)=>{
//         return(
//             personnes.filter((item)=>{
//                 return(
//                     item.villes.some((item)=>{
//                         return item==a
//                     })==true
//                 )
//             })
//         )
//     }
//             console.log( getByville(ville));

// exo3 la fonction (false) permen de retour tout se qui ne son pas pase par la ville
// const personnes = [
//     {type : 'user ', nom: 'Max Mustermann ', age : 25, villes : ['Marseille', 'Lyon', 'Paris']},
//     {type : 'admin', nom: 'John Wick', age : 45, villes : ['Paris']},
//     {type : 'user', nom: 'Kate Muller', age : 23, villes : ['Nantes', 'Lyon', 'Lille', 'Nice']},
//     {type : 'admin', nom: 'Bruce Willis', age : 64, villes : ['Paris', 'Nantes']},
//     {type : 'user', nom: 'Jack Wilson', age : 35, villes : ['Marseille', 'Lyon', 'Montpellier']},
//     {type : 'admin', nom: 'Carol Smith', age : 23, villes : ['Marseille', 'Nice', 'Montpellier']}
//     ]
//     var ville=prompt('entre votre ville')

//     const getOtherVilleThan=(a)=>{
//         return(
//             personnes.filter((item)=>{
//                 return(
//                     item.villes.some((item)=>{
//                         return item==a
//                     })==false
//                 )
//             })
//         )
//     }
//             console.log( getOtherVilleThan(ville));

//exo4 
// const personnes = [
//     {type : 'user ', nom: 'Max Mustermann ', age : 25, villes : ['Marseille', 'Lyon', 'Paris']},
//     {type : 'admin', nom: 'John Wick', age : 45, villes : ['Paris']},
//     {type : 'user', nom: 'Kate Muller', age : 23, villes : ['Nantes', 'Lyon', 'Lille', 'Nice']},
//     {type : 'admin', nom: 'Bruce Willis', age : 64, villes : ['Paris', 'Nantes']},
//     {type : 'user', nom: 'Jack Wilson', age : 35, villes : ['Marseille', 'Lyon', 'Montpellier']},
//     {type : 'admin', nom: 'Carol Smith', age : 23, villes : ['Marseille', 'Nice', 'Montpellier']}
//     ]


//         const nbreVilleParPersonne=()=>{
//             return(
//            personnes.map((item)=>{
//             return(
//                 {
//                     nom:item.nom,
//                     nbreVille:item.villes.length
//                 }
//             )
//            })
//             )
//         }
        
//                 console.log(nbreVilleParPersonne());

//exo5 map perme juiste de retourne le tableau me avec le nbre de ville parcouru
//exo6 sa perme d'entre un chifre et sa te donne le mon de la personne qui a fait cette nbre de ville
const personnes = [
    {type : 'user ', nom: 'Max Mustermann ', age : 25, villes : ['Marseille', 'Lyon', 'Paris']},
    {type : 'admin', nom: 'John Wick', age : 45, villes : ['Paris']},
    {type : 'user', nom: 'Kate Muller', age : 23, villes : ['Nantes', 'Lyon', 'Lille', 'Nice']},
    {type : 'admin', nom: 'Bruce Willis', age : 64, villes : ['Paris', 'Nantes']},
    {type : 'user', nom: 'Jack Wilson', age : 35, villes : ['Marseille', 'Lyon', 'Montpellier']},
    {type : 'admin', nom: 'Carol Smith', age : 23, villes : ['Marseille', 'Nice', 'Montpellier']}
    ]

    var nbre=prompt('Entre le nombre de ville')
        const getByvilleNumber=(a)=>{
            return(
           personnes.filter((item)=>{
            return(
                    item.villes.length==a
            )
           })
            )
        }
        
                console.log(getByvilleNumber(nbre));