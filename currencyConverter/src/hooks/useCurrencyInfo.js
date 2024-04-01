import { useState,useEffect } from "react";


function useCurrencyInfo(currency){
    //usesate use kiya kyoki age data ko simple variable me store kiya to UI me update nhi hoga
    const [data, setData] = useState({})
     useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response)=>response.json())
        .then((response)=>setData(response[currency]))
     },[currency])
     return data
}
// niche hmne pure ka pura method ko hi return kra diya
export default useCurrencyInfo;