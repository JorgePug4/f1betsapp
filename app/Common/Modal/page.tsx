'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";
import { sharingInformationService } from '@/app/Services/sharing-information.serviece';


function ModalInfo() {

    const [title, setTitle] = React.useState('');
    const [openModal, setMOpenmodal] = React.useState(false);    
    const {isOpen, onOpen, onOpenChange} = useDisclosure({isOpen: openModal});
    const [message, setMessage] = React.useState('');
    sharingInformationService.getModalInfo().subscribe((modalInfo: IModalInfo) => {
        // Aquí puedes utilizar las propiedades title y message de modalInfo si es necesario
        setMessage(modalInfo.message);
        setTitle(modalInfo.title);
        setMOpenmodal(modalInfo.isOpen);
    });
    const CloseModal = () => {
        sharingInformationService.resetModalInfo();
        setMOpenmodal(false);
    };
    return (
        <div>
            <Modal
                isOpen={isOpen}
                placement={"auto"}
                onOpenChange={onOpenChange}
                className='text-black'
                onClose={CloseModal}

            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                            <ModalBody>
                                <p>
                                    {message}
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={()=>CloseModal()}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalInfo