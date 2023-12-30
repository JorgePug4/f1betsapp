export interface IMember{
    completeName?: string;
    phoneNumber?: string;
    password?: string;
    emailAddress?: string;
    recommended?: string;
}

export interface ILogin{
    phoneNumber: string;
    password: string;
}

export interface IRequestLogin{
    completeName: string;
    phoneNumber: string;
    password: string;
    emailAddress: string;
    recommended: string;
}


export interface IResponseLogin{
    completeName?: string;
    phoneNumber?: string;
    password?: string;
    emailAddress?: string;
    recommended?: string;
    typeUser?: number;
    status?: number;
    error:Error;

}

export const MemberEmptyState: IMember = {
    completeName: '',
    phoneNumber: '',
    password: '',
    emailAddress: '',
    recommended: ''
};
export interface PersistInfo {
    member: IMember;
}