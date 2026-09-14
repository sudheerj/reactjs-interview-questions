import { useEffect, useState } from "react";
import { useThrottle } from "./useThrottle";

export default function App() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const throttledScrollY = useThrottle(scrollY, 1000);

    useEffect(() => {
        console.log("API calling:", throttledScrollY);
    }, [throttledScrollY]);

    return(<div>
        <p>Scroll: {throttledScrollY}</p>
    </div>)
}