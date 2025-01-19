import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            try {
                const res = await fetch(url, { signal: abortController.signal });
                if (!res.ok) {
                        throw new Error(`error: ${res.status} - ${res.statusText}`);
                }
                const jsonData = await res.json();
                setData(jsonData);
                setIsPending(false);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Fetch aborted due to component unmount or URL change");
                } else {
                    //Server not response
                    setIsPending(false);
                    setError(error.message);
                }
            }
        };

        fetchData();

        return () => {
            abortController.abort();
        };
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;
