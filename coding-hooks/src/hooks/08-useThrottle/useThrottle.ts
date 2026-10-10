import { useState, useEffect, useRef } from "react";

export function useThrottle<T>(search: T, delay: number): T {
    const [throttledValue, setThrottledValue] = useState<T>(search);
    const lastExecuted = useRef<number>(0);

    useEffect(() => {
        const now = Date.now();
        const remaining = delay - (now - lastExecuted.current);

        if (remaining <= 0) {
            setThrottledValue(search);
            lastExecuted.current = now;
        } else {
            const timer = setTimeout(() => {
                setThrottledValue(search);
                lastExecuted.current = Date.now();
            }, remaining);
            return () => clearTimeout(timer);
        }
    }, [search, delay]);

    return throttledValue;
}