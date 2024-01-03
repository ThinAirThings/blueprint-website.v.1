import { Card, Flex, Heading, Inset, Text } from "@radix-ui/themes"
import Image from "next/image"
import { FC } from "react"



export const Services = () => {
    return (
        <Flex direction={'column'} align='center' id="services" className="pt-[70px]">
            <Heading as='h3' size={{
                initial: '4',
                md: '7'
            }}>Custom Screen Printing & Embroidery</Heading>
            <Heading as='h2' color='blue' align='center' highContrast size={{
                initial: '6',
                md: '8'
            }}>Corporate Branded Apparel & Accessories</Heading>
            <Flex mt='5' gap='5' wrap={'wrap'} justify={'center'} align={'center'}>
                <ServiceCard
                    title='Screen Printed Apparel'
                    description='Create custom apparel for your brand with numerous options, personalized service.'
                    imageSrc='/assets/marketing.work/Instagram_NHDOHCO4.png'
                    imageShift={40}
                />
                <ServiceCard
                    title='Embroidered Apparel'
                    description='Elevate your brand by customizing accessories, apparel, hats, jackets, and more.'
                    imageSrc='/assets/marketing.work/brewery-insurance.jpeg'
                />
                <ServiceCard
                    title='Branded Accessories'
                    description='Add screen printing or embroidery to hats, outwear, workwear, safety gear, and more. '
                    imageSrc='/assets/marketing.work/PipeDream_Instagram_RastaColors.png'
                    imageShift={0}
                />
            </Flex>
        </Flex>
    )
}


const ServiceCard: FC<{
    title: string,
    description: string,
    imageSrc: string,
    imageShift?: number
}> = ({
    title,
    description,
    imageSrc,
    imageShift
}) => {
    return (
        <Card style={{maxWidth: 300, width: 'max-content'}}>
            <Flex direction={'column'} align='center' gap='2'>
            <Inset side="top" style={{height: 298}} >
                <Image
                    alt={title}
                    src={imageSrc}
                    width={300}
                    height={300}
                    style={{
                        transform: `translateY(${-(imageShift ?? 0)}px)`
                    }}
                />
            </Inset>
            <Text color='blue' highContrast size="5" weight="bold" align='center'>{title}</Text>
            <Text as='p' align='center' weight='medium'>{description}</Text>
            </Flex>
        </Card>
    )
}