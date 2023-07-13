import { Estudiante } from "../scripts/classes/estudiante";

export const printBody: (tbody: HTMLElement|null, array: Array<Estudiante>) => void = (tbody, array)=>{
    
    array.forEach((item) =>{

        let tr = document.createElement('tr') as HTMLElement;

        let tdId= document.createElement('td') as HTMLElement;
        let txtId= document.createTextNode(item.estudiante_id.toString()) as Text;
        tdId.appendChild(txtId);
        tr?.appendChild(tdId);


        let tdName= document.createElement('td') as HTMLElement;
        let txtName= document.createTextNode(item.estudiante_nombres) as Text;
        tdName.appendChild(txtName);
        tr?.appendChild(tdName);

        let tdLastName= document.createElement('td') as HTMLElement;
        let txtLastName= document.createTextNode(item.estudiante_apellidos) as Text;
        tdLastName.appendChild(txtLastName);
        tr?.appendChild(tdLastName);

        let tdCellphone= document.createElement('td') as HTMLElement;
        let txtCellphone= document.createTextNode(item.estudiante_celular.toString()) as Text;
        tdCellphone.appendChild(txtCellphone);
        tr?.appendChild(tdCellphone);

        let tdEmail= document.createElement('td') as HTMLElement;
        let txtEmail= document.createTextNode(item.estudiante_correo) as Text;
        tdEmail.appendChild(txtEmail);
        tr?.appendChild(tdEmail);

        let tdCreationDate= document.createElement('td') as HTMLElement;
        let txtCreationDate= document.createTextNode(item.estudiante_fechaCreacion.toString()) as Text;
        tdCreationDate.appendChild(txtCreationDate);
        tr?.appendChild(tdCreationDate);

        let tdActions= document.createElement('td') as HTMLElement;

        let spanVisibility= document.createElement('span') as HTMLElement;
        spanVisibility.setAttribute('class','material-symbols-outlined actions visibility')
        spanVisibility.setAttribute('id',item.estudiante_id.toString())
        let txtVisibility= document.createTextNode('visibility') as Text;
        spanVisibility.appendChild(txtVisibility);
        tdActions?.appendChild(spanVisibility);

        let spanEdit= document.createElement('span') as HTMLElement;
        spanEdit.setAttribute('class','material-symbols-outlined actions edit')
        spanEdit.setAttribute('id',item.estudiante_id.toString())
        spanEdit.setAttribute('data-bs-toggle','modal')
        spanEdit.setAttribute('data-bs-target','#staticBackdrop')
        let txtEdit= document.createTextNode('edit') as Text;
        spanEdit.appendChild(txtEdit);
        tdActions?.appendChild(spanEdit);

        let spanPersonRemove= document.createElement('span') as HTMLElement;
        spanPersonRemove.setAttribute('class','material-symbols-outlined actions person_remove')
        spanPersonRemove.setAttribute('id',item.estudiante_id.toString())
        let txtPersonRemove= document.createTextNode('person_remove') as Text;
        spanPersonRemove.appendChild(txtPersonRemove);
        tdActions?.appendChild(spanPersonRemove);     
        
        tr?.appendChild(tdActions);

        tbody?.appendChild(tr)
    });


}