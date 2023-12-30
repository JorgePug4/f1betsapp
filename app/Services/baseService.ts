import { sharingInformationService } from "./sharing-information.serviece";

//generate function general fetch post generic type request generic type response
export async function fetchPost<T, R>(url: string, data: T) {
    let res: R;
    sharingInformationService.setLoader(true);

    try {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify(data)
        });
        res = await response.json() as R;
    } catch (error) {
        sharingInformationService.setLoader(false);

        console.log(error);
        throw error;
    }
    sharingInformationService.setLoader(false);
    return res;

}
