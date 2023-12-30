interface IMember{
    completeName?: string;
    phoneNumber?: string;
    password?: string;
    emailAddress?: string;
    recommended?: string;
}

interface ILogin{
    phoneNumber: string;
    password: string;
}

interface IRequestLogin{
    completeName: string;
    phoneNumber: string;
    password: string;
    emailAddress: string;
    recommended: string;
}


interface IResponseLogin{
    completeName?: string;
    phoneNumber?: string;
    password?: string;
    emailAddress?: string;
    recommended?: string;
    typeUser?: number;
    status?: number;
    error:Error;

}
