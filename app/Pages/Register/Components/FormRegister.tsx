'use client'
import { Button, Input } from '@nextui-org/react';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import { fetchPost } from '@/app/Services/baseService';
import { sharingInformationService } from '@/app/Services/sharing-information.serviece';
import getSha512 from '@/app/Utilities/hash';
function FormRegister() {
    const router = useRouter()
    const validateLength = (e: any) => {
        if (e.target.value.length > e.target.maxLength)
            e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    const { register, formState: { errors }, handleSubmit, reset } = useForm<IRequestLogin>();
    const onSubmit: SubmitHandler<IRequestLogin> = async (data: IRequestLogin): Promise<void> => {
        data.password = getSha512(data.password);
        fetchPost<ILogin, IResponseLogin>('/api/member/register', data).then((response: IResponseLogin) => {
            if (response.error) {
                sharingInformationService.setModalInfo({ title: 'Información', message: response.error.message, isOpen: true });
                if(response.error.no == 0) reset()
            } else {
                sharingInformationService.setModalInfo({ title: 'Error', message: "Ocurrió un error inesperado, favor de intentarlo mas tarde.", isOpen: true });
            }
        }).catch((error) => { })
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input className='my-2' variant='bordered'  {...register("completeName", { required: true })} type="text" label="Nombre Completo" isRequired={errors.completeName ? true : false} />
                <Input className='my-2' variant='bordered' maxLength={10}  {...register("phoneNumber", { required: true })} type="number" label="Teléfono celular" isRequired={errors.phoneNumber ? true : false} onInput={validateLength} />
                <Input className='my-2' variant='bordered' {...register("emailAddress", { required: true })} type="email" label='Correo' isRequired={errors.emailAddress ? true : false} />
                <Input className='my-2' variant='bordered' {...register("recommended", { required: true })} type="text" label='Recomendado por' isRequired={errors.recommended ? true : false} />
                <Input className='my-2' variant='bordered' {...register("password", { required: true })} type="password" label='Contraseña' isRequired={errors.password ? true : false} />
                <div >
                    <div className='mb-2'>
                        <Button className='bg-[#e10600] text-white w-full' radius="full" type="submit">Entrar</Button>
                    </div>
                    <div >
                        <button className='btn font-semibold w-full' type="button" onClick={() => { router.push('Login') }}>¿Ya tienes cuenta? Iniciar sesión</button>
                    </div>
                </div>

            </form>
        </>
    )
}

export default FormRegister