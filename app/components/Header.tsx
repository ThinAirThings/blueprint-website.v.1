import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Box, Button, Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";



export const Header: FC = () => {
    return (
        <Flex position={'fixed'} className="border-b border-slate8 w-full z-[2] bg-white/70 backdrop-blur-sm">
            <Container
                size={{
                    initial: '1',
                    sm: '2',
                    md: '3',
                    lg: '4'
                }}
            >
                <Flex justify={'between'} align={'end'} py='3' px='3'>
                    <Link href='/'>
                        <Image src='/assets/logos.blueprint/BP-logo.svg' alt='logo' width={35} height={40}></Image> 
                    </Link>
                    <Flex gap='7' align='end'>
                        <Link href="/about">
                            <Box display={{
                                initial: 'none',
                                md: 'block'
                            }}><Text weight='medium'>About Us</Text></Box>
                        </Link>
                        <Link href="/contact-us">
                            <Button highContrast><PaperPlaneIcon/>Contact Us</Button>
                        </Link>
                    </Flex> 
                </Flex>
            </Container>
        </Flex>
    )
}