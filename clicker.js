document.addEventListener("DOMContentLoaded", function() {
    const pulsador = document.querySelector(".screen");
    const numero = document.querySelector(".numero");
    const persec = document.querySelector(".persec");
    const pulsar = document.querySelector(".pulsar")

    const mej1 = document.getElementById("mejo_1");
    const mej2 = document.getElementById("mejo_2");
    const mej3 = document.getElementById("mejo_3");
    const mej4 = document.getElementById("mejo_4");

    // Asegúrate de que estos elementos existan en tu HTML
    const mej1_prec = document.getElementById("mej1_prec");
    const mej2_prec = document.getElementById("mej2_prec");
    const mej3_prec = document.getElementById("mej3_prec");
    const mej4_prec = document.getElementById("mej4_prec");



    let mej1_pre = 5;
    let mej2_pre = 10;
    let mej3_pre = 15;
    let mej4_pre = 20;

    let contador = 0;  
    let cont_persec = 1;
    let potencia = 1;



    pulsador.addEventListener("click", function() {
        contador += potencia;
        contador = parseFloat(contador.toFixed(2));  
        numero.innerHTML = contador + ' CVs Printed';
        pulsador.classList.add("pulsar");
        setTimeout(() => {
            pulsador.classList.remove("pulsar");
        }, 100);
    
        actualizarBotonMej1();
        actualizarBotonMej2();
        actualizarBotonMej3();
        actualizarBotonMej4();
    });

    function actualizarBotonMej1() {
        if (contador >= mej1_pre) {
            mej1.disabled = false; 
            mej1.style.cursor = 'pointer';  
        } else {
            mej1.disabled = true; 
        }
    }

    function actualizarBotonMej2() {
        if (contador >= mej2_pre) {
            mej2.disabled = false;
            mej2.style.cursor = 'pointer';
        } else {
            mej2.disabled = true;
        }
    }

    function actualizarBotonMej3() {
        if (contador >= mej3_pre) {
            mej3.disabled = false;
            mej3.style.cursor = 'pointer';
        } else {
            mej3.disabled = true;
        }
    }

    function actualizarBotonMej4() {
        if (contador >= mej4_pre) {
            mej4.disabled = false;
            mej4.style.cursor = 'pointer';
        } else {
            mej4.disabled = true;
        }
    }

    actualizarBotonMej1();
    actualizarBotonMej2();
    actualizarBotonMej3();
    actualizarBotonMej4();

    mej1.addEventListener("click", function() {
        if (contador >= mej1_pre) {
            potencia *= 1.2;
            cont_persec *= 1.2;
            contador -= mej1_pre;  
            mej1_pre *= 2;  
            cont_persec = parseFloat(cont_persec.toFixed(2)); 
            persec.innerHTML = "Per second: " + cont_persec;
            mej1_prec.innerHTML = 'Cost: ' + mej1_pre + ' CVs'; 

            actualizarBotonMej1();
            actualizarBotonMej2();
            actualizarBotonMej3();
            actualizarBotonMej4();
        }
    });

    mej2.addEventListener("click", function() {
        if (contador >= mej2_pre) {
            potencia *= 1.5;
            cont_persec *= 1.1;
            contador -= mej2_pre;  
            mej2_pre *= 2;  
            cont_persec = parseFloat(cont_persec.toFixed(2)); 
            persec.innerHTML = "Per second: " + cont_persec;
            mej2_prec.innerHTML = 'Cost: ' + mej2_pre + ' CVs'; 

            actualizarBotonMej1();
            actualizarBotonMej2();
            actualizarBotonMej3();
            actualizarBotonMej4();
        }
    });

    mej3.addEventListener("click", function() {
        if (contador >= mej3_pre) {
            potencia *= 1.4;
            cont_persec *= 1.5;
            contador -= mej3_pre;  
            mej3_pre *= 2;  
            cont_persec = parseFloat(cont_persec.toFixed(2)); 
            persec.innerHTML = "Per second: " + cont_persec;
            mej3_prec.innerHTML = 'Cost: ' + mej3_pre + ' CVs'; 

            actualizarBotonMej1();
            actualizarBotonMej2();
            actualizarBotonMej3();
            actualizarBotonMej4();
        }
    });

    mej4.addEventListener("click", function() {
        if (contador >= mej4_pre) {
            potencia *= 1.5;
            cont_persec *= 1.5;
            contador -= mej4_pre;  
            mej4_pre *= 2;  
            cont_persec = parseFloat(cont_persec.toFixed(2)); 
            persec.innerHTML = "Per second: " + cont_persec;
            mej4_prec.innerHTML = 'Cost: ' + mej4_pre + ' CVs'; 

            actualizarBotonMej1();
            actualizarBotonMej2();
            actualizarBotonMej3();
            actualizarBotonMej4();
        }
    });

    setInterval(() => {
        contador += cont_persec;
        contador = parseFloat(contador.toFixed(2));
        persec.innerHTML = 'Per second: ' + cont_persec;
        numero.innerHTML = contador + ' CVs Printed';
        document.querySelector(".potencia").innerHTML = 'Per Click: ' + potencia.toFixed(2)
    }, 1000);
});