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
/***************porjecteur-telecommende Razan Code*********************************** */
/*class Projecteur

{
    public boutton:number=0; 

    
}
class Telecomende 
{
    
     
    public allumer (my_projecteur:Projecteur) :number
    {
      //public proj:Projecteur(); si un telecommnede pour un seul projecteur
      my_projecteur.boutton=1;
        return my_projecteur.boutton;
    }

    public eteindre (my_projecteur:Projecteur) :number 
    {
        my_projecteur.boutton=0;
        return my_projecteur.boutton;
        
    }
}
let popo:Projecteur=new Projecteur();
let toto:Telecomende=new Telecomende();
let choix:number;
let on:number;
let off:number;

on=toto.allumer(popo);
console.log("l'etat du projecteur: ",on);

off=toto.eteindre(popo);
console.log("l'etat du projecteur: " ,off);
*/
/*************************************************************************************************** */
/*
* Ajouter la gestion du mode d'affichage ( 4/3, 16/9, portrait, paysage )
* Ajouter la gestion des entrées (HDMI, VGA)
* Ajouter la gestion du volume ( de 0 à 20 par pas de 1 )
*/

class Projecteur{

    private isOn:boolean = false;
    public mode:boolean = false;
    public entry:boolean = false;
    public Projecteur_mode: string="3/4";
    public Projecteur_entry: string="HDMI";
   
    public receiveSignal( paramSignal:string )
    {
        if( paramSignal == "le_signal_allumage_extinction")
            this.isOn = !this.isOn;
    }

    /********************traiter On/Off ******************************* */
    public isProjectorOn():boolean{
        return this.isOn;
    }
    /***************************************** */
    
    /********************changer la gestion d'affichage ********************************/
    public change_mode(mode_affichage:string)
    {
      if (mode_affichage=="3/4")
       this.Projecteur_mode="3/4";
      else
        if (mode_affichage=="9/16")
          this.Projecteur_mode="9/16";
        else
          if (mode_affichage=="portrait")
            this.Projecteur_mode="9/16";
          else
           if (mode_affichage=="paysage")
              this.Projecteur_mode="paysage";
    }
/********************************************************************************** */
public change_entry(entry:string)
{
  if (entry=="HDMI")
   this.Projecteur_entry="HDMI";
  else
    if (entry=="VGA")
      this.Projecteur_entry="VGA";

}
/*************************************************************** */
}

class Telecommande
{
    
    public signal(paramProj:Projecteur)
    {
        paramProj.receiveSignal("le_signal_allumage_extinction");
    }

    public mode_affichage(paramProj:Projecteur)
    {
        while(paramProj.mode== false)
            paramProj.change_mode("signal");
        paramProj.mode=true;
       
    }

         
    
    
    public entry_proj(paramProj:Projecteur)
    {
        while(paramProj.entry == false)
          paramProj.change_entry("signal");
        paramProj.mode=true;
        
    }
    
}

let myProjector:Projecteur = new Projecteur();
let myTeleCmd:Telecommande = new Telecommande();

myTeleCmd.signal(myProjector);
myTeleCmd.mode_affichage(myProjector);
myTeleCmd.mode_affichage(myProjector);
