import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import { ContactForm } from "./ContactForm";


export default function (){
    return (
        <Container size={{
            initial: '1',
            sm: '2',
            md: '3',
            lg: '4'
        }}>
            <div className="flex flex-col justify-center items-center gap-rx-7 pt-9">
                <Flex direction={'column'} align='center' justify={'center'} gap='3'>
                    <Heading size={{
                        initial: '5',
                        md: '7'
                    }} color='sky'>Request a Quote</Heading>
                    <Heading 
                        size={{
                            initial: '7',
                            md: '9'
                        }} 
                        align='center'
                    >Custom Branded Apparel & Accessories</Heading>
                    <Text
                        color='gray' 
                        size={{
                            initial: '3',
                            md: '5'
                        }}
                        align='center'
                    >Whether you want to create custom embroidered apparel and accessories, design a custom screen printed shirt, or need help selecting the right materials, we can help. If you want to see what you’re design will look like in advance, attach it to the form and we’ll put together a design mockup package for you.</Text>
                </Flex>
                <Flex direction={'column'} align='center' justify={'center'} gap='3' pb='9' width='100%'>
                    <ContactForm/>
                </Flex>
            </div>
        </Container>
    )
}