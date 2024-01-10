'use client'
import { ElementRef, FC, forwardRef } from "react";
import { Button } from "@radix-ui/themes";
import { RotatingLines } from "react-loader-spinner";



type ExtractComponentParameters<T extends FC> = Parameters<T>[0];
interface LoadingButtonProps 
    extends ExtractComponentParameters<typeof Button> {
        isLoading?: boolean
}
export const LoadingButton = forwardRef<ElementRef<'button'>, LoadingButtonProps>((props, ref) => {
    const {isLoading, ...buttonProps}  = props
    return (
        <Button
            highContrast
            ref={ref}
            {...buttonProps}
        >
            {props.isLoading
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