// "use client";
// import { useEffect, useState } from "react";

// const Cursor = () => {
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
//     const [isHovering, setIsHovering] = useState(false);

//     useEffect(() => {
//         const moveCursor = (e) => {
//             setPosition({ x: e.clientX, y: e.clientY });
//         };

//         const handleMouseEnter = () => setIsHovering(true);
//         const handleMouseLeave = () => setIsHovering(false);

//         window.addEventListener("mousemove", moveCursor);
//         document.querySelectorAll("a, button, .interactive").forEach((el) => {
//             el.addEventListener("mouseenter", handleMouseEnter);
//             el.addEventListener("mouseleave", handleMouseLeave);
//         });

//         return () => {
//             window.removeEventListener("mousemove", moveCursor);
//             document.querySelectorAll("a, button, .interactive").forEach((el) => {
//                 el.removeEventListener("mouseenter", handleMouseEnter);
//                 el.removeEventListener("mouseleave", handleMouseLeave);
//             });
//         };
//     }, []);

//     useEffect(() => {
//         const lerp = (start, end, factor) => start + (end - start) * factor;

//         const updatePosition = () => {
//             setTrailingPosition((prev) => ({
//                 x: lerp(prev.x, position.x, 0.6), 
//                 y: lerp(prev.y, position.y, 0.6),
//             }));
//             requestAnimationFrame(updatePosition);
//         };

//         updatePosition();
//     }, [position]);

//     return (
//         <div
//             className={`custom-cursor ${isHovering ? "cursor-hover" : ""}`}
//             style={{
//                 left: `${trailingPosition.x}px`,
//                 top: `${trailingPosition.y}px`,
//                 transform: "translate(-50%, -50%)",
//             }}
//         />
//     );
// };

// export default Cursor;

"use client";
import { useEffect, useState } from "react";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // visibility state

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleVisibility = (e) => {
            // This will be true when mouse leaves the browser window
            if (!e.relatedTarget && !e.toElement) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        const handleHoverEnter = () => setIsHovering(true);
        const handleHoverLeave = () => setIsHovering(false);

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseout", handleVisibility);

        document.querySelectorAll("a, button, .interactive").forEach((el) => {
            el.addEventListener("mouseenter", handleHoverEnter);
            el.addEventListener("mouseleave", handleHoverLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseout", handleVisibility);

            document.querySelectorAll("a, button, .interactive").forEach((el) => {
                el.removeEventListener("mouseenter", handleHoverEnter);
                el.removeEventListener("mouseleave", handleHoverLeave);
            });
        };
    }, []);

    useEffect(() => {
        const lerp = (start, end, factor) => start + (end - start) * factor;

        const updatePosition = () => {
            setTrailingPosition((prev) => ({
                x: lerp(prev.x, position.x, 0.6),
                y: lerp(prev.y, position.y, 0.6),
            }));
            requestAnimationFrame(updatePosition);
        };

        updatePosition();
    }, [position]);

    return (
        <div
            className={`custom-cursor ${isHovering ? "cursor-hover" : ""}`}
            style={{
                left: `${trailingPosition.x}px`,
                top: `${trailingPosition.y}px`,
                transform: "translate(-50%, -50%)",
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.3s ease",
            }}
        />
    );
};

export default Cursor;
