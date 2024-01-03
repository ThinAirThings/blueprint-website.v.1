import { Flex, Section, Separator, Text } from "@radix-ui/themes"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <Section mt="9" py='1' px='3' className="border-slate7 border-solid border-t ">
            <Flex direction={'column'} justify={'start'} align='start' py='4'>
                <Flex direction='row' justify='center' align='start' gap='3' px='8' mb='5'>
                    <Flex direction='column' gap='2'>
                        <Text size='3' weight='medium'>Services</Text>
                        <Link href='/about'><Text size='2' weight='regular'>About</Text></Link>
                        <Link href='/contact-us'><Text size='2' weight='regular'>Contact Us</Text></Link>
                        <Link href='#services'><Text size='2' weight='regular'>Services</Text></Link>
                    </Flex>
                </Flex>
                <Separator my="3" size="4" />
                <Flex justify={'center'} width='100%' align='end' mt='3' gap='5'>
                    <Flex direction={'column'} gap="2" justify={'center'} align='center'>
                        <Image src="assets/logos.blueprint/blueprint-logo-fullText.svg" width={100} height={100} alt="full-logo"/>
                        <Text align='center' size={'1'} color='gray'>Copyright @ 2024 Blueprint Custom Apparel. All rights reserved.</Text>
                    </Flex> 
                </Flex> 
            </Flex>
        </Section>
    )
}