//es una clase abstracta no tiene instacias, o sea objetos
class Persona {
    constructor(nombre, apellido, numeroDeIdentificacion, estadoCivil) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.numeroDeIdentificacion = numeroDeIdentificacion;
        this.estadoCivil = estadoCivil;
    }
      // Método para cambiar el estado civil
  cambiarEstadoCivil(nuevoEstadoCivil) {
    this.estadoCivil = nuevoEstadoCivil;
    console.log(`${this.nombre} ha cambiado su estado civil a ${nuevoEstadoCivil}`);
  }

  saludo(saludo){
    return 'Hola! yo soy: '+saludo
    }

  imprimirInformacion() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Número de Identificación: ${this.numeroDeIdentificacion}`);
    console.log(`Estado Civil: ${this.estadoCivil}`);
    }
  
}

//clase empleado que hereda cosas de persona
class Empleado extends Persona {
    constructor(nombre, apellido, numeroDeIdentificacion, estadoCivil, añoDeIncorporacion, nroDeDespacho) {
        super(nombre, apellido, numeroDeIdentificacion, estadoCivil);
        this.añoDeIncorporacion = añoDeIncorporacion;
        this.nroDeDespacho = nroDeDespacho;
    }
    //metodo para asignar nuevo despacho
    reasignarDespacho(nuevoDespacho) {
        this.nroDeDespacho = nuevoDespacho;
        console.log(`${this.nombre} ha sido reasignado al despacho ${nuevoDespacho}`);
      }

   
    imprimirInformacion() {
        super.imprimirInformacion();
        console.log(`Año de Incorporación: ${this.añoDeIncorporacion}`);
        console.log(`Número de Despacho: ${this.nroDeDespacho}`);
    }
}

// instancias de empelado
let empleado1 = new Empleado('Juan', 'Pérez', 1, 'Casado', 2010, 'Despacho 101');
console.log(empleado1);
console.log(empleado1.saludo('UN EMPLEADO')); 
console.log(empleado1.imprimirInformacion())
console.log(empleado1.cambiarEstadoCivil('SOLTERO')) 
console.log(empleado1.reasignarDespacho('b'))

let empleado2 = new Empleado('María', 'González', 2, 'Soltera', 2015, 'Despacho 102');
console.log(empleado2);
console.log(empleado2.saludo('UNA EMPLEADA')); 
console.log(empleado2.imprimirInformacion())
console.log(empleado2.cambiarEstadoCivil('CASADA')) 
console.log(empleado2.reasignarDespacho('c'))

let empleado3 = new Empleado('Carlos', 'Lopez', 3, 'Divorciado', 2018, 'Despacho 103');
console.log(empleado3);
console.log(empleado3.saludo('UN EMPLEADO')); 
console.log(empleado3.imprimirInformacion())
console.log(empleado3.cambiarEstadoCivil('SOLTERO')) 
console.log(empleado3.reasignarDespacho('d'))



//clase estudiante que hereda cosas de persona
class Estudiante extends Persona{
    constructor(nombre, apellido , numeroDeIdentificacion,estadoCivil,cursoMatriculado){
    super(nombre,apellido,numeroDeIdentificacion,estadoCivil);
    this.cursoMatriculado= cursoMatriculado;
    } 

  

     //metodo para cambiarse de curso
     cambioDeCurso(nuevoCurso) {
        this.nuevoCurso = nuevoCurso;
        console.log(`${this.nombre} se ha cambiado al curso de ${nuevoCurso}`);
      }
      imprimirInformacion() {
        super.imprimirInformacion();
        console.log(`Curso Matriculado: ${this.cursoMatriculado}`);
    }
}

//instancias de estudiante
let Estudiante1 =new Estudiante ('roberto','san martin',4, 'soltero','ingles')
console.log(Estudiante1);
console.log(Estudiante1.saludo('UN ESTUDIANTE'));
console.log(Estudiante1.imprimirInformacion())
console.log(Estudiante1.cambioDeCurso('ALEMAN'));

let estudiante2 = new Estudiante('Lucia', 'Fernandez', 5, 'casada', 'matemáticas');
console.log(estudiante2);
console.log(estudiante2.saludo('UNA ESTUDIANTE'));
console.log(estudiante2.imprimirInformacion())
console.log(estudiante2.cambioDeCurso('física'));

let estudiante3 = new Estudiante('Diego', 'Martinez', 6, 'soltero', 'historia');
console.log(estudiante3);
console.log(estudiante3.saludo('UN ESTUDIANTE'));
console.log(estudiante3.imprimirInformacion())
console.log(estudiante3.cambioDeCurso('geografía'));



//clase profesor que hereda cosas de persona y empleado 
class Profesor extends Empleado{
    constructor (nombre, apellido, numeroDeIdentificacion, estadoCivil, añoDeIncorporacion, nroDeDespacho,departamento){
    super (nombre, apellido, numeroDeIdentificacion, estadoCivil,añoDeIncorporacion, nroDeDespacho);
    this.departamento=departamento;
    }


      //metodo para cambiarse de departamento
      cambioDeDepartamento(nuevoDepartamento) {
        this.nuevoDepartamento = nuevoDepartamento;
        console.log(`${this.nombre} se ha cambiado al departamento de ${nuevoDepartamento}`);
      }
      imprimirInformacion() {
        super.imprimirInformacion();
        console.log(`Departamento: ${this.departamento}`);
    }
}

//instancias de profesor
let profesor1= new Profesor ('ANA','Suarez',7,'casada',2023,3,'informatica')
console.log(profesor1);
console.log(profesor1.saludo('UNA PROFESORA'));
console.log(profesor1.imprimirInformacion())
console.log(profesor1.cambioDeDepartamento('Recursos Humanos y Capacitación'));

let profesor2 = new Profesor('Jorge', 'Ramírez', 8, 'soltero', 2019, 4, 'matemáticas');
console.log(profesor2);
console.log(profesor2.saludo('UN PROFESOR'));
console.log(profesor2.imprimirInformacion())
console.log(profesor2.cambioDeDepartamento('ciencias'));

let profesor3 = new Profesor('Carla', 'Díaz', 9, 'divorciada', 2021, 5, 'literatura');
console.log(profesor3);
console.log(profesor3.saludo('UNA PROFESORA'));
console.log(profesor3.imprimirInformacion())
console.log(profesor3.cambioDeDepartamento('arte'));


//clase personal de servicio hereda cosas de persona y empleado
class PersonalServicio extends Empleado{
    constructor (nombre, apellido, numeroDeIdentificacion, estadoCivil, añoDeIncorporacion, nroDeDespacho,seccionAsignada){
    super (nombre, apellido, numeroDeIdentificacion, estadoCivil,añoDeIncorporacion, nroDeDespacho);
    this.seccionAsignada= seccionAsignada;  
}

   
       //metodo para cambiarse de departamento
       cambioDeSeccion(nuevaSeccion) {
        this.nuevaSeccion = nuevaSeccion;
        console.log(`${this.nombre} se ha cambiado a la seccion de ${nuevaSeccion}`);
      }
      imprimirInformacion() {
        super.imprimirInformacion();
        console.log(`Sección Asignada: ${this.seccionAsignada}`);
    }
}

//instancias de personal de servicio
let personalServicio1= new PersonalServicio ('PEDRO','GOMEZ',10,'casado',2023,3,'BAÑOS')
console.log(personalServicio1);
console.log(personalServicio1.saludo('UN PERSONAL DE SERVICIO'));
console.log(personalServicio1.imprimirInformacion());
console.log(personalServicio1.cambioDeSeccion('COCINA'));

let personalServicio2 = new PersonalServicio('María', 'López', 11, 'soltera', 2020, 4, 'Limpieza');
console.log(personalServicio2);
console.log(personalServicio2.saludo('UN PERSONAL DE SERVICIO'));
console.log(personalServicio2.imprimirInformacion());
console.log(personalServicio2.cambioDeSeccion('Jardinería'));

let personalServicio3 = new PersonalServicio('Carlos', 'Martínez', 12, 'casado', 2018, 5, 'Recepción');
console.log(personalServicio3);
console.log(personalServicio3.saludo('UN PERSONAL DE SERVICIO'));
console.log(personalServicio3.imprimirInformacion());
console.log(personalServicio3.cambioDeSeccion('Almacén'));



class CentroEducativo{
  constructor() 
    {
    this.personas = [];
  }

  altaPersona(persona) {
    this.personas.push(persona);
    console.log(`${persona.nombre} ha sido agregado al centro educativo.`);
    console.log(this.personas);
  }

  bajaPersona(numeroDeIdentificacion) {
    // Buscar la persona con la ID proporcionada
    const personaEncontrada = this.personas.find(persona => persona.numeroDeIdentificacion === numeroDeIdentificacion);
  
    if (personaEncontrada) {
      // eliminar a la persona del array
      this.personas = this.personas.filter(persona => persona.numeroDeIdentificacion !== numeroDeIdentificacion);
      console.log(`${personaEncontrada.nombre} con ID ${numeroDeIdentificacion} ha sido removida del centro educativo.`);
    } else {
      console.log(`No se encontró ninguna persona con la ID ${numeroDeIdentificacion}.`);
    }
  }

  imprimirInformacion() {
    for (let i = 0; i < this.personas.length; i++) {
      this.personas[i].imprimirInformacion();
    }
  }

  static mostrarMenu() {
    let opcion = 0;
    while (opcion !== 4) {
      console.log('Bienvenidos al Centro Educativo, elija una opcion:');
      console.log('(1) Dar de alta una persona');
      console.log('(2) Dar de baja una persona');
      console.log('(3) Imprimir lista de personas');
      console.log('(4) Salir');

      opcion = parseInt(prompt('(1) Dar de alta una persona, (2) Dar de baja una persona, (3) Imprimir lista de personas, (4) Salir'));

      switch (opcion) {
        case 1:
          const nombre = prompt('Ingrese el nombre de la persona:');
          const apellido = prompt('Ingrese el apellido de la persona:');
          const numeroDeIdentificacion = prompt('Ingrese el número de identificación de la persona:');
          const estadoCivil = prompt('Ingrese el estado civil de la persona:');
          centroEducativo.altaPersona(new Persona(nombre, apellido, numeroDeIdentificacion, estadoCivil));
          break;
        case 2:
          const id = prompt('Ingrese el número de identificación de la persona a dar de baja:');
          centroEducativo.bajaPersona(id);
          break;
        case 3:
          centroEducativo.imprimirInformacion();
          break;
        case 4:
          console.log('Saliendo del centro educativo.');
          break;
        default:
          console.log('Opción no válida.');
      }
    }
  }

  ordenarPersonasPorApellido() {
    this.personas.sort((a, b) => a.apellido.localeCompare(b.apellido));
    console.log('Personas ordenadas alfabéticamente por apellido:');
    this.imprimirInformacion();
  }
}

// Instancia de CentroEducativo
let centroEducativo = new CentroEducativo();

// Agregar personas al centro educativo 
centroEducativo.altaPersona(empleado1);
centroEducativo.altaPersona(Estudiante1);
centroEducativo.altaPersona(profesor1);
centroEducativo.altaPersona(personalServicio1);

// Imprimir información de todas las personas
centroEducativo.imprimirInformacion();

// Quitar una persona por su ID
centroEducativo.bajaPersona('123456789');

// Imprimir información actualizada después de quitar a la persona
centroEducativo.imprimirInformacion();

// Ordenar personas por apellido
centroEducativo.ordenarPersonasPorApellido();

// Llamada directa al método estático mostrarMenu de CentroEducativo
CentroEducativo.mostrarMenu();