import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
    const[countries, setCountries]=useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data)
        )
    },[]
)
    console.log(countries);
    

    return (
        <div className='text-center m-5'>
            <h2>Explore the World!!</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    countries.map(country=>
                        <Country key={country.name.official} country={country}></Country>
                    )
                }
            </div>
        </div>
    );
};

export default Countries;