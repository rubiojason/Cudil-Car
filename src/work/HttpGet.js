import React, { useEffect } from 'react'; 

function HttpGet() {

    useEffect(() => {
        const getApi = async () => {
            const httpData = await fetch('https://api.npms.io/v2/search?q=react'); 
            const info = await httpData.json(); 
            console.log(info.results); 
        }

        getApi(); 
    }, []); 

    return (
        <div style={{color: 'white'}}>
            deez nuts
        </div>
    )
}

export default HttpGet; 
