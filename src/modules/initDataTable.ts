import { environment } from "../enviroments/enviroment";
import { getData } from "../helpers/getData";
import { Data, Estudiante } from "../scripts/classes/estudiante";
import { clearTableElements } from "./clearTableElements";
import { printBody } from "./printTBody";
import { printTHead } from "./printTHead";
import DataTable from 'datatables.net-dt';


const dataTableOptions: any = {
    pageLength: 5,
    destroy: true
};

let data: Data;
let students: Array<Estudiante>;
export const initDataTable: (isInitialized:boolean, dataTable: any , columns:Array<string>,thead:HTMLElement|null, tbody:HTMLElement|null) =>void= async (isInitialized , dataTable , columns,thead, tbody) =>{
    if(isInitialized){
        dataTable.destroy();
    }

    data = await getData(environment.apiUrl + 'estudiantes');
    students = data.data;

    clearTableElements(thead);
    clearTableElements(tbody);

    printTHead(thead, columns);
    printBody(tbody, students);

    dataTable = new DataTable( '#example', dataTableOptions );
    
    isInitialized = true;
}