import { postData } from "../helpers/postData";
import { putData } from "../helpers/putData";
import Swal from 'sweetalert2'
import { printBody } from "./printTBody";
import { getData } from "../helpers/getData";
import { Data, Estudiante } from "../scripts/classes/estudiante";

const tbody = document.getElementById('table-body') as HTMLFormElement;
let students: Array<Estudiante>;
let data: Data;
export const submitForm = async (form:HTMLElement, URL:string, studentId:number|null) => {
    form.addEventListener('submit', async (event:any) => {
        event.preventDefault();
        
        const studentData:any = {};
        const formChildren = Object.values(form);
        
        formChildren.forEach((inputChild) => {
            if(inputChild.id && inputChild.id!='btn-form'){
                if(inputChild.id=='tipoIdentificacion' || 
                   inputChild.id=='numeroIdentificacion' ||
                   inputChild.id=='celular'){
                    studentData[inputChild.id] = Number(inputChild.value);
                }else{

                    studentData[inputChild.id] = inputChild.value;
                }
            }
        });

        
        //In order to prevent a student from being created or edited with missing information 


        // action to edit a student
        if(studentId){
            await putData(URL, studentData);
            Swal.fire(
                'Success!',
                'student has been successfully updated!',
                'success'
            ).then(async()=>{    
                data = await getData('estudiantes');
                students = data.data;
                printBody(tbody, students);
            })
        }
        //action to create a student
        if(!studentId){
            console.log(studentData)
            await postData(URL, studentData);
            Swal.fire(
                'Success!',
                'student has been successfully created!',
                'success'
            ).then(async()=>{
                // each form field is cleaned up
                formChildren.forEach((inputChild) => {
                    if(inputChild.id){
                        inputChild.value = '';
                    }
                })

                data = await getData('estudiantes');
                students = data.data;
                printBody(tbody, students);
            })
        }

    })
}