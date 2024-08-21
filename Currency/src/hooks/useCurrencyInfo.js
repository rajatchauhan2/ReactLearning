import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.8.21/v1/currencies/${currency}.json`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result[currency]);
            } catch (err) {
                setError(err.message);
                console.error("Fetch error: ", err);
            }
        };

        fetchData();
    }, [currency]);

    if (error) {
        return { error };
    }

    return data;
}

export default useCurrencyInfo;