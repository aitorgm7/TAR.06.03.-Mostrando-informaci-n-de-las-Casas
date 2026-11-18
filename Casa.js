class Casa {
  // Declaración de propiedades privadas
  #region;
  #emblema;
  #lema;
  #personajes;
  #caracteristicas;

  // Constructor completo (con valores por defecto opcionales)
  constructor(region, emblema, lema, personajes, caracteristicas) {
    this.#region = region;
    this.#emblema = emblema;
    this.#lema = lema;
    this.#personajes = personajes;
    this.#caracteristicas = caracteristicas;
  }

  // --- GETTERS Y SETTERS ---

  get getRegion() {
    return this.#region;
  }

  set setRegion(nuevaRegion) {
    this.#region = nuevaRegion;
  }

  get getEmblema() {
    return this.#emblema;
  }

  set setEmblema(nuevoEmblema) {
    this.#emblema = nuevoEmblema;
  }

  get getLema() {
    return this.#lema;
  }

  set setLema(nuevoLema) {
    this.#lema = nuevoLema;
  }

  get getPersonajes() {
    return this.#personajes;
  }

  set setPersonajes(nuevosPersonajes) {
    this.#personajes = nuevosPersonajes;
  }

  get getCaracteristicas() {
    return this.#caracteristicas;
  }

  set setCaracteristicas(nuevasCaracteristicas) {
    this.#caracteristicas = nuevasCaracteristicas;
  }
}

export default Casa;