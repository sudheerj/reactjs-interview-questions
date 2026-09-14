import {useCallback, useEffect, useRef} from "react";

export function useDebounceCallback<T extends unknown[]>(callback: (...args: T) => void, delay: number): (...args: T) => void {
    const callbackRef = useRef(callback);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    //Always use the latest callback
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);


    const debounced = useCallback((...args: T) => {
        if(timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            callbackRef.current(...args);
        }, delay);

    },[delay]);

    //Cleanup timer on unmount
    useEffect(() => {
        return () => {
            if(timerRef.current) {
                clearTimeout(timerRef.current);
            }
        }
    }, []);

    return debounced;
}