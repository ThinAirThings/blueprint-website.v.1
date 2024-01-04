import { Button } from "@radix-ui/themes"
import Link from "next/link"
import { FC } from "react"



export const ContactUsButton: FC<{
    label: string
    Icon: FC
}> = ({
    label,
    Icon
}) => {
    return (
        <Link href="/contact-us">
            <Button highContrast><Icon/>{label}</Button>
        </Link>
    )
}