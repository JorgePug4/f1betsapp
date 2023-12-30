import { Button } from '@nextui-org/button';
import Image from 'next/image'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
import FormLogin from './Components/FormLogin';

export default function Login() {
  return <>
    <div className='flex justify-center h-screen items-center bg-[#e10600] p-4'>
      <div className='md:flex basis-11/12 sm:basis-auto'>
        <div className='flex justify-center items-center'>
          <Image
            src="/LogoF1_transparent.png"
            alt="LoginLogo"
            width={400}
            height={400}
            sizes="100vw"
            // Make the image display full width
            style={{
              width: '90%',
              height: 'auto',
            }}
          />
        </div>
        <div className='flex justify-center items-center w-full'>
          <div className='basis-full sm:basis-5/6 md:basis-4/6'>
            <h1 className="text-2xl font-['font-f1']">Bienvenido</h1>
            <Card className="max-w-[800px]">
              <CardHeader className="flex gap-3">
                <div className="flex flex-col basis-full">
                  <h1 className='text-2xl font-["font-f1"]'>Acceso</h1>
                  <FormLogin />
                </div>
              </CardHeader>
              <CardBody>
                <p></p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>

  </>
}