class Auto {
    constructor() {
        this.raeder
        this.sitze
    }
}

class Rechteck {
    constructor(){
        this.laenge
        this.breite
    }
}

class Footballer {
    constructor(){
        this.name 
        this.team
        this.position
        this.alter
        this.nummer
        this.groesse
        this.gewicht
        this.sacks
        this.tackles
        this.college
        this.fumbles
        this.touchdowns
    }
}
// Klassen definition für Schüler in einer Schule:





// Deklaration eines neuen objekts vom typ rechteck
// Deklaration = bekanntmachung
// let rechteck = ...

// Instanziierung eines neuen Objekts 
// Instanziierung erkennt man immer am reservierten Wort "new"
// Bei der Instanziierung wird Arbeitspeicher bereitgestellt
// ... = new Rechteck()

let rechteck = new Rechteck()
let schueler = new Schueler()
let footballer = new Footballer()
// 3. Intitialisierung (konkrete Eigenschaftswerte werden zugewiesen)

rechteck.breite = 2
rechteck.laenge = 3



footballer.name = "J.J. Watt"
footballer.team = "Houston Texans"
footballer.position = "RE"
footballer.alter = "30"
footballer.nummer = "99"
footballer.groesse = "1,96m"
footballer.gewicht = "131kg"
footballer.sacks = "92,0"
footballer.tackles = "455"
footballer.college = "Wisconsin"
footballer.fumbles = "22"
footballer.touchdowns = "5"

console.log("länge: " + rechteck.laenge)
console.log("breite: " + rechteck.breite)
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.set('views', 'Training')

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Wenn localhost:3000/klasse-objekt-ejs-trainieren aufgerufen wird ...

app.get('/klasse-objekt-ejs-trainieren',(req, res, next) => {   

    // ... wird klasse-objekt-ejs-trainieren.ejs gerendert:

    res.render('klasse-objekt-ejs-trainieren', {   
        breite : rechteck.breite,
        laenge : rechteck.laenge,
        geschlecht : schueler.geschlecht,
        name : footballer.name,
        team : footballer.team,
        position : footballer.position,
        alter : footballer.alter,
        nummer : footballer.nummer,
        groesse : footballer.groesse,
        gewicht : footballer.gewicht,
        sacks : footballer.sacks,
        tackles : footballer.tackles,
        college : footballer.college,
        fumbles : footballer.fumbles,
        touchdowns : footballer.touchdowns



    })
})
