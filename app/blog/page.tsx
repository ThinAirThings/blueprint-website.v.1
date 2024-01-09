import { Container, Flex, Grid, Heading } from "@radix-ui/themes";
import { BlogCard } from "./components/BlogCard";
import path from "path";



export default function () {
    return (
        <Container size={{
            initial: '1',
            sm: '2',
            md: '3',
            lg: '4'
        }}>
            <Flex direction={'column'}>
                <Flex className="self-center" direction={'column'} py='9' gap='5' align={'center'}>
                    <Heading size='9' as='h1'>Custom Apparel Articles</Heading>
                    <Heading size='7' as='h3' color='gray'>Your Ultimate Guide to Custom Clothing Solutions</Heading>
                </Flex>
                <Grid>
                    <BlogCard
                        postName={`personalized-apparel-making-a-mark-at-trade-shows`}
                    />
                </Grid>
            </Flex>
        </Container>
    )        
}