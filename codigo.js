class Coche {
    constructor(rda,vent){
        this.ruedas = rda;
        this.ventanas = vent;
        this.encendido = false;

    }
    botonEncendido(){
        if (this.encendido == false) {
            alert("el coche esta encendido");
            this.encendido = true;
        } else {
            alert("el coche esta apagado");
            this.encendido = false;
        }
    }
    
    reiniciar(){
        if (this.encendido == true) {
            alert("el coche se esta reiniciando");
        } else {
            alert("el coche no se puede reiniciar porque esta apagado")
        }
    }
    
    dimeR() {
        alert(`ruedas que tiene: ${this.ruedas}`)
    }
    
    dimeV() {
        alert(`ventanas que tiene: ${this.ventanas}`)
    }


}

coche1 = new Coche("4","4");

coche1.botonEncendido();
coche1.dimeR();
coche1.dimeV();
coche1.reiniciar();
coche1.botonEncendido();


