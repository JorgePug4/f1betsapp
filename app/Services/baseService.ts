
//generate function general fetch post generic type request generic type response
export async function fetchPost<T, R>(url: string, data: T) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        },
        body: JSON.stringify(data)
    });
    let res = await response.json() as R;
    return res;
}
