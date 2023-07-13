import { getData } from "../helpers/getData";
import { submitForm } from "../modules/submitForm";


const form =document.getElementById('form') as HTMLElement;

const formChildren: Array<HTMLElement> = Object.values(form);
console.log(formChildren)
const studentIdStr: string = sessionStorage.getItem('studentByUpdate')
? JSON.parse(sessionStorage.getItem('studentByUpdate')!)
: "";

const studentId: number | null = studentIdStr ? parseInt(studentIdStr) : null;

console.log(studentId)

const title = document.querySelector(".title-form") as HTMLEmbedElement;
const submitButton: HTMLElement = formChildren[formChildren.length-1];

console.log(submitButton)
console.log(title)

submitButton.innerHTML = studentId
? `Save`
: `Sig In`;

document.addEventListener('click', async (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if(target.classList.contains('person') || target.classList.contains('edit')){
    let student:any = {};
    const URL = studentId ? `estudiantes/${studentId}` : 'estudiantes/';
    try {
        if (studentId){

            student = await getData(URL);
            student = student.data[0];
            // console.log(student)
            title.innerText = studentId
            ? `Update data of ${student.estudiante_nombres}`
            : "Add new student";


            formChildren.forEach((inputChild: any) => {
                // console.log(inputChild)
                if (inputChild.id){
                    // console.log(`estudiante_${inputChild.id}`)
                    //console.log(student[`estudiante_${inputChild.id}`])
                        inputChild.value = student[`estudiante_${inputChild.id}`];
                }
            })
        }
        submitForm(form, URL, studentId);
    } catch (error) {
        console.log(error);
    }
}
});

const modalCard = document.getElementById('staticBackdrop');

modalCard?.addEventListener('unload',()=>{
    sessionStorage.removeItem('studentByUpdate')
})