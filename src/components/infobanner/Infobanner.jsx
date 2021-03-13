import React, { useState, useEffect } from 'react';

export default function Infobanner() {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_IP_API_KEY;
        console.log(apiKey);
        fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return response.json().then(errData => {
                    const { code, messages } = errData;
                    const err = new Error(`${code} ${messages}`);
                    throw err;
                });
            })
            .then(data => {
                setBlogs(JSON.stringify(data));
                console.log(data);
            })
            .catch(err => {
                setBlogs(`${err}`);
                console.log(err);
            });
    }, []);


    return (
        <div className='banner-wrapper'>
            <ul>
                <p>{blogs}</p>
            </ul>
        </div>
    )
}
