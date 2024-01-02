'use client'

import { Box, Button, Container, Flex, Text, TextArea, TextField } from "@radix-ui/themes"
import * as Form from "@radix-ui/react-form";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { LoadingButton } from "../ui/LoadingButton";

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    return (
        <Flex direction={'column'} gap='3' align='center' justify={'start'} width={'100%'}>
            <Container size='1' width='max-content'>
                {isSubmitted ? (
                    <Flex direction={'column'} gap='3' align='center' justify={'center'} width={'100%'}>
                        <Text
                            color='sky' 
                            size={{
                                initial: '3',
                                md: '5'
                            }}
                            align='center'
                        >Thanks for reaching out! We'll get back to you as soon as possible.</Text>
                    </Flex>
                ): (
                    <Form.Root 
                        onSubmit={async (event) => {
                            event.preventDefault()
                            setIsSubmitting(true)
                            const data = Object.fromEntries(new FormData(event.currentTarget)) as {
                                email: string
                                message: string
                            }
                            const response = await fetch('https://api.dev.thinair.cloud/v1/website/contact', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(data)
                            })
                            const json = await response.json()
                            console.log(json)
                            setIsSubmitting(false)
                            setIsSubmitted(true)
                        }}
                    >
                        <Flex direction={'column'} gap='4'>
                            <Form.Field name="email" asChild>
                                <Flex direction={'column'} gap={'2'} 
                                    className="
                                        w-[370px]
                                        md:w-[600px]
                                    "
                                >
                                    <Text weight={'medium'}>Email:</Text>
                                    <Form.Control asChild>
                                        <TextField.Input
                                            required
                                            type="email"
                                            placeholder={'kelly@acme.com'}
                                            style={{width: '100%'}}
                                        />
                                    </Form.Control>
                                    <Form.Message match="valueMissing" asChild>
                                        <Text color="crimson">Please enter a valid email.</Text>
                                    </Form.Message>
                                </Flex>
                            </Form.Field>
                            <Form.Field name="message" asChild>
                                <Flex direction={'column'} gap={'2'} width={'100%'}>
                                    <Text weight={'medium'}>What are you interested in?</Text>
                                    <Form.Control asChild>
                                        <TextArea
                                            size='3'
                                            required
                                            placeholder={`I'm interested in creating an AI system for my business that allows us to simplify product selection from our product libraries.`}
                                            style={{width: '100%', height: '150px'}}
                                        />
                                    </Form.Control>
                                    <Form.Message match="valueMissing" asChild>
                                        <Text color="crimson">Please enter a message!</Text>
                                    </Form.Message>
                                </Flex>
                            </Form.Field>
                            <Form.Submit asChild>
                                <LoadingButton isLoading={isSubmitting} highContrast><PaperPlaneIcon/>{`Send`}</LoadingButton>
                            </Form.Submit>
                        </Flex>
                    </Form.Root>
                )}
            </Container>
        </Flex>
    )
}