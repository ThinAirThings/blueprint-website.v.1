'use server'
import { Container, Flex, Heading } from "@radix-ui/themes"
import Image from "next/image"
import { unstable_cache as cache } from 'next/cache';
import { db } from "@/app/libs/dynamodb";
import { ColorProps } from "../components/ProductCard/ProductCard";
import { ProductConfiguration } from "./components/ProductConfiguration";

const getCachedProduct = cache(async (brand: string, productCode: string) => {
    console.log(brand)
    const product = (await db.get({
        TableName: process.env.PRODUCTS_TABLE,
        Key: {
            'brand#productCode': `${brand.replace(' ', '_')}#${productCode}`
        }
    })).Item as {
        "brand#productCode": string
        title: string
        description: string
        category: string
        colors: ColorProps[]
    }
    return {
        ...product,
        brand: product['brand#productCode'].split('#')[0].replaceAll('_', ' '),
        productCode: product['brand#productCode'].split('#')[1]
    }
}, ['product'], {
    revalidate: 5
})

export default async function ({
    params
}: {
    params: {
        brand_productCode: string
    }
}) {
    console.log(params.brand_productCode)
    const [brand, productCode] = params.brand_productCode.split('-') as [string, string]
    const productData = await getCachedProduct(brand, productCode)
    return (
        <ProductConfiguration
            {...productData}
        />
    )
}