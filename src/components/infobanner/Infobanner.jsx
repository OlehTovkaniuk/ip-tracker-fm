import React from 'react';
import './Infobanner.css';

export default function Infobanner({ ipData, isFetching, isError }) {

    return (
        <div className="banner-wrapper">
            <div className='banner'>
                {isFetching && (<p>Loading...</p>)}
                {isError && (<div>
                    <h2>Error!</h2>
                    <p>Input correct IP or URL!</p>
                </div>)}
                {!isFetching && !isError && (<ul>
                    <li>
                        <span className='span-heading'>IP ADDRESS</span><br />
                        <span>{ipData.ip}</span>
                    </li>
                    <li>
                        <span className='span-heading'>LOCATION</span><br />
                        <span>{`${ipData.location.city}, ${ipData.location.region}, ${ipData.location.country}, ${ipData.location.postalCode}`}</span>
                    </li>
                    <li>
                        <span className='span-heading'>TIMEZONE</span><br />
                        <span>{`UTC ${ipData.location.timezone}`}</span>
                    </li>
                    <li>
                        <span className='span-heading'>ISP</span><br />
                        <span>{ipData.isp}</span>
                    </li>
                </ul>)}
            </div>
        </div>
    )
}
