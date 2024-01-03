'use client'
import { ElementRef, FC, forwardRef } from "react";
import { Button, buttonPropDefs } from "@radix-ui/themes";
import { RotatingLines } from "react-loader-spinner";
import { useFormStatus } from "react-dom";



type ExtractComponentParameters<T extends FC> = Parameters<T>[0];
interface LoadingButtonProps 
    extends ExtractComponentParameters<typeof Button> {
}
export const FormButton = forwardRef<ElementRef<'button'>, LoadingButtonProps>((props, ref) => {
    const {pending} = useFormStatus()
    const {...buttonProps}  = props
    return (
        <Button
            highContrast
            ref={ref}
            {...buttonProps}
        >
            {pending
                ? <RotatingLines
                    width='16'
                    strokeWidth="2"
                    strokeColor='white'
                />
                : props.children
            }
        </Button>
    )
})