/*********************************************** */
/*class Voiture
{
    public color:number = 0xA02534;
    public name:string = "Seat cordoba";
    
}
class Coccinelle extends Voiture
{
      public fly ()
    {
      console.log ("I Belive i can fly");
        
    }
}
let coco : Coccinelle = new Coccinelle()
coco.fly();
*/
/**************************************************** */
var Projecteur = /** @class */ (function () {
    function Projecteur() {
        this.boutton = 0;
    }
    return Projecteur;
}());
var Telecomende = /** @class */ (function () {
    function Telecomende() {
    }
    Telecomende.prototype.allumer = function (my_projecteur) {
        my_projecteur.boutton = 1;
        return my_projecteur.boutton;
    };
    Telecomende.prototype.eteindre = function (my_projecteur) {
        my_projecteur.boutton = 0;
        return my_projecteur.boutton;
    };
    return Telecomende;
}());
var popo = new Projecteur();
var toto = new Telecomende();
var choix;
var on;
var off;
on = toto.allumer(popo);
console.log("l'etat du projecteur: ", on);
off = toto.eteindre(popo);
console.log("l'etat du projecteur: ", off);
