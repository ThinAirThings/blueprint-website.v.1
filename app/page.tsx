import { Flex, Heading, Separator } from '@radix-ui/themes'
import { Hero } from './components/Hero'
import { Details } from './components/Details'
import { Services } from './components/Services'
import { ContactForm } from './contact-us/ContactForm'

export default function Home() {
    return (
        <Flex direction={'column'} gap='8'>
            <Hero/>
            <Separator size='4'/>
            <Services/>
            <Details/>
            <Separator size='4'/>
            <Flex justify={'center'} px='5'>
                <Flex direction={'column'} gap='3' width='min-content'>
                    <Heading>Get a Quote</Heading>
                    <ContactForm/>
                </Flex>
            </Flex>
        </Flex>
    )
}
