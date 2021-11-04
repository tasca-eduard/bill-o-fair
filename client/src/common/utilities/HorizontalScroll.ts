import { WheelEvent } from "react";

export const handleHorizontalScroll = (e: WheelEvent<HTMLDivElement>) => {
    e.preventDefault()
    const container = e.currentTarget;
    const scrollContainerScrollPosition = container.scrollLeft;
    
    container.scrollTo({
        top: 0,
        left: scrollContainerScrollPosition + e.deltaY,
    })
}