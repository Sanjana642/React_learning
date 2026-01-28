import { useEffect, useState } from "react";

function useCurrencyInfo (currency){
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())  
        .then((res) => setData(res[currency])) //[currency] is key, you can write res.currency also as setdata is storing this data 
        console.log(data); //check the data if you want to
    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;