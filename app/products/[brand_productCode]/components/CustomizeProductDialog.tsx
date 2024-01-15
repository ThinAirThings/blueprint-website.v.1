'use client'

import { LightningBoltIcon, UploadIcon } from "@radix-ui/react-icons"
import { Box, Button, Dialog, Flex, Grid, Heading, Separator, Switch, Text } from "@radix-ui/themes"
import { FC, useState } from "react"
import { ColorProps } from "../../components/ProductCard/ProductCard"
import { Stage, Sprite } from "@pixi/react"
import { useDropzone } from "react-dropzone";
import { LoadingButton } from "@/app/components/LoadingButton"
import { HStack, VStack } from "@/styled-system/jsx"
import { useImmer } from "use-immer";
import { LogoBox } from "./LogoBox"

export type LogoState = {
    file: File
    filename: string
    include: boolean
    width: number
    height: number
    x: number
    y: number
    aspectRatio: number
}
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
    const [uploadedFiles, setUploadedFiles] = useImmer<LogoState[]>([])
    const {
        getInputProps,
        getRootProps,
        isFileDialogActive,
        acceptedFiles,
    } = useDropzone({
        onDrop: async (acceptedFiles) => {
            const tmpImg = new Image()
            tmpImg.src = URL.createObjectURL(acceptedFiles[0])
            setUploadedFiles(await Promise.all(acceptedFiles.map(async(file) => {
                const tmpImage = new Image()
                tmpImage.src = URL.createObjectURL(file)
                const loadedImage = await new Promise<HTMLImageElement>((resolve, reject) => {
                    tmpImg.onload = () => resolve(tmpImg)
                    tmpImg.onerror = () => reject(new Error(`Failed to load image`));
                })
                const aspectRatio = loadedImage.width / loadedImage.height
                return {
                    file,
                    filename: file.name,
                    include: true,
                    aspectRatio,
                    x: 250,
                    y: 250,
                    width: aspectRatio >= 1 ? 100 : 100 * aspectRatio,
                    height: aspectRatio < 1 ? 100 : 100 / aspectRatio
                }
            })))
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
                    <Grid columns='3' gap='3'>
                        <Flex direction={'column'}>
                            <Heading>{brand}</Heading>
                            <Heading size='5' color='gray'>{title}</Heading>
                            <Box>
                                <Stage
                                    width={500}
                                    height={625}
                                    options={{
                                        eventMode: 'static',
                                    }}
                                >
                                    <Sprite
                                        image={'https://cdn.ssactivewear.com/' + colors[0].frontImage}
                                    />
                                    {uploadedFiles.map((upload, index) => (
                                        upload.include && <LogoBox 
                                            key={upload.filename} 
                                            {...upload}
                                            updater={setUploadedFiles}
                                        />
                                    ))}
                                </Stage>
                            </Box>
                        </Flex>
                        <Separator orientation='vertical' size='4'/>
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
                                {uploadedFiles.map((upload, index) => (
                                    <VStack key={upload.filename}>
                                        <img 
                                            src={URL.createObjectURL(upload.file)}
                                            style={{
                                                maxWidth: '100px',
                                                height: 'auto'
                                            }}
                                        />
                                        <HStack alignItems={'center'} justify={'center'} gap='2'>
                                            <Text weight='medium'>Include</Text>
                                            <Switch 
                                                radius="full"
                                                checked={upload.include}
                                                onCheckedChange={(checked) => setUploadedFiles(draft => {
                                                    draft[index].include = checked
                                                })}
                                            />
                                        </HStack>
                                    </VStack>
                                ))}
                            </Flex>
                        </Flex>

                    </Grid>

                </Dialog.Content>
            </Dialog.Root> 
        </>

    )
}