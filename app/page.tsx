import { Flex, Separator } from '@radix-ui/themes'
import { Hero } from './components/Hero'
import { Details } from './components/Details'
import { Services } from './components/Services'

export default function Home() {
    return (
        <Flex direction={'column'} gap='8'>
            <Hero/>
            <Separator size='4'/>
            <Services/>
            <Details/>
        </Flex>
    )
}
