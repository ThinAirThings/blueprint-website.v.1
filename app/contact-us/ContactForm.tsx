'use client'

import { Container, Flex, Text, TextArea, TextField } from "@radix-ui/themes"
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { FormButton } from "../ui/FormButton";
import * as Form from "@radix-ui/react-form";
import { submitContactForm } from "./submitContactForm";
import { useFormState } from "react-dom";
import { useState } from "react";

export const ContactForm = () => {
    const [success, formAction] = useFormState(submitContactForm, false)
    const [submitted, setSubmitted] = useState(false)
    return (
        <Flex direction={'column'} gap='3' align='center' justify={'start'} width={'100%'}>
            <Container size='1' width='max-content'>
                {submitted ? (
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
                        action={formAction}
                        onSubmit={() => setSubmitted(true)}
                    >
                        <Flex direction={'column'} gap='4'>
                            <Form.Field name="name" asChild>
                                <Flex direction={'column'} gap={'2'} 
                                    className="
                                        w-[370px]
                                        md:w-[600px]
                                    "
                                >
                                    <Text weight={'medium'}>Name<Text color='red'>*</Text>:</Text>
                                    <Form.Control asChild>
                                        <TextField.Input
                                            required
                                            type="text"
                                            placeholder={'Kelly Smith'}
                                            style={{width: '100%'}}
                                        />
                                    </Form.Control>
                                    <Form.Message match="valueMissing" asChild>
                                        <Text color="crimson">Please enter a contact name.</Text>
                                    </Form.Message>
                                </Flex>
                            </Form.Field>
                            <Form.Field name="email" asChild>
                                <Flex direction={'column'} gap={'2'} 
                                    className="
                                        w-[370px]
                                        md:w-[600px]
                                    "
                                >
                                    <Text weight={'medium'}>Email<Text color='red'>*</Text>:</Text>
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
                            <Form.Field name="company" asChild>
                                <Flex direction={'column'} gap={'2'} 
                                    className="
                                        w-[370px]
                                        md:w-[600px]
                                    "
                                >
                                    <Text weight={'medium'}>Company<Text color='red'>*</Text>:</Text>
                                    <Form.Control asChild>
                                        <TextField.Input
                                            required
                                            type="text"
                                            placeholder={'Acme Inc.'}
                                            style={{width: '100%'}}
                                        />
                                    </Form.Control>
                                    <Form.Message match="valueMissing" asChild>
                                        <Text color="crimson">Please enter a company name.</Text>
                                    </Form.Message>
                                </Flex>
                            </Form.Field>
                            <Form.Field name="phoneNumber" asChild>
                                <Flex direction={'column'} gap={'2'} 
                                    className="
                                        w-[370px]
                                        md:w-[600px]
                                    "
                                >
                                    <Text weight={'medium'}>{`Phone Number:`}</Text>
                                    <Form.Control asChild>
                                        <TextField.Input
                                            type="text"
                                            placeholder={'603 555 5555'}
                                            style={{width: '100%'}}
                                        />
                                    </Form.Control>
                                </Flex>
                            </Form.Field>
                            <Form.Field name="quantity" asChild>
                                <Flex direction={'column'} gap={'2'} 
                                    className="
                                        w-[370px]
                                        md:w-[600px]
                                    "
                                >
                                    <Text weight={'medium'}>{`Quantity:`}</Text>
                                    <Form.Control asChild>
                                        <TextField.Input
                                            type="text"
                                            placeholder={'150'}
                                            style={{width: '100%'}}
                                        />
                                    </Form.Control>
                                </Flex>
                            </Form.Field>
                            <Form.Field name="budget" asChild>
                                <Flex direction={'column'} gap={'2'} 
                                    className="
                                        w-[370px]
                                        md:w-[600px]
                                    "
                                >
                                    <Text weight={'medium'}>{`Budget:`}</Text>
                                    <Form.Control asChild>
                                        <TextField.Input
                                            type="text"
                                            placeholder={'$1,800'}
                                            style={{width: '100%'}}
                                        />
                                    </Form.Control>
                                </Flex>
                            </Form.Field>
                            <Form.Field name="message" asChild>
                                <Flex direction={'column'} gap={'2'} width={'100%'}>
                                    <Text weight={'medium'}>What are you looking for?</Text>
                                    <Form.Control asChild>
                                        <TextArea
                                            size='3'
                                            placeholder={`I'm looking for t-shirts printed with our company logo.`}
                                            style={{width: '100%', height: '150px'}}
                                        />
                                    </Form.Control>
                                    <Form.Message match="valueMissing" asChild>
                                        <Text color="crimson">Please enter a message!</Text>
                                    </Form.Message>
                                </Flex>
                            </Form.Field>
                            <Form.Submit asChild>
                                <FormButton highContrast><PaperPlaneIcon/>{`Send`}</FormButton>
                            </Form.Submit>
                        </Flex>
                    </Form.Root>
                )}
            </Container>
        </Flex>
    )
}