const cronometro = document.getElementById('crono');
const botones = document.querySelectorAll('.botones button');
const iconoPausa = '<i class="bx bx-pause"></i>';
const iconoIniciar = '<i class="bx bx-play"></i>';

let pausa = true;

let [horas, minutos, segundos] = [0, 0, 0]
let conteo;

const contador = () => {
    segundos++;
    if (segundos == 60) {
        segundos = 0;
        minutos++;
        if (minutos == 60) {
            minutos = 0;
            horas++;
        }
    }

    let horasFormato = formato(horas);
    let minutosFormato = formato(minutos);
    let segundosFormato = formato(segundos);

    cronometro.innerText = `${horasFormato}:${minutosFormato}:${segundosFormato}`
}

const formato = (tiempo) => tiempo < 10 ? '0' + tiempo : tiempo;

const estado = () => {
    if (pausa === true) {
        conteo = window.setInterval(contador, 1000);
        botones[0].innerHTML = iconoPausa;
        botones[0].classList.remove('iniciar');
        botones[0].classList.add('pausar');
        pausa = false;
    } else {
        window.clearInterval(conteo);
        botones[0].innerHTML = iconoIniciar;
        botones[0].classList.remove('pausar');
        botones[0].classList.add('iniciar')
        pausa = true
    }
}

const reiniciar = () => {
    segundos = 0;
    minutos = 0;
    horas = 0;
    cronometro.innerText = '00:00:00';

    window.clearInterval(conteo);
    botones[0].innerHTML = iconoIniciar;
    botones[0].classList.remove('pausar');
    botones[0].classList.add('iniciar')
    pausa = true

}

botones[0].addEventListener('click', estado);
botones[1].addEventListener('click', reiniciar);