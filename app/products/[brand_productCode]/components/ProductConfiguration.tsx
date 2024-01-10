'use client'

import { FC, useEffect, useState } from "react"
import { ProductProps } from "../../components/ProductCard/ProductCard"
import { Box, Button, Container, Flex, Grid, Heading, Tooltip } from "@radix-ui/themes"
import Image from "next/image"
import { LightningBoltIcon } from "@radix-ui/react-icons"
import { CustomizeProductDialog } from "./CustomizeProductDialog"


export const ProductConfiguration: FC<ProductProps> = ({
    brand,
    productCode,
    description,
    title,
    colors
}) => {
    // State
    const [selectedColor, setSelectedColor] = useState(colors[0])
    const [selectedOrientation, setSelectedOrientation] = useState(selectedColor.frontImage)
    useEffect(() => {
        setSelectedOrientation(selectedColor.frontImage)
    }, [selectedColor])
    return (
        <Container size={{
            initial: '1',
            sm: '2',
            md: '3',
            lg: '4'
        }}>
            <Flex gap='2'>
                <Flex direction={'column'} gap='3'>
                    {[{
                        orientation: 'Front',
                        src: selectedColor.frontImage
                    }, {
                        orientation: 'Back',
                        src: selectedColor.backImage
                    }, {
                        orientation: 'Side',
                        src: selectedColor.sideImage
                    }].filter(orientation => !!orientation.src).map(({orientation, src}) => (
                        <Tooltip key={orientation} content={orientation}>
                            <Image
                                key={orientation}
                                src={`https://cdn.ssactivewear.com/${src}`}
                                width={100}
                                height={100}
                                alt={`${brand}-${title}`}
                                onClick={() => setSelectedOrientation(src)}
                                style={{
                                    outline: selectedOrientation === src ? `3px solid var(--blue-10)` : 'none',
                                    borderRadius: '10px',
                                    cursor: 'pointer'
                                }}
                            />
                        </Tooltip>
                    ))}
                </Flex>
                    <Tooltip content={selectedColor.name}>
                        <Image
                            src={`https://cdn.ssactivewear.com/${selectedOrientation}`}
                            width={500}
                            height={500}
                            alt={`${brand}-${title}`}
                        />
                    </Tooltip>
                    
                <Flex direction={'column'}>
                    <Flex justify={'between'} align='start'>
                        <Heading size='7'>{brand}</Heading>
                        <CustomizeProductDialog
                            title={title}
                            brand={brand}
                            colors={colors}
                        />
                    </Flex>
                    <Heading size='5' color='gray'>{title}</Heading>
                    <Grid columns={'20'} gapY='2' mt='3' mb='2' onClick={(event) => event.preventDefault()}>
                        {colors.map(color => (
                            <Tooltip key={color.name} content={color.name}>
                                <Flex 
                                    style={{borderRadius: '100px', overflow: 'hidden', width: '24px', height: '24px',
                                        outline: selectedColor.name === color.name ? `3px solid var(--blue-10)` : 'none',
                                        cursor: 'pointer'
                                    }}
                                    onClick={(event) => {
                                        event.preventDefault()
                                        event.stopPropagation()  
                                        setSelectedColor(color)
                                    }}
                                >
                                    <Image 
                                        src={`https://cdn.ssactivewear.com/${color.swatchImage}`} 
                                        width={54}
                                        height={40}
                                        alt={`${brand}-${title}-${color.name}`}
                                    />
                                </Flex>
                            </Tooltip>
                        ))}
                    </Grid>
                    <div
                        dangerouslySetInnerHTML={{ 
                            __html: description 
                        }}
                    />
                </Flex>
            </Flex>
        </Container>
    )
}