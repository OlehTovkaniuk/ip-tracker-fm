import React from 'react'

export default function Form({ onChange, onSubmit }) {

    return (
        <form>
            <input
                type="text"
                onChange={onChange}
                placeholder="Search for any IP address or domain..."
            />
            <input type="submit" value=">>>" onClick={onSubmit} />
        </form>
    )
}
