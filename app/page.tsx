import { Container, Flex, Heading, Separator, Strong, Text } from '@radix-ui/themes'
import { Hero } from './components/Hero'
import { Details } from './components/Details'
import { Services } from './components/Services'
import { ContactForm } from './contact-us/ContactForm'

export default function Home() {
    return (
        <Container size={{
            initial: '1',
            sm: '2',
            md: '3',
            lg: '4'
        }}>
            <Flex direction={'column'} gap='8'>
                <Hero/>
                <Separator size='4'/>
                <Services/>
                <Details/>
                <Separator size='4'/>
                <Flex justify={'center'} px='5'>
                    <Flex direction={'column'} gap='3' width='min-content'>
                            <Heading>Get a Quote</Heading>
                            <Text weight='medium'>Or contact us by email: <Strong>support@blueprintapparelcompany.com</Strong></Text>
                        <ContactForm/>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    )
}
