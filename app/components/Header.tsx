import { Button, Container, Flex } from "@radix-ui/themes";
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
                        <Image src='/assets/blueprint-logo-fullText.svg' alt='logo' width={90} height={40}></Image> 
                    </Link>
                    
                    <Link href="/contact">
                        <Button highContrast>Contact Us</Button>
                    </Link>
                </Flex>
            </Container>
        </Flex>
    )
}