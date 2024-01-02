import { Flex, Heading, Text } from "@radix-ui/themes";
import { ContactForm } from "./ContactForm";


export default function (){
    return (
        <div className="flex flex-col justify-center items-center gap-rx-7 pt-9">
            <Flex direction={'column'} align='center' justify={'center'} gap='3'>
                <Heading size={{
                    initial: '5',
                    md: '7'
                }} color='sky'>Contact Us</Heading>
                <Heading 
                    size={{
                        initial: '7',
                        md: '9'
                    }} 
                    align='center'
                >
                    We love solving problems.
                </Heading>
                <Text
                    color='gray' 
                    size={{
                        initial: '3',
                        md: '5'
                    }}
                    align='center'
                >We're rapidly adapting our platform to meet the needs of our customers. If you have a problem that you need solved, let's talk.</Text>
            </Flex>

            <Flex direction={'column'} align='center' justify={'center'} gap='3' pb='9' width='100%'>
                <ContactForm/>
            </Flex>
        </div>
    )
}