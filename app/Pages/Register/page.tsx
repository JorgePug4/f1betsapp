import React from 'react'
import { Button } from '@nextui-org/button';
import Image from 'next/image'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
import FormRegister from './Components/FormRegister';
export default function Register() {
  return (
    <>
    <div className='flex justify-center h-screen items-center bg-[#004267;] p-4'>
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
          <div className='basis-full md:basis-4/6'>
            <Card className="max-w-[800px]">
              <CardHeader className="flex gap-3">
                <div className="flex flex-col basis-full">
                  <h1 className='text-2xl font-["font-f1-2"]'>Registrate</h1>
                  <FormRegister />
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
  )
}
