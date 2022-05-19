class Coche {
    componentes(ruedas,ventanas,puertas,color){
        this.ruedas = ruedas;
        this.ventanas = ventanas;
        this.puertas = puertas;
        this.color = color;
        this.encender = false;

    }
    arrancar(){
        if (this.encender == false) {
            alert("el coche esta encendido");
            this.encender = false;
        } else {
            alert("el coche esta apagado");
            this.encender = true;
        }
    }
    
    reiniciar(){
        if (this.encender == false) {
            alert("el coche se esta reiniciando");
        } else {
            alert("el coche no se puede reiniciar porque esta apagado")
        }
    }
    ventanasCoche() {
        alert(`el coche tiene: ${this.ventanas} + "ventanas"`)
    }
}

coche1 = new Coche("4 ruedas", "4 ventanas", "dos puertas", "color rojo");

coche1.arrancar();
coche1.reiniciar();

