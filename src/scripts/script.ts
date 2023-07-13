import { initDataTable } from "../modules/initDataTable";
import { validate } from "../modules/validations";

const thead = document.getElementById('table-head') as HTMLFormElement;
const tbody = document.getElementById('table-body') as HTMLFormElement;

const button = document.getElementById('btn-form') as HTMLFormElement;
const columns: string[] = ["ID", "Nombre", "Apellidos", "Celular", "Correo", "fechaCreacion", "Accciones"];

let dataTable: any;
let isInitialized = false;

document.addEventListener('DOMContentLoaded', async() => {
    initDataTable(isInitialized, dataTable, columns, thead, tbody);
})

const inputs:NodeList = document.querySelectorAll('input')

console.log(inputs)
inputs.forEach(input =>{
    console.log(input)
    input.addEventListener('blur', (input)=>{
        console.log(input.target)
        validate(input.target)
    })
})


button.addEventListener('click', (e) =>{
    e.preventDefault();

    // Obtener los valores de los inputs

    const tipoIdentificacion = document.getElementById('tipoDocumento') as HTMLFormElement;
    const numeroIdentificacion = document.getElementById('numeroDocumento') as HTMLFormElement;
    const nombres = document.getElementById('nombres') as HTMLFormElement;
    const apellidos = document.getElementById('apellidos') as HTMLFormElement;
    const celular = document.getElementById('celular') as HTMLFormElement;
    const correo = document.getElementById('correo') as HTMLFormElement;
    const linkedin = document.getElementById('linkedin') as HTMLFormElement;
    const github = document.getElementById('github') as HTMLFormElement;

    

});