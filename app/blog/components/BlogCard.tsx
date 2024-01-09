import { Card, Heading, Inset } from "@radix-ui/themes";
import Image from "next/image";
import { FC } from "react";
import {load} from 'cheerio'
import path from "path";
import {readFile} from "fs/promises";


export const BlogCard: FC<{
    postName: string,
}> = async ({postName}) => {
    const $ = load(await readFile(process.cwd() + `/app/blog/blog.posts/${postName}/content.html`, 'utf8'))
    const title = $('h1').first().text()
    return (
        <Card style={{maxWidth: '366px'}}>
            <Inset 
                style={{maxHeight: '215px'}}
                clip="padding-box"
                side="top"
            >
                <Image src={`/assets/blog.images/${postName}.png`} width={368} height={215} alt={postName}/>
            </Inset>
            <Heading size='5'>{title}</Heading>
        </Card>
    )
}