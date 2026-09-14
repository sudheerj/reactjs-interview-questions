import {useEffect, useState} from "react";

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T|null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        setError(null);

        fetch(url, { signal: controller.signal })
            .then(response => response.json())
            .then((result) => {
                setData(result);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof Error && err.name === "AbortError") {
                    return;
                }

                setError(err instanceof Error ? err.message : "Something went wrong");
                setLoading(false);
            });

        return () => controller.abort();
    }, [url]);

    return {data, loading, error};
}
