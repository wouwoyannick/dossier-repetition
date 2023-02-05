// const somme=(m,n)=>{
//     return parseFloat(m)+parseFloat(n)
// }
// const multiplication=(m,n)=>{
//     return parseFloat(m)*parseFloat(n)
// }


const soustraction=(m,n)=>{
    return parseFloat(m)-parseFloat(n)
}

const division=(m,n)=>{
    return parseFloat(m)/parseFloat(n)
}

const carré=(a)=>{
    return a*a
}

const cube=(a)=>{
    return a*a*a
}

const puissance=




const factorielle(m)=>{
    let s=1
    for(let i==1; i<=m; i++) {
        S=s*i
    }
    return s
}

const tableMultiplication=(m)=>{
    let s=" "
    for (let i=1; i<=12)
}









var nombre=prompt("Quels operations voulez-vous faire?"+
                                     "\n1-Addition"+
                                     "\n2-Multiplication"+
                                     "\n3-Soustraction"+
                                     "\n4-Division"+
                                     "\n5-Table de miltiplication"+
                                     "\n6-Carre"+
                                     "\n7-Cube"+
                                     "\n8-Puissance"+
                                     "\n9-Factorielle")

nombre=parseInt(nombre)

switch (nombre) {
    // case 1:
    //     var a=prompt("entrer un nombre")
    //     var a=prompt('entrer un nombre')
    //     alert("la somme de "+a+" et "+b+" est "+somme(a,b))
        
    //     break;

    // case 2:
    //    var a=prompt("entrer un mombre")
    //    var b=prompt("entrer un nombre")
    //    alert("la multiplication de "+a+" et "+b+" est "+multiplication(a,b))

    //     break;

    case 3:
        var a=prompt("entrer un nombre")
        var b=prompt("entrer un nombre")
        alert("la soustraction de "+a+" et "+b+" est "+soustraction(a,b))

        break;

    case 4:
        var a=prompt("entrer un nombre")
        var b=prompt("entrer un nombre")
        alert("la division de "+a+" et "+b+" est "+division(a,b))

        break;

    case 5:

    var a=prompt("entrer un nombnre")


        break;

    case 6:
        var a=prompt("entrer un nombre")
        alert("le carré de "+a+" est "+carré(a)) 

        break;

    case 7:

        var a=prompt("entrer un nombre")
        alert("le cube de "+a+" est "+cube(a)) 

        break;

    case 8:

    var a=prompt("entrer un nombre")
    var b=prompt("entrer un nombre")
    alert("la puissance de "+a+" est "+puissance(a))

        break;

    case 9:

        var a=prompt("entrer un nombre")
        alert("le factorielle de "+a+" est "+factorielle(a))
    

        break;

    default:

        break;

}

