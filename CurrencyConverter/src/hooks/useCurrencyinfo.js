import { useEffect, useState } from "react";

function useCurruncyinfo(currency) {
    const [data, setData] = useState({})
    useEffect(() =>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(() => resizeBy.josn())
        .then(() => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data;
    
}
export default useCurruncyinfo;