/*
    1. Cand creem un program, spunem ca "scriem cod". 
            Codul de programare (simplu "cod") se scrie in limbaje de programare.
    2. De ce folosim limbaje de programare?
            Pentru ca limbajul uman nu este suficient de explicit si de eficient, adica 
        este intepretabil si ar dura mult mai mult sa exprimam acelasi lucru.
    3. Cum se numeste limbajul de programare pe care il vom invata?
            JavaScript
    4. Care sunt alte limbaje de programare?
            Java, Python, PHP, C++, golang 
    5. De ce invatam tocmai JavaScript?
            Pentru cateva motive:
                a) Este cel mai popular limbaj din lume si inca creste in popularitate
                b) Pentru ca este popular, exista foarte multe resurse de invatare
                c) Ne permite sa scriem toata gama de aplicatii: 
                    - site-uri web
                    - aplicatii de server
                    - aplicatii pentru telefon
                    - inteligenta artificiala altele
                d) Pentru ca este prietenos pentru incepatori
                e) Pentru ca exista foarte multe joburi si candidati pentru firma noastra
                f) Pentru ca il stie Dragos cel mai bine
    6. Cum "citeste" computerul o bucata de cod?
        Executia programului se face intotdeauna de sus in jos, de la stanga la dreapta
        si de la interior spre exterior (cand avem paranteze)

    7. Fiecare rand de cod se numeste "linie". Ele sunt numerotate, ceea ce serveste ca 
        niste "coordonate geografice"

    8. Cand scriem comentarii in cod, este de retinut ca sunt doar pentru noi, ca programatori,
        iar computerul le ignora
        Avem 2 tipuri de comentarii:
        - comentariu de tip linie: // tot ce scriem dupa cele 2 slash-uri este comentariu
        - comentariu de tip bloc: tot ce scriem intre semnul de inchidere 
        si de deschidere este comentariu 
 */

var nume = "Dragos"; // asta e un comentariu
var nume = /* Pe un singur rand */ "Dragos";

var nume = "Dragos"; /* Pe mai multe 
 multe
 multe
 multe
 randuri */

var variabilaCareTrebuieComentata = 1;
var variabilaCareTrebuieComentata = 2;
var variabilaCareTrebuieComentata = 3;
var variabilaCareTrebuieComentata = 4;
var variabilaCareTrebuieComentata = 5;

var linieCareNuTrebuieComentata = false;

console.log(variabilaCareTrebuieComentata);

// Debugger-ul

// breakpoint = punct de oprire (pauza)
// pentru a adauga un breakpoint ducem cursorul in
// stanga numarului liniei, unde ne va aparea o bulina
// rosie, si dam click pe ea. Bulina se va aprinde.
// Pentru a activa debugger-ul, dam click pe butonul cu gandacelul
// din bara din stanga, apoi dam click pe "Debug Node.js"
// break = pauza
// brake = frana (nu are nicio legatura)
