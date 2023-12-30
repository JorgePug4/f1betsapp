'use client'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation'
import { fetchPost } from '@/app/Services/baseService';
import { sharingInformationService } from '@/app/Services/sharing-information.serviece';
import getSha512 from '@/app/Utilities/hash';
import { ILogin, IResponseLogin } from '@/app/Models/Member.Types';
import { useDispatch } from 'react-redux';
import { createmember } from '@/app/Context/Slices/MemberSlice';
import { EXCEPTION_MESSAGES } from '@/app/Utilities/constants';
export default function FormLogin() {
    const dispatch = useDispatch();
    const router = useRouter()
    const validateLength = (e: any) => {
        if (e.target.value.length > e.target.maxLength)
            e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    const { register, formState: { errors }, handleSubmit, reset  } = useForm<ILogin>();
    const onSubmit: SubmitHandler<ILogin> = async (data: ILogin): Promise<void> => {
        data.password = getSha512(data.password);
        fetchPost<ILogin, IResponseLogin>('/api/member/login', data).then((response: IResponseLogin) => {
            if (response.error.no !== 0) {
                sharingInformationService.setModalInfo({ title: 'Información', message: response.error.message, isOpen: true });
            }
            else{
                dispatch(createmember(response));
            }
        }).catch((error) => {
            sharingInformationService.setModalInfo({ title: 'Información', message: EXCEPTION_MESSAGES, isOpen: true });
         })
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input className='my-2' variant='bordered' maxLength={10}  {...register("phoneNumber", { required: true })} type="number" label="Teléfono celular" isRequired={errors.phoneNumber ? true : false} onInput={validateLength} />
                <Input className='my-2' variant='bordered' {...register("password", { required: true })} type="password" label='Contraseña' isRequired={errors.password ? true : false} />
                <div >
                    <div className='mb-2'>
                        <Button className='bg-black text-white w-full' radius="full" type="submit">Entrar</Button>
                    </div>
                    <div >
                        <button className='btn font-semibold w-full' type="button" onClick={() => { router.push('Register') }}>Crear una cuenta</button>
                    </div>
                </div>

            </form>
        </>
    )
}
