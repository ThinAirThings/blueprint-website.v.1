'use client'
import * as Form from "@radix-ui/react-form"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Flex, Heading, TextField } from "@radix-ui/themes"

export const SmartSearch = () => {
    return (
        <Flex direction={'column'} gap='1'>
            <Heading size='3'>Smart Search</Heading>
            <Form.Root style={{width: '400px'}}>
                <TextField.Root>
                    <TextField.Slot><MagnifyingGlassIcon/></TextField.Slot>
                    <TextField.Input size='2' radius="full" type='text' placeholder={`I'm looking for high visibility vests.`}/>
                </TextField.Root>
            </Form.Root>
        </Flex>
    )
}