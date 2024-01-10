'use client'

import { LightningBoltIcon, UploadIcon } from "@radix-ui/react-icons"
import { Box, Button, Dialog, DialogTitle, Flex, Grid, Heading, Text } from "@radix-ui/themes"
import { FC, useRef, useState } from "react"
import { ColorProps } from "../../components/ProductCard/ProductCard"
import { Stage, Sprite } from "@pixi/react"
import { useDropzone } from "react-dropzone";
import { LoadingButton } from "@/app/components/LoadingButton"

export const CustomizeProductDialog: FC<{
    brand: string
    title: string
    colors: ColorProps[]
}> = ({
    brand,
    title,
    colors
}) => {
    // State
    const [open, setOpen] = useState(false)
    const {
        getInputProps,
        getRootProps,
        isFileDialogActive,
        acceptedFiles,
    } = useDropzone({
        onDrop: async (acceptedFiles) => {
            console.log(acceptedFiles)
        }
    })
    // Refs
    return (
        <>
            <input {...getInputProps()}/>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Box><Button size='2' highContrast><LightningBoltIcon/>Customize</Button></Box>
                </Dialog.Trigger>
                <Dialog.Content style={{minWidth: '70%'}}>
                    <Grid columns='2'>
                        <Flex direction={'column'}>
                            <Heading>{brand}</Heading>
                            <Heading size='5' color='gray'>{title}</Heading>
                            <Box>
                                <Stage
                                    width={500}
                                    height={625}
                                >
                                    <Sprite
                                        image={'https://cdn.ssactivewear.com/' + colors[0].frontImage}
                                    />
                                </Stage>
                            </Box>
                        </Flex>
                        <Flex direction={'column'} gap='1'>
                            <Heading>Customization & Ordering</Heading>
                            <Heading size='5' color='gray'>Upload and place your logo, select your sizes, and get a quote!</Heading>
                            <Box>
                                <LoadingButton 
                                    isLoading={isFileDialogActive} 
                                    {...getRootProps()} 
                                    size='1' 
                                    highContrast
                                ><UploadIcon/>Upload Logo</LoadingButton>
                            </Box>
                            <Text weight='bold'>Logos</Text>
                            <Flex>
                                {acceptedFiles.map(file => (
                                    <Box></Box>
                                ))}
                            </Flex>
                        </Flex>

                    </Grid>

                </Dialog.Content>
            </Dialog.Root> 
        </>

    )
}