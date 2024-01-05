import * as React from 'react';
import {Html, Button, Head, Preview, Tailwind, Body, Container, Heading, Img, Section} from '@react-email/components';

export function CustomerEmail(props: any) {
  const { url } = props;

  return (
        <Html lang="en">
            <Head/>
            <Preview>We'll get back to you soon!</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        <Section className="mt-[32px]">
                            <Heading>Hello</Heading>
                            <Img
                                src={`https://blueprintapparelcompany.com/assets/logos.brands/bellacanvas-logo.png`}
                                width="300"
                                height="37"
                                alt="Blueprint"
                                className="my-0 mx-auto"
                            />
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
  );
}
