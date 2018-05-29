let bonjour ="sabah al khir ";
let prenom ="Razan";
let html =`
${bonjour}
ismi ${prenom}`;
console.log(html);
function launchFunc(p_function) {
    p_function(10,20);
}
//add(10,20);
launchFunc( function add (p1,p2){
    let res=p1+p2;
    console.log("resulat= ", res);
}   )


class Personnage {
    constructor() {
        this.name = "";
    }

    sayMyName() {
        console.log('My name is :',this.name,'\nmy power is:',this.power );
    }
}

class JediKnight extends Personnage {
    constructor(p_name) {
        super ();
        this.power = 250;

        this.name = p_name;
    }
}

let obiwan = new JediKnight("Obiwan Kenobi");
obiwan.sayMyName();
