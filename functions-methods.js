// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
function getEmailDomain(email) {
    if (email.includes("@novi-education")) {
        return console.log("@novi-education.nl")
    } else if (email.includes("@novi.nl")){
        return console.log ("@novi.nl")
    } else {
        return console.log("@outlook.com")
    }
}
getEmailDomain("n.eeken@novi-education.nl")
getEmailDomain("t.mellink@novi.nl")
getEmailDomain("a.wiersma@outlook.com")

/* Opdracht  2 */
function typeOfEmail(email) {
    if (email.includes("@novi-education.nl")) {
        return console.log ("student")
    } else if (email.includes("@outlook.com")) {
        return console.log("Extern")
    } else {
        return console.log ("Medewerker")
    }
}
typeOfEmail("n.eeken@novi-education.nl")
typeOfEmail("t.mellink@novi.nl")
typeOfEmail("a.wiersma@outlook.com")
typeOfEmail("novi.nlaapjesk@outlook.com")

/* Opdracht  3 */
function checkEmailValidity(email){
    switch (true) {
        case email.includes("@" ) && (email.slice(-1) !==".") && (!email.includes(",")):
            console.log("True");
            break;
        case !email.includes("@"):
            console.log("False");
            break;
        case email.slice(-1) === "." || email.includes(","):
            console.log("False");
            break;
        default: console.log("False");
    }
}
checkEmailValidity("anotons@gmail.com.")