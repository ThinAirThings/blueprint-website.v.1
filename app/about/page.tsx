import { Flex, Heading, Text } from "@radix-ui/themes";





export default function () {
    return (
        <div className="flex flex-col justify-center items-center gap-rx-7 pt-9">
            <Flex direction={'column'} align='center' justify={'center'} gap='3'>
                <Heading size={{
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
                    color='gray' 
                    size={{
                        initial: '3',
                        md: '5'
                    }}
                    align='center'
                ></Text>
            </Flex>
            <Flex direction={'column'} align='center' justify={'center'} gap='3' pb='9' width='100%'>
            </Flex>
        </div>
    )
}