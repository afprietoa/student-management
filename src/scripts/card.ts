import { getData } from "../helpers/getData";
import { printCard } from "../modules/printCard";

const cardHeader=document.querySelector('.card-header') as HTMLElement;
const cardBody=document.querySelector('.card-body') as HTMLElement;

const studentIdStr2: string = sessionStorage.getItem('studentByShow')
? JSON.parse(sessionStorage.getItem('studentByShow')!)
: "";


const studentId2: number | null = studentIdStr2 ? parseInt(studentIdStr2) : null;

document.addEventListener('click', async (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if(target.classList.contains('visibility')){
    console.log('Entro a la tarjeta')
    let student2:any = {};
    const URL = studentId2 ? `estudiantes/${studentId2}` : 'estudiantes/';
    try {
        if (studentId2){

            student2 = await getData(URL);
            student2 = student2.data[0];
            console.log(student2) 
            printCard(cardHeader, cardBody, student2)
        }

    } catch (error) {
        console.log(error);
    }
    }
})
