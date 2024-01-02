import { Badge, Box, Flex, Grid, Heading, Text } from "@radix-ui/themes"
import { FC } from "react"

// Brands
import northfaceLogo from '../../public/assets/logos.brands/northface-logo.png'
import neweraLogo from '../../public/assets/logos.brands/newera-logo.png'
import independentLogo from '../../public/assets/logos.brands/independent-logo.png'
import nikeLogo from '../../public/assets/logos.brands/nike-logo.png'
import bellacanvasLogo from '../../public/assets/logos.brands/bellacanvas-logo.png'
import carharttLogo from '../../public/assets/logos.brands/carhartt-logo.png'
import eddiebauerLogo from '../../public/assets/logos.brands/eddiebauer-logo.png'
import nextlevelLogo from '../../public/assets/logos.brands/nextlevel-logo.png'
import comfortcolorsLogo from '../../public/assets/logos.brands/comfortcolors-logo.png'
import championLogo from '../../public/assets/logos.brands/champion-logo.png'
import gildanLogo from '../../public/assets/logos.brands/gildan-logo.png'
import ogioLogo from '../../public/assets/logos.brands/ogio-logo.png'
import Image from "next/image"
import { CounterClockwiseClockIcon, PersonIcon, TargetIcon } from "@radix-ui/react-icons"

export const Details: FC = () => {
    return (
        <Flex direction={'column'} gap='6' align='center' mt={{
            initial: '1',
            md: '7'
        }}>
            <Box><Badge variant='surface' size='2' highContrast>Professional Apparel for Businesses</Badge></Box>
            <Grid className="w-full" justify={'between'} align='center' gap='7' columns={{
                initial: '1',
                md: '2'
            }}>
                <Flex direction={'column'} px={{
                    initial: '3',
                    md: '0'
                }}>
                    <Heading as='h3' color='blue' highContrast size={{
                        initial: '5',
                        md: '7'
                    }}>The Professional Apparel Company</Heading>
                    <Heading as='h4' size={{
                        initial: '4',
                        md: '6'
                    }}>Responsiveness. Quality. Reliability.</Heading>
                    <Flex direction={'column'} gap='5' pt='5'>
                        <Detail
                            icon={<PersonIcon width='18px' height='18px' color='var(--blue-12)'/>}
                            title='Deal with a real person. Every time.'
                            description={`With Blueprint you'll be working 1 on 1 with a sales representative dedicated to your account. We'll make sure you get exactly what you want on time every time.`}
                        />
                        <Detail
                            icon={<TargetIcon width='18px' height='18px' color='var(--blue-12)'/>}
                            title='Done right with high quality apparel.'
                            description={`Blueprint guarantees top-tier materials and craftsmanship in every piece. Experience the difference of premium apparel, tailored to fit your business's unique standards and style.`}
                        />
                        <Detail
                            icon={<CounterClockwiseClockIcon width='18px' height='18px' color='var(--blue-12)'/>}
                            title='Consistency you can rely on.'
                            description={`Count on Blueprint for apparel that stands the test of time, with consistent quality and service you can trust, order after order.`}
                        />
                    </Flex>
                </Flex>
                <Grid columns='4' gapX='3' gapY='4' align={'center'} justify={'center'} flow='row-dense' height='min-content' px={{
                    initial: '4',
                    md: '0'
                }}>
                    <Box><Image src={northfaceLogo} alt="northface-logo"/></Box>
                    <Box><Image src={neweraLogo} alt="newera-logo"/></Box>
                    <Box><Image src={independentLogo} alt="independent-logo"/></Box>
                    <Box><Image src={nikeLogo} alt="nike-logo"/></Box>
                    <Box><Image src={bellacanvasLogo} alt="bellacanvas-logo"/></Box>
                    <Box><Image src={carharttLogo} alt="carhartt-logo"/></Box>
                    <Box><Image src={eddiebauerLogo} alt="eddiebauer-logo"/></Box>
                    <Box><Image src={nextlevelLogo} alt="nextlevel-logo"/></Box>
                    <Box><Image src={comfortcolorsLogo} alt="comfortcolors-logo"/></Box>
                    <Box><Image src={championLogo} alt="champion-logo"/></Box>
                    <Box><Image src={gildanLogo} alt="gildan-logo"/></Box>
                    <Box><Image src={ogioLogo} alt="ogio-logo"/></Box>
                </Grid>
            </Grid>
        </Flex>
    )
}


const Detail: FC<{
    icon: React.ReactNode,
    title: string,
    description: string,
}> = ({
    icon,
    title,
    description
}) => {
    return (
        <Flex gap='3' pl={{
            initial: '4',
            md: '6'
        }}>
            <Box pt='1' width='min-content' height='min-content'>{icon}</Box>
            <Flex direction={'column'} gap='1'>
                <Text size='3' weight='bold'>{title}</Text>
                <Text size='3' weight='medium'>{description}</Text>
            </Flex>
        </Flex>
    )
}