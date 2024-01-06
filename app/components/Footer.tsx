import { Flex, Section, Separator, Text } from "@radix-ui/themes"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <Section mt="9" py='1' px='9' className="border-slate7 border-solid border-t ">
            <Flex direction={'column'} justify={'start'} align='start' py='4'>
                <Flex direction='row' justify='between' align='start' gap='3' px='8' py='5' width='100%'>
                    <Flex direction='column' gap='2'>
                        <Text size='3' weight='bold'>Services</Text>
                        <Link href='/about'><Text size='2' weight='regular'>About</Text></Link>
                        <Link href='/contact-us'><Text size='2' weight='regular'>Contact Us</Text></Link>
                    </Flex>
                    <Flex direction={'column'} gap="2" justify={'center'} align='center' className="self-end">
                        <Image src="assets/logos.blueprint/blueprint-logo-fullText.svg" width={100} height={100} alt="full-logo"/>
                        <Text align='center' size={'1'} color='gray'>Copyright @ 2024 Blueprint Custom Apparel. All rights reserved.</Text>
                    </Flex> 
                    <Flex direction={'column'} gap='3'>
                        <Text size='3' weight='bold'>Follow Us</Text>
                        <Flex gap='3'>
                            <Link href='https://www.linkedin.com/company/blueprintbrothers-llc/' target="_blank">
                                <Image src="/assets/logos.social/linkedin-logo.svg" alt="instagram-logo" width={24} height={24}/>
                            </Link>
                            <Link href='https://www.instagram.com/blueprintcustom/' target="_blank">
                                <Image src="/assets/logos.social/instagram-logo.svg" alt="instagram-logo" width={24} height={24}/>
                            </Link>
                            <Link href='https://www.facebook.com/BlueprintCustomApparel' target="_blank">
                                <Image src="/assets/logos.social/facebook-logo.svg" alt="instagram-logo" width={24} height={24}/>
                            </Link>
                        </Flex>

                    </Flex>
                </Flex>
            </Flex>
        </Section>
    )
}