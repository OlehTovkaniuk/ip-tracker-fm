import React, { useState } from 'react';

export default function Form() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleClick = (e) => {
        console.log('value is: ', inputValue);
        e.preventDefault();
    }

    return (
        <form>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Search for any IP address or domain" />
            <input type="submit" value=">>>" onClick={handleClick} />
        </form>
    )
}
