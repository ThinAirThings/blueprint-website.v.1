import { Flex } from '@radix-ui/themes'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Details } from './components/Details'

export default function Home() {
    return (
        <Flex direction={'column'} gap='7'>
            <Hero/>
            <Details/>
        </Flex>
    )
}
