import { WheelEvent } from "react";

export function handleHorizontalScroll(e: WheelEvent<HTMLElement>) {
    e.preventDefault()
    const container = e.currentTarget;
    const scrollContainerScrollPosition = container.scrollLeft;
    
    container.scrollTo({
        top: 0,
        left: scrollContainerScrollPosition + e.deltaY,
    })
}