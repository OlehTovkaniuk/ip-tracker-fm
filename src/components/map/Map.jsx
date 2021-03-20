import React, { Component } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import iconLocation from '../../img/icon-location.svg';
import './Map.css';

const myIcon = L.icon({
    iconUrl: iconLocation,
    iconSize: [33, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41]
})

export default class Map extends Component {
    render() {
        return (
            <div className="map-container">
                {!this.props.isFetching && !this.props.isError && (
                    <MapContainer className='map' center={[this.props.ipData.location.lat, this.props.ipData.location.lng]} zoom={15.5} zoomControl={false} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[this.props.ipData.location.lat, this.props.ipData.location.lng]} icon={myIcon}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                )}
            </div>
        )
    }
}



