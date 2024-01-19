import { Container, Flex } from "@radix-ui/themes"
import { readFile } from "fs/promises"
import styles from './blogPost.module.scss'
import Image from "next/image"
import path from "path"
import { Metadata } from "next"


export async function generateMetadata({
    params
}: {
    params: {
        postName: string
    }
}): Promise<Metadata> {
    // Get the metadata of the post
    const metadataJson = JSON.parse(await readFile(path.resolve(`public/assets/blog.posts/${params.postName}/metadata.json`), 'utf8'))
    return {
        title: metadataJson.title,
        description: metadataJson.description,
    }
}

export default async function ({
    params
}: {
    params: {
        postName: string
    }
}) {
    const htmlContent = await readFile(path.resolve(`public/assets/blog.posts/${params.postName}/content.html`), 'utf8')
    return (
        <Container 
            size={{
                initial: '1',
                sm: '2',
                md: '3',
                lg: '4'
            }}
            px={{
                initial: '4'
            }}
        >
            <Flex justify={'center'}>
                <Flex direction='column' align={'center'} my='5' style={{borderRadius: '10px', overflow: 'hidden', maxWidth: '784px'}}>
                    <Image 
                        alt={`${params.postName}-image`} 
                        src={`/assets/blog.posts/${params.postName}/image.png`}
                        width={784}
                        height={508}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </Flex>
            </Flex>
            <div 
                className={styles.blogPost}
                dangerouslySetInnerHTML={{ __html: htmlContent }} 
            />
        </Container>
    )
}