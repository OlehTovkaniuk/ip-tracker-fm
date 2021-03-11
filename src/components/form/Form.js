import React from 'react'

export default function Form() {
    const [inputValue, setInputValue] = useState('Search for any IP address or domain');

    const handleChange = (e) => {
        setInputValue();
    }


    return (
        <form>
            <input type="text" value={inputValue} onChange={handleChange} />
            <input type="submit" value=">" />
        </form>
    )
}
