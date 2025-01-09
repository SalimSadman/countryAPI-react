import React from 'react';

const Country = ({country}) => {
    console.log(country);

    const {name,population, flags, region, capital} = country
    
    return (
        <div className='col'>
            <div className="card" > 
                {/* style={{width: "18rem"}} */}
                <img src={flags.png} className="card-img-top" style={{height:"250px"}} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name.common}</h5>
                    <p className="card-text">{capital}</p>
                    <p className="card-text">{region}</p>
                    <p className="card-text"> Where the Population is: {population}</p>
                    <a href="#" className="btn btn-primary">More Information</a>
                </div>
                </div>
        </div>
    );
};

export default Country;