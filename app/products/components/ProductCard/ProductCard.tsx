'use client'
import { AspectRatio, Card, Flex, Grid, Heading, Inset, Text, Tooltip } from "@radix-ui/themes"
import Image from "next/image"
import Link from "next/link"
import { FC, useState } from "react"

export type ColorProps = {
    name: string,
    frontImage: string,
    backImage: string,
    sideImage: string,
    swatchImage: string,
}

export type ProductProps = {
    brand: string
    productCode: string
    title: string
    description: string
    category: string
    colors: ColorProps[]
}

export const ProductCard: FC<ProductProps> = ({
    brand,
    productCode,
    title,
    colors
}) => {
    // State
    const [selectedColor, setSelectedColor] = useState(colors[0])
    return (
        <Link href={`/products/${brand.replace(' ', '_')}-${productCode}`}>
            <Card style={{maxWidth: '300px', height: '100%'}}>
                <Inset
                    clip="padding-box"
                    side="top"
                >
                    <AspectRatio ratio={1000/1250}>
                        <Image 
                            src={`https://cdn.ssactivewear.com/${selectedColor.frontImage}`} 
                            fill
                            alt={`${brand}-${title}`}
                        />
                    </AspectRatio>
                </Inset>
                <Flex direction={'column'} mt='4' >
                    <Heading size='4'>{brand}</Heading>
                    <Heading size='3' color='gray'>{title}</Heading>
                    <Grid columns={'7'} gapY='2' mt='3' mb='2' onClick={(event) => event.preventDefault()}>
                        {colors.slice(0, 21).map(color => (
                            <Tooltip key={color.name} content={color.name}>
                                <Flex 
                                    style={{borderRadius: '100px', overflow: 'hidden', width: '24px', height: '24px',
                                        outline: selectedColor.name === color.name ? `3px solid var(--blue-10)` : 'none',
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
                    <Text>+ {colors.length-21} more colors</Text>
                </Flex>
            </Card>
        </Link>
    )
}