import {useState, useEffect} from "react";

export function useLocalStorage<T>(key: string, initial: T) {
    const [value, setValue] = useState<T>(() => {
        if (typeof window === "undefined") {
            return initial;
        }

        try {
            const saved = localStorage.getItem(key);

            return saved ? JSON.parse(saved) : initial;
        } catch {
            return initial;
        }
    });

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {
            // Ignore write errors (e.g. storage full or unavailable)
        }
    }, [key, value]);

    return [value, setValue] as const;
}
