import { Card, Flex, Heading, Inset, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";
import { FC } from "react";
import {load} from 'cheerio'
import {readFile} from "fs/promises";
import Link from "next/link";


export const BlogCard: FC<{
    postName: string,
}> = async ({postName}) => {
    const $ = load(await readFile(process.cwd() + `/app/blog/blog.posts/${postName}/content.html`, 'utf8'))
    const category = $('blockquote').first().text()
    const date = $('h3').first().text()
    const title = $('h1').first().text()

    return (
        <Link href={`/blog/${postName}`}>
            <Card style={{maxWidth: '366px'}}>
                <Inset 
                    style={{maxHeight: '215px'}}
                    clip="padding-box"
                    side="top"
                >
                    <Image src={`/assets/blog.images/${postName}.png`} width={368} height={215} alt={postName}/>
                </Inset>
                <Flex direction={'column'} mt='4' gap='3'>
                    <Flex direction={'column'}>
                        <Text size='3' color='blue' weight='bold'>{category}</Text>
                        <Text size='2' color='gray'>{date}</Text>
                    </Flex>
                    <Heading size='4'>{title}</Heading>
                </Flex>
            </Card>
        </Link>
    )
}