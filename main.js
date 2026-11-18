import Casa from "./Casa.js";

const casaStark = new Casa(
  "El Norte",
  "Lobo huargo gris sobre fondo blanco",
  "«Se acerca el invierno»",
  ["Eddard", "Robb", "Sansa", "Arya", "Bran Stark"],
  "Honor, lealtad y tradición"
);

const casaTargaryen = new Casa(
  "Tierras de la Corona",
  "Dragón rojo de tres cabezas sobre fondo negro",
  "«Fuego y sangre»",
  ["Daenerys", "Viserys", "Aegon Targaryen"],
  "Antigua dinastía real vinculada a los dragones"
);

const casaBaratheon = new Casa(
  "Tierras de la Tormenta",
  "Ciervo negro coronado sobre fondo dorado",
  "«Nuestra es la furia»",
  ["Robert", "Stannis", "Renly Baratheon"],
  "Fuerza, orgullo y espíritu guerrero"
);

const casaArryn = new Casa(
  "El Valle de Arryn",
  "Halcón y luna blanca sobre fondo azul",
  "«Tan alto como el honor»",
  ["Jon Arryn", "Robin Arryn"],
  "Una fortaleza situada en lo alto de las montañas"
);

const casaLannister = new Casa(
  "Occidente",
  "León dorado sobre fondo carmesí",
  "«¡Oye mi rugido!»",
  ["Tywin", "Cersei", "Jaime", "Tyrion Lannister"],
  "Riqueza, poder político y ambición"
);

const casaGreyjoy = new Casa(
  "Islas del Hierro",
  "Kraken dorado sobre fondo negro",
  "«Nosotros no sembramos»",
  ["Balon", "Theon", "Yara Greyjoy"],
  "Navegación, independencia y tradición marinera"
);

const casaTully = new Casa(
  "Tierras de los Ríos",
  "Trucha plateada sobre fondo azul y rojo",
  "«Familia, deber, honor»",
  ["Hoster", "Edmure", "Catelyn Tully"],
  "Lealtad familiar y alianzas políticas"
);

const casaTyrell = new Casa(
  "El Dominio",
  "Rosa dorada sobre fondo verde",
  "«Crecer fuerte»",
  ["Mace", "Margaery", "Olenna Tyrell"],
  "Riqueza agrícola, diplomacia e influencia"
);

const casaBolton = new Casa(
  "El Norte",
  "Hombre desollado sobre fondo rojo",
  "«Nuestras hojas son afiladas»",
  ["Roose", "Ramsay Bolton"],
  "Una casa norteña conocida por su crueldad y rivalidad histórica con los Stark"
);

const casaMartell = new Casa(
  "Dorne",
  "Sol rojo atravesado por una lanza sobre fondo naranja",
  "«Nunca doblegado, nunca roto»",
  ["Doran", "Oberyn", "Trystane Martell"],
  "Independencia, orgullo y resistencia"
);

// 1. Creamos la tarjeta una sola vez y la ocultamos
const tarjeta = document.createElement('div');
tarjeta.id = 'mi-tarjeta';
tarjeta.style.display = 'none';
document.body.appendChild(tarjeta);

// ==========================================
// FUNCIÓN AUXILIAR MANUAL (Solo para no repetir 
// las 4 líneas de posición y tiempo, pero es súper simple)
// ==========================================
function mostrarEnPantalla(evento) {
    tarjeta.style.display = 'block';
    tarjeta.style.left = (evento.pageX + 15) + 'px';
    tarjeta.style.top = (evento.pageY + 15) + 'px';
    // Se oculta después de 4 segundos
    //setTimeout(() => { tarjeta.style.display = 'none'; }, 4000); 
}

// ==========================================
// EVENTOS MANUALES PARA CADA CASA
// ==========================================

// --- STARK ---
document.getElementById('stark').addEventListener('mouseover', (e) => {
    tarjeta.innerHTML = `
        <h3>Casa Stark</h3>
        <img src="imagenes/casa-stark.jpg" alt="Stark">
        <p><b>Región:</b> ${casaStark.getRegion}</p>
        <p><b>Lema:</b> ${casaStark.getLema}</p>
        <p><b>Personajes:</b> ${casaStark.getPersonajes.join(', ')}</p>
        <p><b>Características:</b> ${casaStark.getCaracteristicas}</p>
    `;
    mostrarEnPantalla(e);
});

document.getElementById('stark').addEventListener('mouseleave', (e) => {tarjeta.style.display = 'none';});

// --- TARGARYEN ---
document.getElementById('targaryen').addEventListener('click', (e) => {
    if(tarjeta.style.display == 'none'){
        tarjeta.innerHTML = `
            <h3>Casa Targaryen</h3>
            <img src="imagenes/casa-targaryen.jpg" alt="Targaryen">
            <p><b>Región:</b> ${casaTargaryen.getRegion}</p>
            <p><b>Lema:</b> ${casaTargaryen.getLema}</p>
            <p><b>Personajes:</b> ${casaTargaryen.getPersonajes.join(', ')}</p>
            <p><b>Características:</b> ${casaTargaryen.getCaracteristicas}</p>
        `;
        mostrarEnPantalla(e);
    }
    else
        tarjeta.style.display = 'none';
});

// --- BARATHEON ---
document.getElementById('baratheon').addEventListener('click', (e) => {
    tarjeta.innerHTML = `
        <h3>Casa Baratheon</h3>
        <img src="imagenes/casa-baratheon.jpg" alt="Baratheon">
        <p><b>Región:</b> ${casaBaratheon.getRegion}</p>
        <p><b>Lema:</b> ${casaBaratheon.getLema}</p>
        <p><b>Personajes:</b> ${casaBaratheon.getPersonajes.join(', ')}</p>
        <p><b>Características:</b> ${casaBaratheon.getCaracteristicas}</p>
    `;
    mostrarEnPantalla(e);
});

// --- ARRYN ---
document.getElementById('arryn').addEventListener('click', (e) => {
    tarjeta.innerHTML = `
        <h3>Casa Arryn</h3>
        <img src="imagenes/casa-arryn.jpg" alt="Arryn">
        <p><b>Región:</b> ${casaArryn.getRegion}</p>
        <p><b>Lema:</b> ${casaArryn.getLema}</p>
        <p><b>Personajes:</b> ${casaArryn.getPersonajes.join(', ')}</p>
        <p><b>Características:</b> ${casaArryn.getCaracteristicas}</p>
    `;
    mostrarEnPantalla(e);
});

// --- LANNISTER ---
document.getElementById('lannister').addEventListener('click', (e) => {
    tarjeta.innerHTML = `
        <h3>Casa Lannister</h3>
        <img src="imagenes/casa-lannister.jpg" alt="Lannister">
        <p><b>Región:</b> ${casaLannister.getRegion}</p>
        <p><b>Lema:</b> ${casaLannister.getLema}</p>
        <p><b>Personajes:</b> ${casaLannister.getPersonajes.join(', ')}</p>
        <p><b>Características:</b> ${casaLannister.getCaracteristicas}</p>
    `;
    mostrarEnPantalla(e);
});

// --- GREYJOY ---
document.getElementById('greyjoy').addEventListener('click', (e) => {
    tarjeta.innerHTML = `
        <h3>Casa Greyjoy</h3>
        <img src="imagenes/casa-greyjoy.jpg" alt="Greyjoy">
        <p><b>Región:</b> ${casaGreyjoy.getRegion}</p>
        <p><b>Lema:</b> ${casaGreyjoy.getLema}</p>
        <p><b>Personajes:</b> ${casaGreyjoy.getPersonajes.join(', ')}</p>
        <p><b>Características:</b> ${casaGreyjoy.getCaracteristicas}</p>
    `;
    mostrarEnPantalla(e);
});

// --- TULLY ---
document.getElementById('tully').addEventListener('click', (e) => {
    tarjeta.innerHTML = `
        <h3>Casa Tully</h3>
        <img src="imagenes/casa-tully.jpg" alt="Tully">
        <p><b>Región:</b> ${casaTully.getRegion}</p>
        <p><b>Lema:</b> ${casaTully.getLema}</p>
        <p><b>Personajes:</b> ${casaTully.getPersonajes.join(', ')}</p>
        <p><b>Características:</b> ${casaTully.getCaracteristicas}</p>
    `;
    mostrarEnPantalla(e);
});

// --- TYRELL ---
document.getElementById('tyrell').addEventListener('click', (e) => {
    tarjeta.innerHTML = `
        <h3>Casa Tyrell</h3>
        <img src="imagenes/casa-tyrell.jpg" alt="Tyrell">
        <p><b>Región:</b> ${casaTyrell.getRegion}</p>
        <p><b>Lema:</b> ${casaTyrell.getLema}</p>
        <p><b>Personajes:</b> ${casaTyrell.getPersonajes.join(', ')}</p>
        <p><b>Características:</b> ${casaTyrell.getCaracteristicas}</p>
    `;
    mostrarEnPantalla(e);
});

// --- BOLTON ---
document.getElementById('bolton').addEventListener('click', (e) => {
    tarjeta.innerHTML = `
        <h3>Casa Bolton</h3>
        <img src="imagenes/casa-bolton.jpg" alt="Bolton">
        <p><b>Región:</b> ${casaBolton.getRegion}</p>
        <p><b>Lema:</b> ${casaBolton.getLema}</p>
        <p><b>Personajes:</b> ${casaBolton.getPersonajes.join(', ')}</p>
        <p><b>Características:</b> ${casaBolton.getCaracteristicas}</p>
    `;
    mostrarEnPantalla(e);
});

// --- MARTELL ---
document.getElementById('martell').addEventListener('click', (e) => {
    tarjeta.innerHTML = `
        <h3>Casa Martell</h3>
        <img src="imagenes/casa-martell.jpg" alt="Martell">
        <p><b>Región:</b> ${casaMartell.getRegion}</p>
        <p><b>Lema:</b> ${casaMartell.getLema}</p>
        <p><b>Personajes:</b> ${casaMartell.getPersonajes.join(', ')}</p>
        <p><b>Características:</b> ${casaMartell.getCaracteristicas}</p>
    `;
    mostrarEnPantalla(e);
});

// --- MORADA Y NEGRIDORADA (Sin registro) ---
document.getElementById('morada').addEventListener('click', (e) => {
    tarjeta.innerHTML = `
        <h3>Casa Desconocida</h3>
        <p>No hay registro sobre esta casa.</p>
    `;
    mostrarEnPantalla(e);
});

document.getElementById('negridorada').addEventListener('click', (e) => {
    tarjeta.innerHTML = `
        <h3>Casa Desconocida</h3>
        <p>No hay registro sobre esta casa.</p>
    `;
    mostrarEnPantalla(e);
});
