import { environment } from "../enviroments/enviroment";
import customFetch from "../utils/axios";

export const getData = async (url:string): Promise<any> => {
    try {
        const resp = await customFetch.get(url, { 
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