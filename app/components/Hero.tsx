import { Box, Button, Container, Flex, Heading, Text } from "@radix-ui/themes";
import { FC } from "react";
import { PaperPlaneIcon, PersonIcon } from "@radix-ui/react-icons";
import Image from "next/image";
// Logos
import windfieldLogo from '../../public/assets/logos.customers/windfield-logo.png'
import bluebirdLogo from '../../public/assets/logos.customers/bluebird-logo.png'
import spaceforceLogo from '../../public/assets/logos.customers/spaceforce-logo.png'
import unhLogo from '../../public/assets/logos.customers/unh-logo.png'
import autostoreLogo from '../../public/assets/logos.customers/autostore-logo.png'
import amazonLogo from '../../public/assets/logos.customers/amazon-logo.png'
import fedexLogo from '../../public/assets/logos.customers/fedex-logo.png'
import versatileLogo from '../../public/assets/logos.customers/versatile-logo.png'
import pipedreamLogo from '../../public/assets/logos.customers/pipedream-logo.png'
import wrapcityLogo from '../../public/assets/logos.customers/wrapcity-logo.png'
import backyardLogo from '../../public/assets/logos.customers/backyard-logo.png'
import mentisLogo from '../../public/assets/logos.customers/mentis-logo.png'

export const Hero: FC = () => {
    return (
        <Flex direction={'column'} align='center' pt='8' gap='4'>
            <Heading as='h1' align='center' size='9' >Your Partner in <br/>Business Apparel</Heading>
            <Box className="w-8/12">
                <Heading as='h2' align='center' size='5' color='gray'>From concept to closet, our team crafts custom attire that elevates your workforce and brand, catering to everyone from corporate to creative industries like breweries, ensuring a lasting impact and style.</Heading>
            </Box>
            <Flex gap='5'>
                <Button highContrast><PaperPlaneIcon/>Contact Us</Button>
                <Button highContrast variant='outline'><PersonIcon/>Testimonials</Button>
            </Flex>
            <Text align={'center'} size='3' color='gray'>Blueprint works with Small Businesses, U.S. Government Agencies, Universities, Enterprises & Startups</Text>
            <Flex wrap='wrap' align='center' justify={'center'} gap='6' className="w-8/12">
                <Box><Image src={windfieldLogo} alt="windfield-logo" /></Box>
                <Box><Image src={bluebirdLogo} alt="bluebird-logo" /></Box>
                <Box><Image src={spaceforceLogo} alt="spaceforce-logo"/></Box>
                <Box><Image src={unhLogo} alt="unh-logo" /></Box>
                <Box><Image src={autostoreLogo} alt="autostore-logo" /></Box>
                <Box><Image src={amazonLogo} alt="amazon-logo" /></Box>
                <Box><Image src={fedexLogo} alt="fedex-logo" /></Box>
                <Box><Image src={versatileLogo} alt="versatile-logo" /></Box>
                <Box><Image src={pipedreamLogo} alt="pipedream-logo" /></Box>
                <Box><Image src={wrapcityLogo} alt="wrapcity-logo" /></Box>
                <Box><Image src={backyardLogo} alt="backyard-logo" /></Box>
                <Box><Image src={mentisLogo} alt="mentis-logo" /></Box>
            </Flex>
        </Flex>
    )
}