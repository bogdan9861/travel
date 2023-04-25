import React from 'react'

const service = () => {
    const getData = async (message) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '84a7dd4e90msh7011c92a2bedd0ep1c234bjsn1fcdc5392b29',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        };
        
        const res = await fetch(`https://travel-advisor.p.rapidapi.com/locations/search?query=${message}&limit=0&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=RU`, options);
        return await res.json();
    }

    return {getData};
}

export default service;