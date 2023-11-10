import { useState, useEffect } from "react"

function useCurrency(currency) {
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    const [data, setData] = useState({})

    useEffect(
        () => {
            fetch(url).then((response) => response.json()).then((result) => setData(result[currency]))
            console.log(data);
        },
        [currency]
    )

    return data
}

export default useCurrency;