import { MobileIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { Box, Button, Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { CallUsButton } from "../ui/CallUsButton";
import { ContactUsButton } from "../ui/ContactUsButton";



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
                    <Flex gap={{
                        initial: '0',
                        md: '9'
                    }} align='end'>
                        <Link href='/'>
                            <Image src='/assets/logos.blueprint/BP-logo.svg' alt='logo' width={35} height={40}></Image> 
                        </Link>
                        <Flex gap='5'>
                            <TextLink label={`Products`} href={`/products`}/>
                            <TextLink label={`About`} href={`/about`}/>
                            <TextLink label={`Blog`} href={`/blog`}/>
                        </Flex>
                    </Flex>
                    <Flex gap='2' align='end'>
                        <ContactUsButton label={`Contact Us`} Icon={PaperPlaneIcon}/>
                        <CallUsButton label={`(603) 682-3603`} Icon={MobileIcon}/>
                    </Flex> 
                </Flex>
            </Container>
        </Flex>
    )
}

export const TextLink: FC<{
    label: string,
    href: string
}> = ({label, href}) => {
    return (
        <Link href={href}>
            <Box 
                display={{
                    initial: 'none',
                    md: 'block'
                }}>
                <Text weight='bold' size='3'>{label}</Text>
            </Box>
        </Link>
    )
}