import sha512 from 'js-sha512';


export default function getSha512(text : string): any{
    return sha512.sha512(text)
}

