import { useContext, useLayoutEffect, useRef } from "react"
import { Map } from "mapbox-gl"
import { PlacesContext } from "../../contexts/places/PlacesContext"
import { MapContext } from "../../contexts/maps/MapConetxt"
import { Loading } from "./Loading"

export const MapViewIti = () => {
    
    const {isLoading, userLocation}=useContext(PlacesContext)
    const {setMapIti} = useContext(MapContext)
    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      if(!isLoading){
        const mapIti = new Map({
            container: mapDiv.current!, // container ID
            style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
            center: userLocation, // starting position [lng, lat]
            zoom: 14, // starting zoom
        });
        setMapIti(mapIti);
      }

    }, [isLoading])


    if ( isLoading ){
        return(<Loading/>)
    }
    
    return (
        <div ref={mapDiv} style={{
            height: "70vh",
            width: "100%",
          }}>

        </div>
    )
}
