import React, {useEffect, useState}from 'react';

function Ubicacion() {
    const [coordenadas, setCoordenadas] = useState(
        {latitud: null,
        longitud: null}
    );
let geoId;
    useEffect(()=>{
        geoId = window.navigator.geolocation.watchPosition(position =>{
            setCoordenadas({
                latitud: position.coords.latitude,
                longitud: position.coords.longitude
            })
        })
        return (
            navigator.geolocation.clearWatch(geoId)
        );
    })
   
    return coordenadas;
    
}

export default Ubicacion;