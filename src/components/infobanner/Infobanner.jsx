import React from 'react';

export default function Infobanner({ ipData, dataIsReady, isError }) {

    return (
        <div className='banner-wrapper'>
            {!dataIsReady && (<p>Loading...</p>)}
            {isError && (<div>
                <h2>Error!</h2>
                <p>Input correct IP or URL!</p>
            </div>)}
            {dataIsReady && !isError && (<ul>
                <li>
                    <span>IP ADDRESS</span><br />
                    <span>{ipData.ip}</span>
                </li>
                <li>
                    <span>LOCATION</span><br />
                    <span>{`${ipData.location.city}, ${ipData.location.region}, ${ipData.location.country}, ${ipData.location.postalCode}`}</span>
                </li>
                <li>
                    <span>TIMEZONE</span><br />
                    <span>{`UTC ${ipData.location.timezone}`}</span>
                </li>
                <li>
                    <span>ISP</span><br />
                    <span>{ipData.isp}</span>
                </li>
            </ul>)}
        </div>
    )
}
