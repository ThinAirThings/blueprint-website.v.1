
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

export const ContactFormResponseEmail = () => {
    return (
        <Html>
            <Head/>
            <Preview>Thanks for contacting Blueprint!</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        <Section className="mt-[32px]">
                            <Img
                                src={`https://www.blueprintapparelcompany.com/assets/logos.blueprint/blueprint-email.png`}
                                width="200"
                                height="112"
                                alt="Blueprint"
                                className="my-0 mx-auto"
                            />
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Thanks for contacting Blueprint!
                        </Heading>
                        <Text className="text-black text-[16px] font-normal text-center p-0 my-[30px] mx-0">
                            We'll be in touch shortly.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
} 
export default ContactFormResponseEmail;