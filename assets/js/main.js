function Consultorio(nombre, pacientes) { //Función constructora
    var _nombre = nombre;
    var _pacientes = pacientes;

    Object.defineProperty(this, "_getNombre", {
        get: function() {
            return _nombre;
        }
    });

    Object.defineProperty(this, "_setNombre", {
        set: function(nombre) {
            _nombre = nombre;
        }
    });

    Object.defineProperty(this, "_getPacientes", {
        get: function () {
            return _pacientes;
        }
    });

    Object.defineProperty(this, "_setPacientes", {
        set: function(pacientes) {
            _pacientes = pacientes;
        }
    });
};

function Paciente(nombre, edad, rut, diagnostico) { //Función constructora
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    Object.defineProperty(this, "_getNombre", {
        get: function() {
            return _nombre;
        }
    });

    Object.defineProperty(this, "_setNombre", {
        set: function(nombre) {
            _nombre = nombre;
        }
    });

    Object.defineProperty(this, "_getEdad", {
        get: function() {
            return _edad;
        }
    });

    Object.defineProperty(this, "_setEdad", {
        set: function(edad) {
            _edad = edad;
        }
    });

    Object.defineProperty(this, "_getRut", {
        get: function() {
            return _rut;
        }
    });

    Object.defineProperty(this, "_setRut", {
        set: function(rut) {
            _rut = rut;
        }
    });

    Object.defineProperty(this, "_getDiagnostico", {
        get: function() {
            return _diagnostico;
        }
    });

    Object.defineProperty(this, "_setDiagnostico", {
        set: function(diagnostico) {
            _diagnostico = diagnostico;
        }
    });
};

p1 = new Paciente("Ignacio", 50, "11.111.111-1", "Diabetes"); //instanciar
p2 = new Paciente("María", 40, "12.222.222-2", "Hipotiroidismo"); //instanciar
p3 = new Paciente("Pedro", 15, "16.666.666-6", "Esguince"); //instanciar

c1 = new Consultorio("Davila", [p1, p2, p3]); //instanciar

console.log(c1);

Paciente.prototype.pacienteDevuelto = function() {
    return this._getNombre ;
};

Paciente.prototype.ficha = function() {
    return `Nombre: ${this._getNombre} Edad: ${this._getEdad} Rut: ${this._getRut} Diagnóstico: ${this._getDiagnostico}` ;
};


Consultorio.prototype.buscarPaciente = function(pacienteBuscar) {
    let encontrado = this._getPacientes.find(x => pacienteBuscar == x.pacienteDevuelto())
        if (encontrado) {
            console.log(encontrado.ficha()) ;
        } else {
            console.log(`Paciente no encontrado`);
        }
};

c1.buscarPaciente("Ignacio");

Consultorio.prototype.fichero = function() {
    this._getPacientes.forEach(element => {
        console.log(element.ficha());
    });
};

c1.fichero();





//Requerimientos:
// 1. Crear todo el código usando ES5.
// 2. Crear una función constructora para cada objeto.
// 3. Implementar métodos getters y setters para poder acceder y modificar los datos de los pacientes.
// 4. Crear un método mediante la propiedad prototype que permita buscar los datos de los usuarios por nombre y otro método que permita mostrar todos los datos de los usuarios registrados.
// 5. Instanciar cada objeto utilizando la instrucción new.


