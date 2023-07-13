import { postData } from "../helpers/postData";
import { putData } from "../helpers/putData";
import Swal from 'sweetalert2'

export const submitForm = async (form:HTMLElement, URL:string, studentId:number|null) => {
    form.addEventListener('submit', async (event:any) => {
        event.preventDefault();
        
        const studentData:any = {};
        const formChildren = Object.values(form);
        
        formChildren.forEach((inputChild) => {
            if(inputChild.id){
                studentData[inputChild.id] = inputChild.value;
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
            ).then(()=>{    
                window.location.href = "../index.html"
            })
        }
        //action to create a student
        if(!studentId){
            await postData(URL, studentData);
            Swal.fire(
                'Success!',
                'student has been successfully created!',
                'success'
            ).then(()=>{
                // each form field is cleaned up
                formChildren.forEach((inputChild) => {
                    if(inputChild.id){
                        inputChild.value = '';
                    }
                })
            })
        }

    })
}