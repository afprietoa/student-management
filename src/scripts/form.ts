import { environment } from "../enviroments/enviroment";
import { getData } from "../helpers/getData";
import { submitForm } from "../modules/submitForm";


const form =document.getElementById('form') as HTMLElement;

const formChildren: Array<HTMLElement> = Object.values(form);

const studentIdStr: string = sessionStorage.getItem('studentByUpdate')
? JSON.parse(sessionStorage.getItem('studentByUpdate')!)
: "";

const studentId: number | null = studentIdStr ? parseInt(studentIdStr) : null;

const title = document.querySelector(".title-form") as HTMLEmbedElement;
const submitButton: HTMLElement = formChildren[formChildren.length-1];

submitButton.innerHTML = studentId
? `Save`
: `Sig In`;

document.addEventListener('DOMContentLoaded', async () =>{

    let student:any = {};
    const URL = studentId ? `'estudiantes/'}${studentId}` : 'estudiantes/';
    try {
        if (studentId){

            student = await getData(URL);

            title.innerText = studentId
            ? `Update data of ${student.estudiante_nombres}`
            : "Add new student";


            formChildren.forEach((inputChild: any) => {
                if (inputChild.id){
                    inputChild.value = student[inputChild.id];
                }
            })
        }
        submitForm(form, URL, studentId);
    } catch (error) {
        console.log(error);
    }
});