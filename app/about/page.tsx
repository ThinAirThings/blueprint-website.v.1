import { Container, Flex, Heading, Text } from "@radix-ui/themes";





export default function () {
    return (
        <Container size={{
            initial: '1',
            sm: '2',
            md: '3',
            lg: '4'
        }}>



            <div className="flex flex-col justify-center items-center gap-rx-7 pt-9">
                <Flex direction={'column'} align='center' justify={'center'} gap='3' px='5'>
                    <Heading align='center' size={{
                        initial: '5',
                        md: '7'
                    }} color='sky'>Screen Printing & Embroidery for Businesses</Heading>
                    <Heading 
                        size={{
                            initial: '7',
                            md: '9'
                        }} 
                        align='center'
                    >About Blueprint Custom Apparel</Heading>
                    <Text
                        align='center'
                        color='gray' 
                        size={{
                            initial: '3',
                            md: '5'
                        }}
                    >{`Welcome to Blueprint, a premier provider of custom-branded apparel, established in 2019 and based in Derry, New Hampshire. Our mission is to elevate business identities through our comprehensive suite of services including screen printing, embroidery, and a diverse selection of promotional items. We pride ourselves on fostering corporate relationships, dedicating our craft to enhancing your brand's professional image. Each product is a symbol of local excellence, meticulously crafted in New England. At Blueprint, we commit to unparalleled quality and service, ensuring that your brand stands out in the marketplace. Partner with us, and let's design the future of your brand together.`}</Text>
                </Flex>
                <Flex direction={'column'} align='center' justify={'center'} gap='3' pb='9' width='100%'>
                </Flex>
            </div>
        </Container>
    )
}