import { useEffect, useState } from "react";

export function useApi(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try{
                setIsLoading(true);
                setIsError(false);

                const response = await fetch(url);
                const json = await response.json();

                console.log(json);

                setData(json);
            } catch (error) {
                console.log(error)
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, isLoading, isError}
}

export default useApi;