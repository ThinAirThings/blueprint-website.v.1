
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

export const ContactFormNotify = ({
    email="default",
    name="default",
    company="default",
    phoneNumber="unspecifed",
    quantity="unspecifed",
    budget="unspecifed",
    message="unspecifed",
}:{
    email: string
    name: string
    company: string
    phoneNumber: string
    quantity: string
    budget: string
    message: string
}) => {
    return (
        <Html>
            <Head/>
            <Preview>New Contact Form</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        <Section className="mt-[32px]">
                            <Img
                                src={`https://blueprintapparelcompany.com/logos.blueprint/blueprint_email.png`}
                                width="200"
                                height="112"
                                alt="Blueprint"
                                className="my-0 mx-auto"
                            />
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            New Contact Form
                        </Heading>

                        <Section>
                            <Text className="text-black text-[16px] font-normal text-center p-0 my-[5px] mx-0">
                                <strong>Email: </strong>{email}
                            </Text>
                            <Text className="text-black text-[16px] font-normal text-center p-0 my-[5px] mx-0">
                                <strong>Name: </strong>{name}
                            </Text>
                            <Text className="text-black text-[16px] font-normal text-center p-0 my-[5px] mx-0">
                                <strong>Compant: </strong>{company}
                            </Text>
                            <Text className="text-black text-[16px] font-normal text-center p-0 my-[5px] mx-0">
                                <strong>Phone Number: </strong>{phoneNumber??"unspecified"}
                            </Text>
                            <Text className="text-black text-[16px] font-normal text-center p-0 my-[5px] mx-0">
                                <strong>Quantity: </strong>{quantity??"unspecified"}
                            </Text>
                            <Text className="text-black text-[16px] font-normal text-center p-0 my-[5px] mx-0">
                                <strong>Budget: </strong>{budget??"unspecified"}
                            </Text>
                            <Text className="text-black text-[16px] font-normal text-center p-0 my-[5px] mx-0">
                                <strong>Message: </strong>{message??"unspecified"}
                            </Text>
                            <Text className="text-black text-[16px] font-normal text-center p-0 my-[10px] mx-0">
                                <strong>NOTE: </strong>This customer has been added to Printavo
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
} 
export default ContactFormNotify;