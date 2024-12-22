import React, { useEffect, useState } from "react";

const FetchCountryAPI = () => {

    const [country, setCountry] = useState([])
    
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await fetch('https://countriesnow.space/api/v0.1/countries/capital');
                const data = await response.json();
                setCountry(data.data)
                console.log(data);
            } catch(error) {
                
            } finally {

            }
        }
        fetchData();
    })
    return(
        <div>
            {
                country.map((country, index) => (
                    <table key={index}><tr><td>{country.iso3} || {country.name}</td></tr></table>
                    
                ))
            }
        </div>
    )
}
export default FetchCountryAPI