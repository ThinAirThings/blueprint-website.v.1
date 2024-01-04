import { MobileIcon } from "@radix-ui/react-icons"
import { Button, Text } from "@radix-ui/themes"
import Link from "next/link"
import { FC } from "react"


export const CallUsButton: FC<{
    label: string
    Icon: FC
}> = ({
    label,
    Icon
}) => {
    return (
        <Link href="tel:+16036823603">
            <Button highContrast variant="outline"><Icon/><Text weight='medium'>{label}</Text></Button>
        </Link>
    )
}