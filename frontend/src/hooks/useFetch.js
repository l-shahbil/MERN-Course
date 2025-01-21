import { useEffect, useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const useFetch = (url) => {
    const {workouts , dispatch} = useWorkoutsContext();
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
                dispatch({type: 'SET_WORKOUTS', payload: jsonData})
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
    }, [dispatch]);
    return { workouts, isPending, error };
};

export default useFetch;
