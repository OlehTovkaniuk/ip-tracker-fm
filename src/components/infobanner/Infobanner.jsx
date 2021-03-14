import React from 'react';

export default function Infobanner({ ipData, dataIsReady }) {

    return (
        <div className='banner-wrapper'>
            {dataIsReady && (<ul>
                <li>
                    <span>IP ADDRESS</span><br />
                    <span>{ipData.ip}</span>
                </li>
                <li>
                    <span>LOCATION</span><br />
                    <span>{`${ipData.location.city}, ${ipData.location.region}, ${ipData.location.country}`}</span>
                </li>
                <li>
                    <span>TIMEZONE</span><br />
                    <span>{ipData.location.timezone}</span>
                </li>
                <li>
                    <span>ISP</span><br />
                    <span>{ipData.isp}</span>
                </li>
            </ul>)}
        </div>
    )
}
