



// POUR AVOIR UNE DATE

var date=new Date()
var mois1=["janvier","fevrier","mars",
          "avril","mai","juin","juillet",
          "aout","septembre","octobre","novembre","decembre"]

var jour1=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]





















// PROPRIETE UNE DATE
var annee=date.getFullYear()
var mois=date.getMonth()
var heure=date.getHours()
var minute=date.getMinutes()
var seconde=date.getSeconds()
var datejour=date.getDate()
var jour=date.getDay()


console.log(
    "L'année est "+annee+
    "\nle mois est "+mois+
    "\nHeure est "+heure+
    "\nLa minute est "+minute+
    "\nLa seconde est "+seconde+
    "\nLa date du jour est "+datejour+
    "\nLe jour est "+jour
);

var date=new Date()


var jour=date.getDay()
var datejour=date.getDate()
var mois=date.getMonth()
var annee=date.getFullYear()


console.log(
    "\nLe jour est "+jour+
    "\nLa date du jour est "+datejour+
    "\nle mois est "+mois+
    "L'annee est "+annee
);

console.log("Nous sommes le :"+jour1[jour1-1]+" "+datejour+" "+mois1[mois]+" "+annee)

console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());




console.log(date.toLocaleTimeString());




setInterval(() => {
    date.toLocaleTimeString();
    console.log("Nous sommes le :"+heure1[heure1-1]+" ")
}, 1000);
