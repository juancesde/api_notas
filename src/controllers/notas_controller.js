const notasController = {};
let notas_finales = []; 
let perdieron = []; 
let hablitan = []; 
let mayor_nota = {};
let ganaron=0;
let response={}

notasController.notasObtenidas = (req,res)=>{
    let array_estudiantes= req.body.estudiantes
    let nota_mayor = 0
    for (let index = 0; index < array_estudiantes.length; index++) {
        const estudiante = array_estudiantes[index];
        //calcular nota definitiva
        let nota_definitiva = (estudiante.n1+estudiante.n2+estudiante.n3+estudiante.n4+estudiante.n5)/5;
        let obj_estudiante={}
        obj_estudiante['nombre'] = estudiante.nombre;
        obj_estudiante['nota'] = nota_definitiva;
        notas_finales.push(obj_estudiante);
        //calcular mayor nota
        if (nota_definitiva>nota_mayor) {
            nota_mayor= nota_definitiva;
            mayor_nota['nombre'] = estudiante.nombre;
            mayor_nota['nota'] = nota_mayor;
        }

    }

    response['notas_finales'] = notas_finales
    response['mayor_nota'] = mayor_nota

    res.json(response);
}

module.exports = notasController