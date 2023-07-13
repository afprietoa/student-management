import { environment } from "../enviroments/enviroment";
import { Estado, Estudiante } from "../scripts/classes/estudiante";
import customFetch from "../utils/axios";

export const putData = async (url:string, obj:(Estudiante|Estado)): Promise<any> => {
    try {
        const resp = await customFetch.put(url, obj,{ 
            headers:
            { 
                authorization: `Bearer ${environment.token}`
            },
        });
        return resp.data
      } catch (error) {
            console.log(error);
      }
}