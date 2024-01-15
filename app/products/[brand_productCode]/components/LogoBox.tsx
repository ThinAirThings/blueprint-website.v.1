'use client'

import { Container, Sprite, useApp } from "@pixi/react"
import { FC, useEffect, useMemo, useRef, useState } from "react"
import { LogoState } from "./CustomizeProductDialog"
import {Sprite as PixiSprite, Rectangle} from 'pixi.js'
import { fromEvent, takeUntil } from "rxjs"
import { mousePoint } from "@thinairthings/mouse-utils"
import { Updater } from "use-immer"
export const LogoBox: FC<LogoState&{
    updater: Updater<LogoState[]>
}> = ({
    file,
    filename,
    include,
    width,
    height,
    x,
    y,
    aspectRatio,
    updater
}) => {
    const app = useApp()
    useEffect(() => {
        app.stage.eventMode = 'static'
        app.stage.hitArea = new Rectangle(-1e+6, -1e+6, 2e+6, 2e+6);
    }, [])
    // Ref
    const [sprite, setSprite] = useState<PixiSprite | null>(null)
    useEffect(() => {
        console.log("yes")
        if (!sprite) return
        const subscription = fromEvent<PointerEvent>(sprite, 'pointerdown').subscribe((event) => {
            event.stopPropagation()
            event.preventDefault()
            const initialLogoPosition = {
                x: sprite.x,
                y: sprite.y
            }
            const pointerDownPoint = mousePoint(event)
            document.body.setPointerCapture(event.pointerId)
            // Pointer Move
            fromEvent<PointerEvent>(document.body, 'pointermove')
            .pipe(
                takeUntil(fromEvent<PointerEvent, void>(document.body, 'pointerup', {}, event => {
                    document.body.releasePointerCapture(event.pointerId)
                }))
            )
            .subscribe((moveEvent) => {
                const pointerMovePoint = mousePoint(moveEvent)
                updater(draft => {
                    const logoIndex = draft.findIndex(logo => logo.filename === filename)
                    draft[logoIndex].x = initialLogoPosition.x + (pointerMovePoint.x - pointerDownPoint.x)
                    draft[logoIndex].y = initialLogoPosition.y + (pointerMovePoint.y - pointerDownPoint.y)
                })
            })
        })
        return () => subscription.unsubscribe()
    }, [sprite])

    return (
        <Sprite
            eventMode={'static'}
            ref={setSprite}
            image={useMemo(() => URL.createObjectURL(file), [])}
            width={width}
            height={height}
            x={Math.round(x)}
            y={Math.round(y)}
            anchor={0.5}
        />
    )
}