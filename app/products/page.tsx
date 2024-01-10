import { Box, Flex, Heading } from "@radix-ui/themes";
import { SmartSearch } from "./components/SmartSearch/SmartSearch";
import { db } from "../libs/dynamodb";
import { ColorProps, ProductCard } from "./components/ProductCard/ProductCard";
import { unstable_cache as cache } from 'next/cache';

const getCachedProducts = cache(async () => (await db.scan({
    TableName: process.env.PRODUCTS_TABLE,
    Limit: 100
})).Items?.map(item => ({
    ...item,
    brand: item['brand#productCode'].split('#')[0].replace('_', ' '),
    productCode: item['brand#productCode'].split('#')[1]
})) as {
    brand: string
    productCode: string
    title: string
    description: string
    category: string
    colors: ColorProps[]
}[], ['products'], {
    tags: ['products'],
    revalidate: 5
})

export default async function () {
    const products = await getCachedProducts()
    return (
        <Flex px='9' className="w-full h-full" direction={'column'}>
            <Heading>Products</Heading>
            <Box className="self-center"><SmartSearch/></Box>
            <div
                className="grid grid-cols-4 py-9 gap-5"
            >
                {products.map(product => (
                    <ProductCard key={product.title} {...product}/>
                ))}
            </div>
        </Flex>
    )
}