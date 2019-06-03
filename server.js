class Konto {
    constructor() {
        this.Kontonummer
        this.Kontoart
        this.Iban
    }
}

class Kunde{
    constructor(){
        this.Vorname
        this.Nachname 
        this.Geschlecht 
        this.IdKunde
        this.Geburtsdatum
        this.Adresse
        this.Kennwort  
    }
}

let kunde = new Kunde()
kunde.IdKunde = 4711
kunde.Kennwort = "123"
kunde.Vorname = " Joshua"
kunde.Nachname = "Schriever"
kunde.Geschlecht = "m"
kunde.Geburtsdatum = "1999-12-31"
kunde.Adresse = "dffsmnf"

const iban = require('iban')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

// Ausgabe von 'server lauscht... im Terminal
const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Die app.get('/'...) wird abgearbeitet, wenn die Startseite im browser abgerufen wird
app.get('/',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('index.ejs', {                              
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

app.get('/login',(req, res, next) => {         
    res.cookie('istAngemeldetAls', '')       
    res.render('login.ejs', {                    
    })
})

app.post('/',(req, res, next) => {   

    // Der Wert des Inputs mit dem name = idkunde wird über den request zugewiesen an die Konstante idKunde
    const idKunde = req.body.idKunde
    const kennwort = req.body.kennwort

    console.log(kunde.IdKunde)
        
    // Wenn der Wert von IdKunde dem Wert der Eigenschaft kunde.IdKunde entspricht und der Wert vom Kennwort entspricht, dann werden die anweisungen im Rumpf der if-Kontollstruktur abgearbeitet
    if(idKunde == kunde.IdKunde && kennwort == kunde.Kennwort){            
        console.log("Der Cookie wird gesetzt:")
        res.cookie('istAngemeldetAls', idKunde)
        res.render('index.ejs', {           
        })
    }else{            
        console.log("Der Cookie wird gelöscht")
        res.cookie('istAngemeldetAls','')
        res.render('login.ejs', {                    
        })
    }
})
// Wenn die Seite localhost:3000/impressum aufgerufen wird, ...
app.get('/impressum',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)

        // ... Dann wird Impressum.ejs gerendert.

        res.render('impressum.ejs', {                              
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

// Wenn die Seite localhost:3000/kontoAnlegen aufgerufen wird, dann wir kontoAnlegen.ejs gerendert


app.get('/kontoAnlegen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)

        // ... Dann wird Impressum.ejs gerendert.

        res.render('kontoAnlegen.ejs', {   
            meldung : ""                           
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

// Wenn der Button auf der kontoanlegen Seite gedrückt wird, dann wird kontoAnlegen.ejs gerendert.

app.post('/kontoAnlegen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){

        let konto = new Konto()

        // Der Wert aus dem Input mit dem Namen 'Kontonummer
        // wird zugewiesen (=) ab die Eigenschaft Kontonummer des Objekt namens Konto
        konto.Kontonummer = req.body.kontonummer
        konto.Kontoart = req.body.kontoart


        
        const Bankleitzahl = 27272727
        const laendererkennung = "DE"
        konto.Iban = iban.fromBRAN(laendererkennung,bankleitzahl + " " + req.body.kontonummer)
        let errechneteIban = iban.fromBBAN (laendererkennung,bankleitzahl + " " + req.body.kontonummer)
        console.log(errechneteIban)
        res.render('kontoAnlegen.ejs', {  
            meldung : "Das "+ konto.Kontoart + " mit der Kontonummer " + konto.Kontonummer + " wurde erfolgreich angelegt."                            
        })
    }else{
        // Die login.ejs wird gerendert und als response an den Browser zurückgegeben
        res.render('login.ejs', {                    
        })    
    }
})
app.get('/stammdatenPflegen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)

        // ... Dann wird Impressum.ejs gerendert.

        res.render('stammdatenPflegen.ejs', {   
            meldung : ""                           
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

// Wenn der Button auf der kontoanlegen Seite gedrückt wird, dann wird kontoAnlegen.ejs gerendert.

app.post('/stammdatenPflegen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){

        let kunde = new Konto()

        // Der Wert aus dem Input mit dem Namen 'Kontonummer
        // wird zugewiesen (=) ab die Eigenschaft Kontonummer des Objekt namens Konto
        kunde.Nachname = req.body.Nachname
        kunde.Kennwort = req.body.kennwort
        
        
        res.render('stammdatenPflegen.ejs', {  
            meldung : "Die Stammdaten wurden geändert."                           
        })
    }else{
        // Die login.ejs wird gerendert und als response an den Browser zurückgegeben
        res.render('login.ejs', {                    
        })    
    }
})
    
    





































