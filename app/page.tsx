import { Flex } from '@radix-ui/themes'
import { Hero } from './components/Hero'
import { Details } from './components/Details'

export default function Home() {
    return (
        <Flex direction={'column'} gap='9'>
            <Hero/>
            <Details/>
        </Flex>
    )
}
