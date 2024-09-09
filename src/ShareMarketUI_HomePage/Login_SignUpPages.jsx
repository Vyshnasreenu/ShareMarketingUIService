import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalFooter, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login_SignUpPages = ({
    open, onClose, onOpen,
    // ---------FOR LOGIN
    isLogin, clickHandler, setIsLogin,
}) => {

    return (
        <div>
            {open ? (
                <Modal isOpen={open} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader></ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text fontWeight='bold' mb='1rem'>
                                Welcome to sharpely
                            </Text>
                            <FormControl isRequired>
                                <FormLabel>Name </FormLabel>
                                <Input mb={2} placeholder='Username' />
                                <FormLabel>Phone Number </FormLabel>
                                <Input type='number' mb={2} placeholder='Enter your phone number' />
                                <FormLabel>Email </FormLabel>
                                <Input type='text' placeholder='Enter your email address' />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter className='mx-0 row'>
                            <Button className='btn border text-white bg-dark' onClick={onClose}>
                                Send OTP
                            </Button>
                            <div className='text-center p-2'>OR</div>
                            <Button className='btn border text-white bg-dark'>Sign Up With  Google</Button>
                            <span className='text-center mt-2'>
                                Already have an account?
                                <Button type='button' className=' btn-link' onClick={clickHandler}>Login</Button>
                            </span>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            ) :
                (
                    <Modal isOpen={isLogin} onClose={() => setIsLogin(false)}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader></ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Text fontWeight='bold' mb='1rem'>
                                    Hello! let's get started
                                </Text>
                                <FormControl isRequired>
                                    <FormLabel>Email </FormLabel>
                                    <Input type='text' placeholder='Enter your email address' />
                                </FormControl>
                            </ModalBody>
                            <ModalFooter className='mx-0 row'>
                                <Button className='btn border text-white bg-dark' onClick={onClose}>
                                    Send OTP
                                </Button>
                                <div className='text-center p-2'>OR</div>
                                <Button className='btn border text-white bg-dark'>Sign Up With  Google</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                )}
        </div>
    )
}

export default Login_SignUpPages