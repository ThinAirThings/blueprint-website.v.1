import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import { SmartSearch } from "./components/SmartSearch/SmartSearch";



export default function () {
    return (
        <Flex px='9' className="w-full h-full" direction={'column'}>
            <Heading>Products</Heading>
            <Box className="self-center"><SmartSearch/></Box>
        </Flex>
    )
}