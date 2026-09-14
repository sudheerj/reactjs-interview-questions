import { useState, useRef, useEffect } from "react";

export function useThrottle<T>(value: T, delay: number): T {
    const [throttledValue, setThrottledValue] = useState<T>(value);
    const lastExecuted = useRef<number>(0);

    useEffect(() => {
        const now = Date.now();
        const remaining = delay -(now-lastExecuted.current);

        if(remaining <=0) {
            setThrottledValue(value);
            lastExecuted.current = now;
        } else {
            const timer = setTimeout(() => {
                setThrottledValue(value);
                lastExecuted.current = Date.now();
            }, delay);

            return () => clearTimeout(timer);
        }
    },[value, delay]);

    return throttledValue;
}
