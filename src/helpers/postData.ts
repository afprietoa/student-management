import { environment } from "../enviroments/enviroment";
import { Estudiante } from "../scripts/classes/estudiante";
import customFetch from "../utils/axios";

export const postData = async (url:string, obj:Estudiante): Promise<any> => {
    try {
        const resp = await customFetch.post(url, obj,{ 
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