import { Estudiante } from "../scripts/classes/estudiante";

export const printCard: (cardHeader: HTMLElement|null, cardBody: HTMLElement|null, student: Estudiante) => void = (cardHeader, cardBody,student)=>{
    
    if (cardHeader && cardBody) {
        cardHeader.innerHTML = '';
        cardBody.innerHTML = '';
      }

    let h5 = document.createElement('h5') as HTMLElement;
    let txtH5= document.createTextNode(`${student.estudiante_nombres} - Data`) as Text;
    h5.setAttribute('class','card-subtitle mb-2 text-body-secondary')
    h5.appendChild(txtH5);

    cardHeader?.appendChild(h5);

    let ul = document.createElement('ul') as HTMLElement;
    ul.setAttribute('class','list-group list-group-flush')

    let liId= document.createElement('li') as HTMLElement;
    let txtId= document.createTextNode(`ID: ${student.estudiante_id.toString()}`) as Text;
    liId.setAttribute('class','list-group-item')
    liId.appendChild(txtId);
    ul?.appendChild(liId);

   let liName= document.createElement('li') as HTMLElement;
   let txtName= document.createTextNode(`Nombres: ${student.estudiante_nombres}`) as Text;
   liName.setAttribute('class','list-group-item')
   liName.appendChild(txtName);
   ul?.appendChild(liName);

   let liLastName= document.createElement('li') as HTMLElement;
   let txtLastName= document.createTextNode(`Apellidos: ${student.estudiante_apellidos}`) as Text;
   liLastName.appendChild(txtLastName);
   liLastName.setAttribute('class','list-group-item')
   ul?.appendChild(liLastName);

   let liCellphone= document.createElement('li') as HTMLElement;
   let txtCellphone= document.createTextNode(`Celular: ${student.estudiante_celular.toString()}`) as Text;
   liCellphone.appendChild(txtCellphone);
   liCellphone.setAttribute('class','list-group-item')
   ul?.appendChild(liCellphone);

   let liEmail= document.createElement('li') as HTMLElement;
   let txtEmail= document.createTextNode(`Correo: ${student.estudiante_correo}`) as Text;
   liEmail.appendChild(txtEmail);
   liEmail.setAttribute('class','list-group-item')
   ul?.appendChild(liEmail);

   let liCreationDate= document.createElement('li') as HTMLElement;
   let txtCreationDate= document.createTextNode(`Fecha de Creacion: ${student.estudiante_fechaCreacion.toString()}`) as Text;
   liCreationDate.appendChild(txtCreationDate);
   liCreationDate.setAttribute('class','list-group-item')
   ul?.appendChild(liCreationDate);

    cardBody?.appendChild(ul);
}